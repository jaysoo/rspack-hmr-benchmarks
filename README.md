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
| 1       | 3638                | 1055          | 934           | 19129                | 5191           | 4390           |
| 2       | 3598                | 1150          | 907           | 18580                | 5181           | 4322           |
| 3       | 3603                | 1218          | 930           | 18790                | 5102           | 4372           |
| 4       | 3568                | 1211          | 964           | 18872                | 5240           | 4561           |
| 5       | 3642                | 1324          | 959           | 19995                | 5260           | 4624           |
| Average | 3609.8              | 1191.6        | 938.8         | 19073.2              | 5194.8         | 4453.8         |


### Production build

Benchmarks are run using [`hyperfine`](https://github.com/sharkdp/hyperfine) without Nx cache.


```bash
$ hyperfine "npx nx build rspack --skip-nx-cache" "npx nx build webpack --skip-nx-cache"

Benchmark 1: npx nx build rspack --skip-nx-cache
  Time (mean ± σ):     14.929 s ±  0.542 s    [User: 21.187 s, System: 1.783 s]
  Range (min … max):   14.280 s … 15.756 s    10 runs

Benchmark 2: npx nx build webpack --skip-nx-cache
  Time (mean ± σ):     56.533 s ±  6.497 s    [User: 63.501 s, System: 4.681 s]
  Range (min … max):   47.061 s … 68.796 s    10 runs

Summary
  'npx nx build rspack --skip-nx-cache' ran
    3.79 ± 0.46 times faster than 'npx nx build webpack --skip-nx-cache'
```

## Notes

- For root component (large with many child components), rspack is **4.36x faster** than webpack
- For leaf component (small with no child components), rspack is **4.74x faster** than webpack
- For dev-server starts (time from serve to rendered), rspack is **5.28x faster** than webpack
- For production builds, rspack is **3.79x faster** than webpack
