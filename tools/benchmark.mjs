#!/usr/bin/env node

/**
 * Benchmarks building app0 from source vs incrementally (libs pre-built with ng-packagr).
 *
 * For each mode it measures:
 *   - cold:        empty Nx cache, no dist output
 *   - lib-changed: one file in lib0 changed, Nx cache populated by the cold run
 *   - cache-hit:   nothing changed, everything replayed from the Nx cache
 *
 * Wall time, peak memory of the whole process tree and per-task timings (from the Nx profile)
 * are written to tmp/benchmark/results.json, and a Markdown summary to tmp/benchmark/summary.md
 * (also appended to the GitHub job summary when running in Actions).
 *
 * Usage: node tools/benchmark.mjs [--iterations=3]
 */

import { spawn, execFileSync } from 'node:child_process';
import { appendFileSync, mkdirSync, readFileSync, rmSync, writeFileSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = process.cwd();
const OUT_DIR = join(ROOT, 'tmp/benchmark');
const PROFILES_DIR = join(OUT_DIR, 'profiles');
const CHANGED_FILE = 'libs/app0/lib0/src/lib/child-0/sub-children/sub-child-0.component.ts';
const LIBS = ['app0-lib0', 'app0-lib1', 'app0-lib2', 'app0-lib3', 'app0-lib4', 'app0-shell'];
const MEMORY_POLL_MS = 250;

const iterations = Number(
  process.argv.find((arg) => arg.startsWith('--iterations='))?.split('=')[1] ?? 3
);

if (!Number.isInteger(iterations) || iterations < 1) {
  console.error(`--iterations must be a positive integer, got "${iterations}"`);
  process.exit(1);
}

const NX_ENV = {
  NX_DAEMON: 'false',
  NX_NO_CLOUD: 'true',
  NX_TUI: 'false',
};

const MODES = {
  source: {
    label: 'From source',
    description: 'app0 compiles all libs from source (`buildLibsFromSource: true`)',
    build: ['build', 'app0', '--excludeTaskDependencies'],
  },
  incremental: {
    label: 'Incremental',
    description: 'libs built with ng-packagr, app0 consumes `dist` (`buildLibsFromSource: false`)',
    build: ['build', 'app0', '--buildLibsFromSource=false'],
  },
};

const SCENARIOS = [
  { key: 'cold', label: 'Cold', setup: resetWorkspace },
  { key: 'lib-changed', label: 'One lib changed', setup: changeLib },
  { key: 'cache-hit', label: 'Nx cache hit', setup: () => {} },
];

function resetWorkspace() {
  revertLibChange();
  execFileSync('npx', ['nx', 'reset', '--onlyCache'], { stdio: 'ignore', env: { ...process.env, ...NX_ENV } });
  for (const dir of ['dist', '.angular/cache', 'tmp/out-tsc']) {
    rmSync(join(ROOT, dir), { recursive: true, force: true });
  }
}

function changeLib() {
  appendFileSync(join(ROOT, CHANGED_FILE), `\n// benchmark change ${Date.now()}\n`);
}

function revertLibChange() {
  execFileSync('git', ['checkout', '--', CHANGED_FILE], { cwd: ROOT });
}

/** Sums the RSS (in bytes) of `rootPid` and all of its descendants. */
function processTreeRss(rootPid) {
  let output;
  try {
    output = execFileSync('ps', ['-A', '-o', 'pid=,ppid=,rss='], { encoding: 'utf8' });
  } catch {
    return 0;
  }
  const children = new Map();
  const rss = new Map();
  for (const line of output.trim().split('\n')) {
    const [pid, ppid, kb] = line.trim().split(/\s+/).map(Number);
    rss.set(pid, kb * 1024);
    if (!children.has(ppid)) children.set(ppid, []);
    children.get(ppid).push(pid);
  }
  let total = 0;
  const queue = [rootPid];
  while (queue.length) {
    const pid = queue.pop();
    total += rss.get(pid) ?? 0;
    queue.push(...(children.get(pid) ?? []));
  }
  return total;
}

function runNx(args, profilePath) {
  return new Promise((resolve, reject) => {
    const start = performance.now();
    const child = spawn('npx', ['nx', ...args, '--output-style=static'], {
      cwd: ROOT,
      // Nx resolves NX_PROFILE relative to the workspace root
      env: { ...process.env, ...NX_ENV, NX_PROFILE: relative(ROOT, profilePath) },
      stdio: ['ignore', 'inherit', 'inherit'],
    });
    let peakRss = 0;
    const poll = setInterval(() => {
      peakRss = Math.max(peakRss, processTreeRss(child.pid));
    }, MEMORY_POLL_MS);
    child.on('error', reject);
    child.on('exit', (code) => {
      clearInterval(poll);
      const durationMs = performance.now() - start;
      if (code !== 0) {
        reject(new Error(`nx ${args.join(' ')} exited with code ${code}`));
        return;
      }
      resolve({ durationMs, peakRss });
    });
  });
}

function readTasks(profilePath) {
  if (!existsSync(profilePath)) return [];
  return JSON.parse(readFileSync(profilePath, 'utf8'))
    .filter((event) => event.ph === 'X')
    .map((event) => ({ task: event.name, durationMs: event.dur / 1000, status: event.args?.status }));
}

async function main() {
  mkdirSync(PROFILES_DIR, { recursive: true });
  const runs = [];

  try {
    for (let iteration = 1; iteration <= iterations; iteration++) {
      for (const [modeKey, mode] of Object.entries(MODES)) {
        for (const scenario of SCENARIOS) {
          scenario.setup();
          const name = `${modeKey}-${scenario.key}-${iteration}`;
          const profilePath = join(PROFILES_DIR, `${name}.json`);
          console.log(`\n=== [${iteration}/${iterations}] ${mode.label} · ${scenario.label} ===\n`);
          const { durationMs, peakRss } = await runNx(mode.build, profilePath);
          const run = {
            iteration,
            mode: modeKey,
            scenario: scenario.key,
            durationMs,
            peakRss,
            tasks: readTasks(profilePath),
          };
          runs.push(run);
          console.log(`\n→ ${(durationMs / 1000).toFixed(1)}s, peak ${formatBytes(peakRss)}`);
        }
      }
    }
  } finally {
    revertLibChange();
  }

  const results = {
    date: new Date().toISOString(),
    commit: execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim(),
    node: process.version,
    runner: process.env.RUNNER_NAME ?? null,
    nodeOptions: process.env.NODE_OPTIONS ?? null,
    iterations,
    runs,
  };
  writeFileSync(join(OUT_DIR, 'results.json'), JSON.stringify(results, null, 2));

  const summary = renderSummary(results);
  writeFileSync(join(OUT_DIR, 'summary.md'), summary);
  if (process.env.GITHUB_STEP_SUMMARY) {
    appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary);
  }
  console.log(`\n${summary}`);
}

function renderSummary({ commit, node, iterations, runs, nodeOptions }) {
  const lines = [
    '## Build benchmark: from source vs incremental',
    '',
    `Commit \`${commit.slice(0, 8)}\` · Node ${node} · ${iterations} iteration(s) · \`NODE_OPTIONS=${nodeOptions ?? ''}\``,
    '',
    ...Object.entries(MODES).map(([, mode]) => `- **${mode.label}**: ${mode.description}`),
    '',
    `Time and memory are the median across iterations (min–max in brackets). Memory is the peak RSS of the whole Nx process tree. "One lib changed" edits \`${CHANGED_FILE}\`.`,
    '',
    '| Scenario | Mode | Wall time | Peak memory | Tasks run / cached |',
    '| --- | --- | --- | --- | --- |',
  ];

  for (const scenario of SCENARIOS) {
    for (const [modeKey, mode] of Object.entries(MODES)) {
      const matching = runs.filter((run) => run.mode === modeKey && run.scenario === scenario.key);
      const times = matching.map((run) => run.durationMs / 1000);
      const memory = matching.map((run) => run.peakRss);
      const tasks = matching[0]?.tasks ?? [];
      const cached = tasks.filter((task) => task.status?.includes('cache')).length;
      lines.push(
        `| ${scenario.label} | ${mode.label} | ${stat(times, (s) => `${s.toFixed(1)}s`)} | ${stat(memory, formatBytes)} | ${tasks.length - cached} / ${cached} |`
      );
    }
  }

  lines.push('', '<details><summary>Per-task timings (first iteration)</summary>', '');
  lines.push('| Scenario | Mode | Task | Duration | Status |', '| --- | --- | --- | --- | --- |');
  for (const run of runs.filter((run) => run.iteration === 1)) {
    for (const task of run.tasks) {
      lines.push(
        `| ${SCENARIOS.find((s) => s.key === run.scenario).label} | ${MODES[run.mode].label} | \`${task.task}\` | ${(task.durationMs / 1000).toFixed(1)}s | ${task.status} |`
      );
    }
  }
  lines.push('', '</details>', '');
  return lines.join('\n');
}

function stat(values, format) {
  if (!values.length) return 'n/a';
  const sorted = [...values].sort((a, b) => a - b);
  const median = sorted[Math.floor(sorted.length / 2)];
  if (sorted.length === 1) return format(median);
  return `${format(median)} (${format(sorted[0])}–${format(sorted.at(-1))})`;
}

function formatBytes(bytes) {
  return `${(bytes / 1024 ** 3).toFixed(2)} GB`;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
