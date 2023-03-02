import { watch } from 'fs'

watch('rspack/src/app/app.tsx', (e, filename) => {
  console.log(Date.now(), filename);
});

watch('webpack/src/app/app.tsx', (e, filename) => {
  console.log(Date.now(), filename);
});

watch('libs/ui-1/src/lib/ui-1.tsx', (e, filename) => {
  console.log(Date.now(), filename);
});
