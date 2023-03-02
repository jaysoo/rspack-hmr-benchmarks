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


## Notes

- For root component (large with many child components), rspack is **2.86x faster**
- For leaf component (small with no child components), rspack is **1.93x faster**
- For cold starts (time from serve to rendered), rspack is **5.39x faster**
