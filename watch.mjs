import { watch } from 'fs'

watch('rspack/src/app/app.tsx', (e, filename) => {
  console.log(Date.now(), filename);
});

watch('webpack/src/app/app.tsx', (e, filename) => {
  console.log(Date.now(), filename);
});

watch('ui/src/lib/component-1.tsx', (e, filename) => {
  console.log(Date.now(), filename);
});
