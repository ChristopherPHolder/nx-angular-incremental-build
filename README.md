# Nx + Angular incremental build benchmarks

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>
<a alt="Angular logo" href="https://angular.dev/" target="_blank" rel="noreferrer"><img src="./public/angular_gradient.png"  width="45"></a>

This repository is a set of benchmarks for two questions about large Nx + Angular workspaces:

1. **What do incremental builds actually buy you, in build time and in memory?** In an incremental build every lib is built on its own and the apps consume the pre-built output, instead of compiling every lib from source.
2. **What does the new [`@angular/build:library`](https://github.com/angular/angular-cli/tree/v22.3.0-next.1/packages/angular/build/src/builders/library) builder change compared with ng-packagr?** The new builder is based on Rolldown and Oxc and ships with Angular CLI 22.3.

All the code is generated and deliberately boring, so the numbers come from the build tools and not from the apps. Everything was measured locally and on GitHub-hosted runners.

- [At a glance](#at-a-glance)
- [Key findings](#key-findings)
- [The demos](#the-demos)
- [Methodology](#methodology)
- [Results: build time](#results-build-time)
- [Results: memory](#results-memory)
- [What makes the new builder faster](#what-makes-the-new-builder-faster)
- [When is each approach better or worse](#when-is-each-approach-better-or-worse)
- [Running the benchmarks](#running-the-benchmarks)
- [Caveats](#caveats)

## At a glance

| Question | Answer |
| --- | --- |
| Is `@angular/build:library` faster than ng-packagr? | **Yes, about 2× on a full cold build of all demos** (2.0× locally, 1.8–2.2× on CI). About 1.2× on libs with one entry point, about 2.7× on libs split into many entry points with SCSS. |
| What's the biggest difference measured? | A cold build of the SCSS multi-app demo on CI: **18.4–28.3 minutes with ng-packagr vs 6.8–10.5 minutes with `@angular/build:library`**. |
| Do incremental builds save time? | **When a change touches few libs, yes**: in the SCSS multi-app demo, rebuilding after one app lib changes is 1.7–1.9× faster with the new builder than building from source. Cold builds, or changes to a lib everything depends on, are slower than building from source unless the libs come from a remote cache. |
| Do incremental builds save memory? | **Per process, always.** The app built against pre-built libs and the biggest lib both build with a 1.5 GB heap, while the same app built from source fails with 3 GB. In total, the multi-app demos use about half the memory when few libs rebuild. |
| Can building from source fail outright? | **Yes.** `app0` runs out of memory with Node's default heap, and building 6 apps from source 3 at a time **killed a 16 GB GitHub runner twice**. The incremental builds of the same apps succeed. |
| Do Angular's thread settings fix the memory? | **No.** `NG_BUILD_PARALLEL_TS=0` and `NG_BUILD_MAX_WORKERS=1` lower peak memory by at most 5%, and sometimes raise it by up to 11%. |

## Key findings

### Build time

- **The new builder was faster than ng-packagr in every local run and every same-machine comparison, and how much faster depends on how the libs are structured.** The only exceptions are two CI jobs of the plain-CSS demo, within runner noise. Building the same lib on the same machine, so the comparison is free of runner noise, gives the same ratios in three separate measurements:
  - **1.3×** on libs with a single entry point;
  - **1.5×** on libs split into 51 secondary entry points, with plain CSS;
  - **2.6–3.1×** on libs split into 51 secondary entry points, with SCSS.
- **SCSS hurts ng-packagr, and only ng-packagr.**
  - ng-packagr builds entry points one after another and starts its Sass workers again for every one.
  - The new builder compiles every stylesheet of the package concurrently in one Sass process.
  - Switching the multi-app demo from SCSS to plain CSS halves ng-packagr's total lib build time (1,011s → 482s locally), while the new builder barely changes (301s → 284s).
- **A full cold build of every demo is about twice as fast with the new builder**: 636s → 326s locally, 2,056s → 917s and 2,451s → 1,380s in the two CI runs.
- **Incremental builds pay off when a change touches few libs**, and the new builder is what makes them pay off for entry-point-heavy libs:

  | One app lib changed (multi-app SCSS demo) | From source | Incremental (ng-packagr) | Incremental (`@angular/build:library`) |
  | --- | --- | --- | --- |
  | Local | 41.5s | 35.2s | **21.5s** |
  | CI run 1 | 72.3s | 58.2s | **37.7s** |
  | CI run 2 | 105.1s | 87.9s | **60.1s** |

- **Incremental builds lose on cold builds and on changes to a lib that everything depends on.**
  - Building 39 libs before the apps costs more than compiling everything inside the apps.
  - Cold, the SCSS multi-app demo takes 119s from source vs 145s incremental with the new builder and 380s with ng-packagr locally.
  - On CI, the same comparison is 5.5–8.4 minutes from source, 6.8–10.5 minutes with the new builder and 18.4–28.3 minutes with ng-packagr.
  - Cold builds are exactly what a remote cache such as Nx Cloud avoids.

### Memory

- **Incremental builds keep every process small, and sometimes that's the only way the build works at all.**
  - With Node's default heap limit (about 4 GB), `app0` **runs out of memory when built from source**, locally and on CI. Both incremental builds of the same app succeed.
  - Building one app of the multi-app demo from source fails with a 3 GB heap. Every incremental task, whether a lib build or the app build against pre-built libs, works with 1.5 GB.
- **Angular's own settings don't fix this.** Turning off the compiler worker thread or limiting worker threads lowers peak memory by at most 5%, and on CI raised it by up to 11%. The memory is the TypeScript/Angular program for all that source code, not the threads it runs on.
- **Total memory depends on how many heavy tasks Nx runs at once.**
  - Building the 6 apps from source peaks at **14.4–17.3 GB** with 2–3 tasks at once.
  - On a 16 GB GitHub runner, 2 at once just fits (14.4 GB); **3 at once killed the runner in both attempts**.
  - The same apps built incrementally peak at 7.5–8.1 GB on CI with 2 tasks at once, and 11.1 GB with 3 at once.
- **When one lib changes, incremental builds use about half the memory** of building from source in the multi-app demos (about 4 GB vs 8–10 GB), and about 40% less in `app0` (5.3–6.0 GB vs 8.8–10.6 GB).
- **The two library builders use about the same memory**, 1.4–2.1 GB per lib. The new builder peaks slightly higher on libs split into entry points (1.9–2.0 GB vs 1.4–1.8 GB), because it holds the whole package in one program; ng-packagr peaks slightly higher on single-entry-point libs (1.8–2.1 GB vs 1.8–1.9 GB).

## The demos

| Demo | Apps | Libs | Entry points per lib | Components | Styles | Generated by |
| --- | --- | --- | --- | --- | --- | --- |
| `app0` | 1 | 5 + a small `shell` lib | 1 | 1,555 large, type-heavy components | few, SCSS | `tools/generate-components.mjs` |
| `entry-points` | 6 (`app1`–`app6`) | 36 feature libs + 3 shared UI libs | 51 | 17,628 | inline SCSS on every component | `tools/generate-entry-point-libs.mjs` |
| `entry-points-css` | 6 (`css-app1`–`css-app6`) | 36 + 3 | 51 | 17,628 | the same rules as plain CSS | `tools/generate-entry-point-libs.mjs --demo=css --styles=css` |

**`app0`** is the original demo: a few big libs whose components contain large, deeply nested TypeScript types. Almost all of its build time goes into Angular's template compiler and the TypeScript type checker, which both library builders share.

**`entry-points`** is shaped like a large design system plus feature libraries:

- Every app has 6 feature libs, and every app uses the same 3 shared UI libs (`libs/shared/ui0`–`ui2`).
- Every lib is split into 51 secondary entry points (`@nx-angular-incremental-build/app1-lib0/feature-3`, `…/shared-ui0/widget-7`): a `core` entry point plus 50 feature or widget entry points of 8 components each.
- Every component has a realistic template (control flow, pipes, a table), signals-based logic and an inline SCSS stylesheet using `@use`, mixins, maps and loops.
- Every feature entry point renders a widget from one of the shared libs, so a change to a shared lib affects every app.

**`entry-points-css`** is the same code with the stylesheets written as plain CSS, to show the effect of SCSS on its own.

Every lib has two build targets:

- `build`: `@angular/build:library`. Entry points come from the `exports` field of the lib's `package.json`; output goes to `dist/libs/...`.
- `build-ng-packagr`: `@nx/angular:package`, which runs ng-packagr. Entry points come from `ng-package.json` files; output goes to `dist/ng-packagr/libs/...`.

Every app has matching `build` and `build-ng-packagr` targets.

## Methodology

### Modes

Each demo is built in three modes:

| Mode | Command (per demo) | What happens |
| --- | --- | --- |
| **From source** | `nx run-many -t build -p <apps> --excludeTaskDependencies --buildLibsFromSource=true` | every app compiles all the libs it uses from source |
| **Incremental (ng-packagr)** | `nx run-many -t build-ng-packagr -p <apps>` | every lib is built with ng-packagr first (`dependsOn: ["^build-ng-packagr"]`), then the apps are built against `dist/ng-packagr` with `buildLibsFromSource: false` |
| **Incremental (`@angular/build:library`)** | `nx run-many -t build -p <apps> --buildLibsFromSource=false` | every lib is built with the new builder first (`dependsOn: ["^build"]`), then the apps are built against `dist` |

Every app's `build` target defaults to `buildLibsFromSource: false`. Its `dependsOn: ["^build"]` builds the libs first anyway, so a plain `nx build app1` (or `nx run-many -t build` on CI) is an incremental build rather than building every lib twice.

**How incremental builds consume `dist`.** With `buildLibsFromSource: false`, Nx's `@nx/angular:application` executor writes a temporary tsconfig for the app. Its `paths` point every buildable dependency at that dependency's build output instead of its sources, which works for any lib builder.

I verified that the apps really use the built output and not the sources:
1. Build the libs.
2. Change a string inside a lib's *built* `dist` file (not its source).
3. Rebuild only the app.

The changed string ends up in the app bundle, including for secondary entry points. A control build from source contains the original string instead.

**Lib-to-lib dependencies.** Nx does the same redirection for libs that depend on other libs when they are built with `@nx/angular:package`, but not with `@angular/build:library`. So the generated feature libs (and `app0`'s `shell`) point their imports of other libs at `dist` in their production tsconfig (`tsconfig.lib.prod.json`). Without that, every feature lib would type-check the shared libs from source too: `shell` took 37s instead of 1s.

### Scenarios

Each mode is measured in these scenarios, in this order:

1. **Cold**: the Nx cache (`nx reset --onlyCache`), `dist`, `.angular/cache` and ng-packagr's own cache in `node_modules/.cache/ng-packagr` are all deleted first.
2. **One app lib changed**: a line is appended to one component of `app1-lib0` (or `app0-lib0`). Only that lib and the app(s) using it rebuild; everything else comes from the Nx cache.
3. **One shared lib changed** (multi-app demos only): a line is appended to a component of `shared-ui0`, which every feature lib and every app depends on.
4. **Nx cache hit**: nothing changed, everything is replayed from the Nx cache.

### Metrics

- **Wall time** of the whole `nx` command, including Nx's own overhead. With 50–100 projects and 20,000–40,000 files, Nx needs a few seconds to load the project graph, hash the inputs and restore cached outputs: a full cache hit takes 1–11s.
- **Peak memory**: the highest summed RSS of the `nx` process and all its descendants, sampled every 250 ms with `ps`. This includes worker threads (inside their process), esbuild (Go), the Sass compiler (Dart) and Rolldown (Rust).
- **Lib tasks / app tasks**: the summed durations of the build tasks that actually ran (not replayed from the cache), read from the Nx task profile (`NX_PROFILE`). Nx runs several tasks at once, so these add up to more than the wall time; they're closer to CPU time.

### Environments

| | Local | CI |
| --- | --- | --- |
| Machine | Apple Silicon Mac, 16 cores, 64 GB | GitHub-hosted `ubuntu-latest`, 4 vCPU, 16 GB |
| Node | 26.8.1 | 24.21.0 |
| Nx `--parallel` | 3 (Nx's default) | 2. With 3, building the multi-app demos from source doesn't fit in 16 GB (see [memory](#parallel-tasks)) |
| `CI` | unset: ng-packagr keeps its own tsbuildinfo and bundle cache between the cold run and the "changed" runs | `true`: ng-packagr turns its own cache off |
| Iterations | 3 for `app0`, 1 for the multi-app demos | 2 runs of 1 iteration ([run 1](https://github.com/push-based/nx-angular-incremental-build/actions/runs/37803488489), [run 2](https://github.com/push-based/nx-angular-incremental-build/actions/runs/37814528184)) |
| Layout | all modes run one after another on the same machine | one job per demo and mode, each on its own runner, so comparisons between modes include runner-to-runner variance |

Every run uses `NODE_OPTIONS=--max-old-space-size=8192`, except the memory experiments that test heap limits on purpose.

Versions: Nx 23.3.0, Angular 22.1.8, Angular CLI / `@angular/build` 22.3.0-next.1, ng-packagr 22.1.1, TypeScript 6.0.3.

## Results: build time

### Full cold builds: `@angular/build:library` vs ng-packagr

Building every lib and app of a demo from empty caches (wall time, ng-packagr → `@angular/build:library`):

| Demo | Local | CI run 1 | CI run 2 |
| --- | --- | --- | --- |
| `app0` | 48.0s → **38.6s** (1.2×) | 161.5s → **142.6s** (1.1×) | 166.7s → **142.1s** (1.2×) |
| `entry-points` (SCSS) | 380s → **145s** (2.6×) | 1,105s → **409s** (2.7×) | 1,699s → **628s** (2.7×) |
| `entry-points-css` | 208s → **142s** (1.5×) | 789s → **366s** (2.2×) | 585s vs 609s (≈ tie) |
| **All three demos** | **636s → 326s (2.0×)** | **2,056s → 917s (2.2×)** | **2,451s → 1,380s (1.8×)** |

Counting only lib build time, which is what the builder controls: 1.3–1.4× for `app0`, 3.4–3.7× for `entry-points` and 1.1–2.5× for `entry-points-css`.

### Local

**`app0`**: one app, a few big single-entry-point libs (3 iterations)

| Scenario | From source | Incremental (ng-packagr) | Incremental (`@angular/build:library`) |
| --- | --- | --- | --- |
| Cold | 56.9s | 48.0s (libs 69.1s, app 15.0s) | **38.6s** (libs 49.1s, app 16.9s) |
| One app lib changed | 47.7s | 24.3s (lib 12.1s, app 9.3s) | **22.6s** (lib 8.3s, app 10.6s) |
| Nx cache hit | 1.8s | 3.9s | 2.6s |

**`entry-points`**: 6 apps, 39 libs with 51 entry points each, SCSS (1 iteration)

| Scenario | From source | Incremental (ng-packagr) | Incremental (`@angular/build:library`) |
| --- | --- | --- | --- |
| Cold | **118.7s** (apps 349s) | 380.4s (libs 1,011s, apps 113s) | 145.3s (libs 301s, apps 125s) |
| One app lib changed | 41.5s (app 38s) | 35.2s (lib 20s, app 5s) | **21.5s** (lib 7s, app 5s) |
| One shared lib changed | **123.9s** (apps 365s) | 313.7s (libs 848s, apps 53s) | 125.7s (libs 298s, apps 60s) |
| Nx cache hit | 3.6s | 5.4s | 9.1s |

**`entry-points-css`**: the same, with plain CSS (1 iteration)

| Scenario | From source | Incremental (ng-packagr) | Incremental (`@angular/build:library`) |
| --- | --- | --- | --- |
| Cold | **137.6s** (apps 402s) | 207.8s (libs 482s, apps 132s) | 142.1s (libs 284s, apps 123s) |
| One app lib changed | 42.9s (app 39s) | 30.6s (lib 13.5s, app 5.7s) | **25.2s** (lib 7.3s, app 6.6s) |
| One shared lib changed | **118.4s** (apps 348s) | 198.5s (libs 483s, apps 82s) | 121.6s (libs 291s, apps 52s) |
| Nx cache hit | 2.9s | 11.3s | 9.2s |

### CI

GitHub-hosted `ubuntu-latest` (4 vCPU, 16 GB), `CI=true`, `--parallel=2`, one job per demo and mode. Each cell shows **run 1 · run 2**; lib and app task times are from run 1.

**`app0`**

| Scenario | From source | Incremental (ng-packagr) | Incremental (`@angular/build:library`) |
| --- | --- | --- | --- |
| Cold | **104.2s · 137.1s** | 161.5s · 166.7s (libs 161s, app 62s) | 142.6s · 142.1s (libs 128s, app 63s) |
| One app lib changed | 96.4s · 129.1s | 92.1s · 94.7s (lib 27s, app 63s) | **87.1s · 86.9s** (lib 23s, app 63s) |
| Nx cache hit | 1.2s · 1.5s | 1.9s · 2.0s | 1.9s · 1.9s |

**`entry-points`** (SCSS)

| Scenario | From source | Incremental (ng-packagr) | Incremental (`@angular/build:library`) |
| --- | --- | --- | --- |
| Cold | **328.6s · 505.9s** | 1,105.2s · 1,698.9s (libs 1,903s, apps 275s) | 408.6s · 628.4s (libs 523s, apps 281s) |
| One app lib changed | 72.3s · 105.1s | 58.2s · 87.9s (lib 28s, app 27s) | **37.7s · 60.1s** (lib 9s, app 26s) |
| One shared lib changed | **326.9s · 485.7s** | 1,111.1s · 1,596.8s (libs 1,911s, apps 277s) | 388.9s · 610.6s (libs 484s, apps 282s) |
| Nx cache hit | 3.0s · 3.1s | 3.1s · 3.1s | 3.4s · 3.1s |

**`entry-points-css`** (plain CSS)

| Scenario | From source | Incremental (ng-packagr) | Incremental (`@angular/build:library`) |
| --- | --- | --- | --- |
| Cold | **322.6s · 352.4s** | 789.0s · 584.9s (libs 1,105s, apps 446s) | 365.7s · 609.2s (libs 438s, apps 283s) |
| One app lib changed | 68.9s · 69.3s | 64.9s · **53.8s** (lib 21s, app 41s) | **35.7s** · 58.5s (lib 8s, app 25s) |
| One shared lib changed | **356.0s · 356.3s** | 760.2s · 579.0s (libs 1,052s, apps 434s) | 362.0s · 588.8s (libs 435s, apps 274s) |
| Nx cache hit | 3.1s · 3.2s | 3.4s · 5.2s | 3.2s · 3.1s |

How to read the CI numbers:

- **The SCSS demo is consistent across both runs.**
  - Cold builds take **18–28 minutes with ng-packagr vs 7–10.5 minutes with the new builder**; its libs take 3.6–3.7× more task time with ng-packagr.
  - When one app lib changes, the new builder is fastest in both runs, then ng-packagr, then building from source.
- **`app0` is consistent too.** The new builder is 1.1–1.2× faster cold. Incremental builds only beat building from source when one lib changes, because on 4 vCPUs the app build against pre-built libs still takes about 62s.
- **The plain-CSS demo is not consistent across CI runs.**
  - Run 1 shows the new builder clearly ahead (lib tasks 438s vs 1,105s); run 2 shows the two roughly even (747s vs 837s).
  - Every mode runs on a different runner, and the runners in run 2 were slower overall: building the SCSS demo from source took 506s vs 329s.
  - The lib-level comparison on a single machine (see [What makes the new builder faster](#what-makes-the-new-builder-faster)) gives 1.5× for this case in all three measurements. Treat cross-job comparisons with differences below about 1.5× as noise.

### Reading the time results

- **An app build against pre-built libs is much cheaper than an app build from source.**
  - In the multi-app demos the 6 app tasks take 113–132s from `dist` vs 349–402s from source locally.
  - The app only has to link and bundle the libs; it no longer type-checks and compiles them.
- **Whether that wins overall depends on how much lib building it costs.**
  - Cold builds and shared-lib changes rebuild every lib, and the libs together cost more than they save.
  - A change in one app lib rebuilds one lib and one app, and incremental builds win clearly.
- **The library builder decides how big that lib cost is.** In the SCSS demo ng-packagr spends 1,011s of task time on the libs, where the new builder spends 301s. That's the difference between incremental cold builds being 3.2× slower than building from source and only 1.2× slower.
- **Nx itself costs time at this scale.** A full cache hit takes 1–11s, depending on how many task outputs have to be restored (45 tasks incremental vs 6 from source). That overhead is part of every run, which is why the local "one app lib changed" runs take 21–25s although their tasks add up to about 12–14s.

## Results: memory

### Peak memory in the benchmark

| Scenario | From source | Incremental (ng-packagr) | Incremental (`@angular/build:library`) |
| --- | --- | --- | --- |
| `app0` cold, local | 9.61 GB | 8.08 GB | 6.43 GB |
| `app0` one lib changed, local | 8.76 GB | 5.34 GB | 5.49 GB |
| `app0` cold, CI (both runs) | 10.40–10.44 GB | 5.95–6.08 GB | 5.91–5.96 GB |
| `entry-points` cold, local (`--parallel=3`) | 16.41 GB | 12.57 GB | 12.82 GB |
| `entry-points` one app lib changed, local | 7.99 GB | 4.15 GB | 4.08 GB |
| `entry-points` one shared lib changed, local | 17.31 GB | 11.01 GB | 10.84 GB |
| `entry-points` cold, CI (`--parallel=2`, both runs) | 14.36–14.49 GB | 7.49–7.71 GB | 7.76–7.96 GB |
| `entry-points` one app lib changed, CI (both runs) | 8.76–9.02 GB | 4.19–4.32 GB | 4.03–4.30 GB |

### When building from source runs out of memory

`tools/memory-experiments.mjs` measures the limits directly. The CI numbers come from [run 2](https://github.com/push-based/nx-angular-incremental-build/actions/runs/37814528184).

**With Node's default heap limit** (no `--max-old-space-size`; about 4 GB):

| Build | Local | CI |
| --- | --- | --- |
| `app0` from source | **out of memory** (50.0s, 4.92 GB) | **out of memory** (92.9s, 5.10 GB) |
| `app0` incremental, `@angular/build:library` (libs + app) | ok (28.1s, 7.08 GB) | ok (102.4s, 6.83 GB) |
| `app0` incremental, ng-packagr (libs + app) | ok (39.8s, 8.32 GB) | ok (112.5s, 7.16 GB) |

The error is `ERR_WORKER_OUT_OF_MEMORY: Worker terminated due to reaching memory limit: JS heap out of memory`, from the Angular compiler's worker thread.

The incremental builds use *more* memory in total here, because Nx builds three libs at once, and yet they succeed. What fails is a single process: building from source puts the whole app into one compiler, which has to fit in one heap. Every incremental process holds one lib, or the app's own code, and stays well below the limit.

**With smaller heap limits**, building `app1` of the multi-app demo (9 libs, about 4,000 components):

| `--max-old-space-size` | `app1` from source | `app1` against pre-built libs | Biggest lib, `@angular/build:library` | Biggest lib, ng-packagr |
| --- | --- | --- | --- | --- |
| 4096 MB, local | ok (36.2s, 7.59 GB) | ok (8.8s, 5.00 GB) | ok (7.6s, 2.02 GB) | ok (16.3s, 1.87 GB) |
| 4096 MB, CI | ok (104.6s, 8.14 GB) | ok (42.2s, 4.02 GB) | ok (14.8s, 2.00 GB) | ok (45.1s, 1.73 GB) |
| 3072 MB, local | **out of memory** | ok (6.1s, 4.19 GB) | ok (6.0s, 2.03 GB) | ok (14.8s, 1.82 GB) |
| 3072 MB, CI | **out of memory** | ok (41.5s, 4.22 GB) | ok (15.0s, 2.02 GB) | ok (46.3s, 1.77 GB) |
| 2048 MB, local | **out of memory** | ok (5.3s, 4.05 GB) | ok (6.1s, 2.01 GB) | ok (14.5s, 1.84 GB) |
| 1536 MB, local | **out of memory** | ok (4.8s, 4.12 GB) | ok (5.9s, 1.88 GB) | ok (14.3s, 1.41 GB) |
| 1536 MB, CI | **out of memory** | ok (42.1s, 4.04 GB) | ok (15.7s, 1.88 GB) | ok (49.5s, 1.37 GB) |

Building an app from source puts every lib it uses into one TypeScript/Angular program in one process, so the heap it needs grows with the whole app. Incremental builds split that program into one per lib plus a small one for the app, and each of those stays small however large the workspace gets. That's why incremental builds can be **necessary**, not just faster: past a certain size, building from source needs a bigger heap than the machine, or Node's default limit, allows.

The memory figures are peak RSS, which is higher than the heap limit: RSS also counts memory outside the JavaScript heap, such as esbuild, the Sass compiler, Rolldown and Node's own overhead.

### Do Angular's thread settings help?

The Angular CLI has two environment variables that control its threads:

- `NG_BUILD_PARALLEL_TS=0` runs the TypeScript/Angular compiler on the main thread instead of in a worker thread.
- `NG_BUILD_MAX_WORKERS` limits the worker pool used for JavaScript transforms.

Building `app1` from source:

| Settings | Local | CI |
| --- | --- | --- |
| Default | 39.5s, 8.86 GB | 114.4s, 8.20 GB |
| `NG_BUILD_PARALLEL_TS=0` | 38.7s, 9.55 GB | 120.9s, 9.06 GB |
| `NG_BUILD_MAX_WORKERS=1` | 38.2s, 8.47 GB | 109.5s, 8.42 GB |
| `NG_BUILD_PARALLEL_TS=0 NG_BUILD_MAX_WORKERS=1` | 41.7s, 8.43 GB | 117.2s, 9.11 GB |

Neither setting brings memory down meaningfully: it moves by at most 5% down and up to 11% up, and running the compiler on the main thread raised it in both environments. The memory is the compiler's program for all the source code, and that program is the same size whichever thread it runs on. These settings don't avoid the out-of-memory failures above; only making each program smaller does.

### Parallel tasks

Nx runs several tasks at once (3 by default), and their memory adds up. Building all 6 apps of the `entry-points` demo:

| Build | Local (64 GB) | CI (16 GB) |
| --- | --- | --- |
| From source, `--parallel=1` | 251.5s, 9.69 GB | not run (too slow for the 30-minute CI limit) |
| From source, `--parallel=2` | 122.4s, 14.90 GB | 530.2s, 14.44 GB |
| From source, `--parallel=3` | 127.0s, 14.80 GB | **runner killed, twice** |
| Incremental (`@angular/build:library`), `--parallel=3` | 142.7s, 12.79 GB | 635.1s, 11.11 GB |

Building from source with 3 tasks at once never finished on a 16 GB GitHub runner:
- **Run 1:** the job lost its runner after 67 minutes: "The hosted runner lost communication with the server. Anything in your workflow that terminates the runner process, starves it for CPU/Memory, or blocks its network access can cause this error."
- **Run 2:** the experiment was its own job; after 20 minutes it ended with exit code 143 and "The runner has received a shutdown signal".

In run 2, where every memory experiment had its own job, all the others completed. This is the practical side of the out-of-memory problem: building many apps from source in parallel doesn't fit on a standard GitHub-hosted runner, while building the same apps incrementally does, even with 3 tasks at once.

Lowering `--parallel` caps total memory at the cost of time: half the parallelism means roughly twice the wall time. Incremental builds lower the peak of every task, but a cold incremental build still runs several heavy tasks at once (lib builds of about 2 GB and app builds of 4–5 GB RSS each), so its total peak is only somewhat lower. The big savings come when few tasks rerun: when one lib changes, incremental builds peak at about half of what building from source needs.

## What makes the new builder faster

`tools/builder-factors.mjs` builds the same shared lib with both builders, varying one thing at a time. The lib has 50 folders of 8 components, plus `core`.

- **Layout**: 51 secondary entry points, or a single primary entry point that re-exports the same folders.
- **Styles**: SCSS, or the same rules written as plain CSS.

Both builders run on the same machine, cold, with `CI=true`; each figure is the median of 3 runs, including about 1.5s of Nx startup. Each cell is `@angular/build:library` vs ng-packagr.

| Layout | Styles | Local | CI run 1 | CI run 2 | Ratio |
| --- | --- | --- | --- | --- | --- |
| 51 entry points | SCSS | 6.0s vs 15.9s | 12.0s vs 36.7s | 15.6s vs 47.8s | **2.6× · 3.1× · 3.1×** |
| 51 entry points | CSS | 6.4s vs 9.7s | 12.2s vs 18.5s | 15.5s vs 22.6s | 1.5× · 1.5× · 1.5× |
| Single entry point | SCSS | 5.8s vs 7.6s | 12.3s vs 16.4s | 15.3s vs 20.0s | 1.3× · 1.3× · 1.3× |
| Single entry point | CSS | 5.8s vs 7.3s | 11.4s vs 14.6s | 14.8s vs 18.6s | 1.3× · 1.3× · 1.3× |

Peak memory per lib is 1.8–2.0 GB for the new builder and 1.4–2.1 GB for ng-packagr.

What this shows:

- **The new builder's time doesn't depend on either factor.** Splitting into entry points and using SCSS cost it nothing measurable.
- **ng-packagr pays for every entry point.** Splitting the lib makes ng-packagr 1.2–1.3× slower than on the single-entry-point lib, even with plain CSS, which puts it 1.5× behind the new builder.
- **ng-packagr pays for SCSS only when there are many entry points.** With one entry point SCSS adds 0.3–1.8s; with 51 it adds 6–25s.

The reason is in how the two builders are organised (source links point to the exact versions used here):

- **ng-packagr builds one entry point at a time**, walking them in dependency order with a `concatMap` ([`package.transform.ts`](https://github.com/ng-packagr/ng-packagr/blob/22.1.1/src/lib/ng-package/package.transform.ts)). For every entry point it:
  - creates a new TypeScript/Angular program and type-checks it;
  - runs Rollup twice, for the JavaScript bundle and for the typings;
  - creates a stylesheet processor and destroys it afterwards ([`compile-ngc.transform.ts`](https://github.com/ng-packagr/ng-packagr/blob/22.1.1/src/lib/ng-package/entry-point/compile-ngc.transform.ts)), so its Sass worker pool starts again for every entry point.
- **`@angular/build:library` builds the whole package at once.**
  - All entry points go into **one** Angular compilation, which runs in a worker thread ([`compilation.ts`](https://github.com/angular/angular-cli/blob/v22.3.0-next.1/packages/angular/build/src/builders/library/pipeline/compilation.ts)).
  - All component stylesheets are compiled concurrently through one long-running Sass process.
  - All entry points are bundled in two parallel Rolldown passes, one for JavaScript and one for typings ([`bundler.ts`](https://github.com/angular/angular-cli/blob/v22.3.0-next.1/packages/angular/build/src/builders/library/pipeline/bundler.ts)).

With a single entry point both builders do roughly the same work: one program, one bundle, one Sass setup. The remaining 1.3× comes from Rolldown vs Rollup and from overlapping type-checking with bundling. Everything beyond that comes from ng-packagr repeating its per-entry-point setup, and SCSS makes that setup expensive.

## When is each approach better or worse

**Incremental builds are better when:**
- Changes usually touch a few leaf libs, as in feature work in a big monorepo. Only the changed lib and the apps using it rebuild, and the app build against `dist` is several times cheaper than compiling everything.
- Memory is limited. Each process holds one lib or one app's own code, so builds that run out of memory from source keep working (see [When building from source runs out of memory](#when-building-from-source-runs-out-of-memory)).
- Lib builds are cached and shared, for example with Nx Cloud remote caching, so a "cold" CI run mostly replays libs that other runs already built.

**Incremental builds are worse when:**
- Builds are cold and nothing is cached: building every lib costs more than compiling them inside the apps, much more so with ng-packagr.
- A change touches a lib that everything depends on. That's effectively a cold build, so prefer narrow shared libs.
- There are many small projects. Nx needs time to load and hash them, and replaying many cached outputs is slower than replaying a few.

**`@angular/build:library` is much better than ng-packagr when:**
- Libs are split into many secondary entry points.
- Components use SCSS (or another preprocessor) and the lib has many entry points.
- Builds run with `CI=true`, or otherwise without ng-packagr's own cache.

**It makes less difference when:**
- Libs have a single entry point and their build time goes into Angular's template compiler and type-checking, as in `app0`. The new builder is still 1.1–1.3× faster there.

## Running the benchmarks

```bash
npm ci --legacy-peer-deps

# Regenerate the multi-app demos (the generated code is committed)
node tools/generate-entry-point-libs.mjs
node tools/generate-entry-point-libs.mjs --demo=css --styles=css

# Build-time and memory benchmark: every demo, mode and scenario
NODE_OPTIONS=--max-old-space-size=8192 node tools/benchmark.mjs --iterations=3

# A subset, with a different parallelism
NODE_OPTIONS=--max-old-space-size=8192 node tools/benchmark.mjs --demos=entry-points --modes=library,ng-packagr --parallel=2 --iterations=1

# Memory limits, Angular's thread settings and parallelism
node tools/memory-experiments.mjs --experiments=default-heap,threads,heap,parallel

# What makes the builders differ (layout × styles)
node tools/builder-factors.mjs
```

- `tools/benchmark.mjs` writes `tmp/benchmark/results.json`, `tmp/benchmark/summary.md` and one Nx profile per run under `tmp/benchmark/profiles` (open them in `chrome://tracing`). `node tools/benchmark.mjs --report=<dir>` merges every `results.json` below a directory into one summary.
- `tools/memory-experiments.mjs` saves its results after every build to `tmp/memory`. Its `parallel-limit` experiment builds the 6 apps from source with 3 tasks at once and needs more than 16 GB.
- The generator's other options are `--apps`, `--libsPerApp`, `--sharedLibs`, `--entryPoints`, `--components`, `--styles=scss|css`, `--layout=entry-points|single` and `--demo=<name>`.

**On CI**, run the **Benchmark** workflow manually from the Actions tab. It runs:
- one job per demo and mode, in parallel;
- a report job that merges those into one summary;
- optionally, every memory experiment and the builder-factor experiment as their own jobs, each with a 30-minute limit.

Leave `demos` empty to run only the experiments. Every job uploads its results as an artifact.

## Caveats

- **`@angular/build:library` is a prerelease** (Angular CLI `22.3.0-next.1`). The Nx 23.3 packages declare support for `@angular/build < 23` in a way that excludes prereleases, so dependencies are installed with `npm ci --legacy-peer-deps`.
- **Lib-to-lib `dist` paths have to be set by hand** for `@angular/build:library`; see [Methodology](#methodology).
- **The new builder has no persistent cache.** Every run outside watch mode is fully cold. ng-packagr keeps a tsbuildinfo and bundle cache in `node_modules/.cache/ng-packagr` (unless `CI=true`), which helps its local "one lib changed" runs; the local benchmark's cold runs clear it.
- **ng-packagr warns about the `exports` field** that the new builder needs in each lib's `package.json` ("Found an existing subpath export… will be overridden"). The warning is harmless.
- **Unit tests were removed.** `@angular/build` 22.2+ no longer exposes the internal `SourceFileCache` as a `Map`, which breaks the Analog Vitest plugin, so the apps no longer have a `test` target.
- **The numbers are noisy at the edges.** The multi-app demos ran once per mode per environment, and on CI every mode ran on a different runner. Differences below about 1.5× between CI jobs, such as the plain-CSS demo, are within that noise. The conclusions above rest on larger differences that held locally, in both CI runs and in the same-machine factor experiment.

## References

The repository is inspired by https://github.com/nrwl/nx-incremental-large-repo
