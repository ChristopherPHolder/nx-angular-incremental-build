#!/usr/bin/env node

/**
 * Memory experiments on the entry-points demo: how much memory building the apps from source needs
 * compared with incremental builds, whether Angular's own knobs bring it down, and where builds run
 * out of memory.
 *
 *   0. default-heap: build app0 from source and incrementally with Node's default heap limit (no
 *                --max-old-space-size)
 *   1. threads:  build app1 from source with the default settings, NG_BUILD_PARALLEL_TS=0 (TypeScript
 *                on the main thread instead of a worker) and NG_BUILD_MAX_WORKERS=1 (one worker thread)
 *   2. heap:     build app1 from source, and incrementally against pre-built libs, under shrinking
 *                --max-old-space-size limits, and record which ones run out of memory
 *   3. parallel: build every app of the demo from source with --parallel=2, and incrementally with
 *                @angular/build:library with --parallel=3
 *   4. parallel-limit: build every app of the demo from source with --parallel=3. On a 16 GB machine this
 *                runs out of memory, so it is its own experiment (and CI job)
 *
 * Every build skips the Nx cache. Peak memory is the peak RSS of the whole Nx process tree.
 * Results go to tmp/memory/results.json and tmp/memory/summary.md.
 *
 * Usage: node tools/memory-experiments.mjs [--experiments=default-heap,threads,heap,parallel,parallel-limit]
 */

import { spawn, execFileSync } from 'node:child_process';
import { appendFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const OUT_DIR = join(ROOT, 'tmp/memory');
const MEMORY_POLL_MS = 250;
const NX_ENV = { NX_DAEMON: 'false', NX_NO_CLOUD: 'true', NX_TUI: 'false' };
const DEFAULT_HEAP = '--max-old-space-size=8192';

const selected = process.argv.find((arg) => arg.startsWith('--experiments='))?.split('=')[1]?.split(',');

function nxProjects(pattern, type) {
  const output = execFileSync('npx', ['nx', 'show', 'projects', '--projects', pattern, ...(type ? ['--type', type] : []), '--json'], {
    encoding: 'utf8',
    env: { ...process.env, ...NX_ENV },
  });
  return JSON.parse(output).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
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

/** Runs Nx and resolves with its duration, peak memory and whether it ran out of memory. Never rejects on a failed build. */
function runNx(args, env = {}) {
  return new Promise((resolve, reject) => {
    const start = performance.now();
    const child = spawn('npx', ['nx', ...args, '--skip-nx-cache', '--output-style=static'], {
      cwd: ROOT,
      env: { ...process.env, ...NX_ENV, NODE_OPTIONS: DEFAULT_HEAP, ...env },
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let output = '';
    for (const stream of [child.stdout, child.stderr]) {
      stream.on('data', (chunk) => {
        output += chunk;
        process.stdout.write(chunk);
      });
    }
    let peakRss = 0;
    const poll = setInterval(() => {
      peakRss = Math.max(peakRss, processTreeRss(child.pid));
    }, MEMORY_POLL_MS);
    child.on('error', reject);
    child.on('exit', (code) => {
      clearInterval(poll);
      // Node reports a full heap itself; the Linux OOM killer instead SIGKILLs a process (exit code 137)
      const outOfMemory =
        /heap out of memory|ERR_WORKER_OUT_OF_MEMORY|Allocation failed|Reached heap limit|SIGKILL|code 137|Killed/i.test(output);
      resolve({ durationMs: performance.now() - start, peakRss, ok: code === 0, outOfMemory });
    });
  });
}

// Results are saved after every build, so a runner that dies part-way (e.g. out of memory) keeps what it measured
const results = {};
let currentExperiment;

function save() {
  writeFileSync(
    join(OUT_DIR, 'results.json'),
    JSON.stringify({ date: new Date().toISOString(), node: process.version, ci: process.env.CI ?? null, results }, null, 2)
  );
  writeFileSync(join(OUT_DIR, 'summary.md'), renderSummary(results));
}

async function measure(label, args, env) {
  console.log(`\n=== ${label} ===\n`);
  const result = await runNx(args, env);
  console.log(`\n→ ${result.ok ? 'ok' : result.outOfMemory ? 'OUT OF MEMORY' : 'FAILED'}, ${(result.durationMs / 1000).toFixed(1)}s, peak ${formatBytes(result.peakRss)}`);
  const entry = { label, args: args.join(' '), env, ...result };
  (results[currentExperiment] ??= []).push(entry);
  save();
  return entry;
}

const EXPERIMENTS = {
  async 'default-heap'() {
    // An empty NODE_OPTIONS leaves Node at its default heap limit (about 4 GB on 64-bit machines)
    const env = { NODE_OPTIONS: '' };
    return [
      await measure('app0 from source, default heap', ['build', 'app0', '--excludeTaskDependencies', '--buildLibsFromSource=true'], env),
      await measure('app0 incremental (@angular/build:library), default heap', ['build', 'app0', '--buildLibsFromSource=false'], env),
      await measure('app0 incremental (ng-packagr), default heap', ['build-ng-packagr', 'app0'], env),
    ];
  },

  async threads() {
    const build = ['build', 'app1', '--excludeTaskDependencies', '--buildLibsFromSource=true'];
    return [
      await measure('Default', build, {}),
      await measure('NG_BUILD_PARALLEL_TS=0', build, { NG_BUILD_PARALLEL_TS: '0' }),
      await measure('NG_BUILD_MAX_WORKERS=1', build, { NG_BUILD_MAX_WORKERS: '1' }),
      await measure('NG_BUILD_PARALLEL_TS=0 NG_BUILD_MAX_WORKERS=1', build, { NG_BUILD_PARALLEL_TS: '0', NG_BUILD_MAX_WORKERS: '1' }),
    ];
  },

  async heap() {
    // The incremental app build needs its libs in dist
    await runNx(['run-many', '-t', 'build', '-p', 'shared-ui*,app1-lib*']);
    const results = [];
    for (const heap of [4096, 3072, 1536]) {
      const env = { NODE_OPTIONS: `--max-old-space-size=${heap}` };
      results.push(
        await measure(`From source, ${heap} MB heap`, ['build', 'app1', '--excludeTaskDependencies', '--buildLibsFromSource=true'], env),
        await measure(`Incremental app build, ${heap} MB heap`, ['build', 'app1', '--excludeTaskDependencies', '--buildLibsFromSource=false'], env),
        await measure(`Biggest lib build (@angular/build:library), ${heap} MB heap`, ['build', 'app1-lib0', '--excludeTaskDependencies'], env),
        await measure(`Biggest lib build (ng-packagr), ${heap} MB heap`, ['build-ng-packagr', 'app1-lib0', '--excludeTaskDependencies'], env)
      );
    }
    return results;
  },

  async parallel() {
    const apps = nxProjects('tag:demo:entry-points', 'app').join(',');
    return [
      await measure('All apps from source, --parallel=2', ['run-many', '-t', 'build', '-p', apps, '--excludeTaskDependencies', '--buildLibsFromSource=true', '--parallel=2']),
      await measure('All apps incremental (@angular/build:library), --parallel=3', ['run-many', '-t', 'build', '-p', apps, '--buildLibsFromSource=false', '--parallel=3']),
    ];
  },

  async 'parallel-limit'() {
    const apps = nxProjects('tag:demo:entry-points', 'app').join(',');
    return [
      await measure('All apps from source, --parallel=3', ['run-many', '-t', 'build', '-p', apps, '--excludeTaskDependencies', '--buildLibsFromSource=true', '--parallel=3']),
    ];
  },
};

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  for (const [name, run] of Object.entries(EXPERIMENTS)) {
    if (selected && !selected.includes(name)) continue;
    currentExperiment = name;
    await run();
  }
  save();
  const summary = renderSummary(results);
  if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary);
  console.log(`\n${summary}`);
}

function renderSummary(results) {
  const lines = ['## Memory experiments', ''];
  for (const [name, rows] of Object.entries(results)) {
    lines.push(`### ${name}`, '', '| Run | Result | Wall time | Peak memory |', '| --- | --- | --- | --- |');
    for (const row of rows) {
      const result = row.ok ? 'ok' : row.outOfMemory ? '**out of memory**' : 'failed';
      lines.push(`| ${row.label} | ${result} | ${(row.durationMs / 1000).toFixed(1)}s | ${formatBytes(row.peakRss)} |`);
    }
    lines.push('');
  }
  return lines.join('\n');
}

function formatBytes(bytes) {
  return `${(bytes / 1024 ** 3).toFixed(2)} GB`;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
