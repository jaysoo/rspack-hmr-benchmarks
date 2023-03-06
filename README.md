# Rspack vs Webpack benchmarks

Start rspack:

```bash
npx nx serve rspack
```

Start webpack:

```bash
npx nx serve webpack
```

Run watch (to get timestamps when files are changed):

```bash
node watch.mjs
```

Make a change to either `app.tsx` (root) or `libs/ui-1/src/lib/ui-1.tsx` (leaf) and obverse HMR timestamp compared to the one from watch process. Take that time and the one in UI and that's the total HMR time in milliseconds.

For measuring dev-server starts, run the `measure-dev-server-startup.mjs` file.

```bash
node measure-dev-server-startup.mjs rspack
node measure-dev-server-startup.mjs webpack
```

The resulting time is the difference between calling `serve` and when the UI loads in puppeteer.


## Numbers

We're mostly focused on HMR, but I've also included cold start times and build times.

### Local development

- Recorded over 5 runs
- Time in ms
- Tested on Intel i9 MacBook Pro

|         | rspack (dev start)  | rspack (root) | rspack (leaf) | webpack (dev start)  | webpack (root) | webpack (leaf) |
| ------- | ------------------- | ------------- | ------------- | -------------------- | -------------- | -------------- |
| 1       | 2353                | 572           | 531           | 6957                 | 1906           | 752            |
| 2       | 2115                | 571           | 555           | 6810                 | 1821           | 785            |
| 3       | 2131                | 590           | 531           | 6867                 | 1790           | 844            |
| 4       | 2259                | 595           | 523           | 6816                 | 1753           | 998            |
| 5       | 2179                | 585           | 528           | 6764                 | 1937           | 924            |
| Average | 2207.4              | 582.6         | 533.6         | 6842.8               | 1841.4         | 860.6          |


### Production build

Benchmarks are run using [`hyperfine`](https://github.com/sharkdp/hyperfine) without Nx cache.


```bash
$ hyperfine "npx nx build rspack --skip-nx-cache" "npx nx build webpack --skip-nx-cache"

Benchmark 1: npx nx build rspack --skip-nx-cache
  Time (mean ± σ):     10.409 s ±  0.137 s    [User: 15.966 s, System: 1.271 s]
  Range (min … max):   10.277 s … 10.777 s    10 runs

  Warning: The first benchmarking run for this command was significantly slower than the rest (10.777 s). This could be caused by (filesystem) caches that were not filled until after the first run. You should consider using the '--warmup' option to fill those caches before the actual benchmark. Alternatively, use the '--prepare' option to clear the caches before each timing run.

Benchmark 2: npx nx build webpack --skip-nx-cache
  Time (mean ± σ):     21.766 s ±  0.295 s    [User: 46.803 s, System: 2.966 s]
  Range (min … max):   21.440 s … 22.338 s    10 runs

Summary
  'npx nx build rspack --skip-nx-cache' ran
    2.09 ± 0.04 times faster than 'npx nx build webpack --skip-nx-cache'
```

## Notes

- For root component (large with many child components), rspack is **3.16x faster** than webpack
- For leaf component (small with no child components), rspack is **1.61x faster** than webpack
- For dev-server starts (time from serve to rendered), rspack is **3.10x faster** than webpack
- For production builds, rspack is **1.77x faster** than webpack
