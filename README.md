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

## Numbers

We're mostly focused on HMR, but I've also included cold start times and build times.

### Local development

- Recorded over 5 runs
- Time in ms
- Tested on Intel i9 MacBook Pro

|         | rspack (cold start) | rspack (root) | rspack (leaf) | webpack (cold start) | webpack (root) | webpack (leaf) |
| ------- | ------------------- | ------------- | ------------- | -------------------- | -------------- | -------------- |
| 1       | 3484                | 697           | 563           | 20512                | 2121           | 990            |
| 2       | 3827                | 706           | 576           | 19297                | 2012           | 1095           |
| 3       | 3822                | 706           | 549           | 20629                | 2168           | 1116           |
| 4       | 3809                | 714           | 539           | 20525                | 1900           | 1061           |
| 5       | 3874                | 717           | 528           | 20401                | 1937           | 1063           |
| Average | 3763.2              | 708.0         | 551.0         | 20272.8              | 2027.6         | 1065.0         |


### Production build

Benchmarks are run using [`hyperfine`](https://github.com/sharkdp/hyperfine) without Nx cache.


```bash
$ hyperfine "npx nx build rspack --skip-nx-cache" "npx nx build webpack --skip-nx-cache"

Benchmark 1: npx nx build rspack --skip-nx-cache
  Time (mean ± σ):      7.320 s ±  0.177 s    [User: 12.714 s, System: 0.957 s]
  Range (min … max):    7.159 s …  7.632 s    10 runs

Benchmark 2: npx nx build webpack --skip-nx-cache
  Time (mean ± σ):     19.114 s ±  0.546 s    [User: 39.448 s, System: 4.221 s]
  Range (min … max):   18.392 s … 20.039 s    10 runs

Summary
  'npx nx build rspack --skip-nx-cache' ran
    2.61 ± 0.10 times faster than 'npx nx build webpack --skip-nx-cache'
```

## Notes

- For root component (large with many child components), rspack is **2.86x faster** than webpack
- For leaf component (small with no child components), rspack is **1.93x faster** than webpack
- For cold starts (time from serve to rendered), rspack is **5.39x faster** than webpack
- For production builds, rspack is **2.61x faster** than webpack
