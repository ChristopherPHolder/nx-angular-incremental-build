#!/usr/bin/env node

/**
 * Isolates what makes @angular/build:library faster than ng-packagr. It generates the same shared UI
 * lib four times with tools/generate-entry-point-libs.mjs, varying one factor at a time:
 *
 *   - layout: 51 secondary entry points, or a single entry point re-exporting the same folders
 *   - styles: SCSS component stylesheets, or the same rules as plain CSS
 *
 * and builds each variant cold with both builders (alternating, `CI=true` so ng-packagr's own cache is
 * off). The generated variants are deleted and tsconfig.base.json is restored afterwards.
 *
 * Results go to tmp/factors/results.json and tmp/factors/summary.md.
 *
 * Usage: node tools/builder-factors.mjs [--runs=3] [--entryPoints=50] [--components=8]
 */

import { spawn, execFileSync } from 'node:child_process';
import { appendFileSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const OUT_DIR = join(ROOT, 'tmp/factors');
const MEMORY_POLL_MS = 250;
const arg = (name, fallback) => Number(process.argv.find((a) => a.startsWith(`--${name}=`))?.split('=')[1] ?? fallback);
const RUNS = arg('runs', 3);
const ENTRY_POINTS = arg('entryPoints', 50);
const COMPONENTS = arg('components', 8);

const VARIANTS = [
  { demo: 'factor-ep-scss', layout: 'entry-points', styles: 'scss' },
  { demo: 'factor-ep-css', layout: 'entry-points', styles: 'css' },
  { demo: 'factor-single-scss', layout: 'single', styles: 'scss' },
  { demo: 'factor-single-css', layout: 'single', styles: 'css' },
];
const BUILDERS = { library: 'build', 'ng-packagr': 'build-ng-packagr' };
const ENV = { NX_DAEMON: 'false', NX_NO_CLOUD: 'true', NX_TUI: 'false', CI: 'true' };

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

function build(project, target) {
  for (const dir of ['dist', '.angular/cache', 'node_modules/.cache/ng-packagr']) {
    rmSync(join(ROOT, dir), { recursive: true, force: true });
  }
  return new Promise((resolve, reject) => {
    const start = performance.now();
    const child = spawn('npx', ['nx', 'run', `${project}:${target}`, '--skip-nx-cache', '--output-style=static'], {
      cwd: ROOT,
      env: { ...process.env, ...ENV },
      stdio: ['ignore', 'ignore', 'inherit'],
    });
    let peakRss = 0;
    const poll = setInterval(() => {
      peakRss = Math.max(peakRss, processTreeRss(child.pid));
    }, MEMORY_POLL_MS);
    child.on('error', reject);
    child.on('exit', (code) => {
      clearInterval(poll);
      if (code !== 0) return reject(new Error(`${project}:${target} exited with code ${code}`));
      resolve({ durationMs: performance.now() - start, peakRss });
    });
  });
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  const tsconfigBase = readFileSync(join(ROOT, 'tsconfig.base.json'), 'utf8');
  const results = [];
  try {
    for (const variant of VARIANTS) {
      execFileSync(
        'node',
        [
          'tools/generate-entry-point-libs.mjs',
          `--demo=${variant.demo}`,
          '--apps=0',
          '--sharedLibs=1',
          `--entryPoints=${ENTRY_POINTS}`,
          `--components=${COMPONENTS}`,
          `--layout=${variant.layout}`,
          `--styles=${variant.styles}`,
        ],
        { cwd: ROOT, stdio: 'inherit' }
      );
      execFileSync('npx', ['nx', 'reset'], { cwd: ROOT, stdio: 'ignore', env: { ...process.env, ...ENV } });
      const project = `${variant.demo}-shared-ui0`;
      for (let run = 1; run <= RUNS; run++) {
        for (const [builder, target] of Object.entries(BUILDERS)) {
          const result = await build(project, target);
          console.log(`${variant.demo} · ${builder} #${run}: ${(result.durationMs / 1000).toFixed(1)}s, peak ${formatBytes(result.peakRss)}`);
          results.push({ ...variant, builder, run, ...result });
        }
      }
      rmSync(join(ROOT, `libs/${variant.demo}-shared`), { recursive: true, force: true });
    }
  } finally {
    for (const { demo } of VARIANTS) rmSync(join(ROOT, `libs/${demo}-shared`), { recursive: true, force: true });
    writeFileSync(join(ROOT, 'tsconfig.base.json'), tsconfigBase);
  }

  writeFileSync(
    join(OUT_DIR, 'results.json'),
    JSON.stringify({ date: new Date().toISOString(), node: process.version, entryPoints: ENTRY_POINTS, components: COMPONENTS, results }, null, 2)
  );
  const summary = renderSummary(results);
  writeFileSync(join(OUT_DIR, 'summary.md'), summary);
  if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary);
  console.log(`\n${summary}`);
}

function renderSummary(results) {
  const median = (values) => [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)];
  const lines = [
    '## Builder factors',
    '',
    `One shared UI lib (${ENTRY_POINTS} folders × ${COMPONENTS} components), built cold with \`CI=true\`, median of ${RUNS} runs. Times include Nx startup (about 1.5s).`,
    '',
    '| Layout | Styles | @angular/build:library | ng-packagr | ng-packagr / library | Peak memory (library / ng-packagr) |',
    '| --- | --- | --- | --- | --- | --- |',
  ];
  for (const variant of VARIANTS) {
    const of = (builder) => results.filter((r) => r.demo === variant.demo && r.builder === builder);
    const time = (builder) => median(of(builder).map((r) => r.durationMs / 1000));
    const memory = (builder) => median(of(builder).map((r) => r.peakRss));
    lines.push(
      `| ${variant.layout === 'single' ? 'Single entry point' : `${ENTRY_POINTS + 1} entry points`} | ${variant.styles.toUpperCase()} | ${time('library').toFixed(1)}s | ${time('ng-packagr').toFixed(1)}s | ${(time('ng-packagr') / time('library')).toFixed(1)}× | ${formatBytes(memory('library'))} / ${formatBytes(memory('ng-packagr'))} |`
    );
  }
  lines.push('');
  return lines.join('\n');
}

function formatBytes(bytes) {
  return `${(bytes / 1024 ** 3).toFixed(2)} GB`;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
