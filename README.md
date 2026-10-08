# NxAngularIncrementalBuild

This project is mean to illustrate how incremental build affect you angular builds. 

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>
<a alt="Angular logo" href="https://angular.dev/" target="_blank" rel="noreferrer"><img src="./public/angular_gradient.png"  width="45"></a>


## Contents

The project contains multiple application and libraries each used to illustrate something.  

### App0



## Benchmarks

`tools/benchmark.mjs` builds `app0` in two modes and compares them:

- **From source**: `buildLibsFromSource: true`, the app compiles every lib itself.
- **Incremental**: the libs are built with ng-packagr and the app consumes their `dist` output (`buildLibsFromSource: false`).

Each mode is measured cold (empty Nx cache), after changing one file in `lib0`, and as a full Nx cache hit. The script records wall time, peak memory of the whole process tree and per-task timings from the Nx profile.

Run it locally:

```bash
NODE_OPTIONS=--max-old-space-size=8192 node tools/benchmark.mjs --iterations=3
```

Results go to `tmp/benchmark` (`results.json`, `summary.md` and one Nx profile per run, which you can open in `chrome://tracing`).

On CI, trigger the **Benchmark** workflow manually from the Actions tab. The summary table appears on the run page and the raw results are uploaded as the `benchmark-results` artifact.

## References

The repository is inspired by https://github.com/nrwl/nx-incremental-large-repo
