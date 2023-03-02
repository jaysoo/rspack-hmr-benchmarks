import { watch } from 'fs'

watch('src/app/app.tsx', (e, filename) => {
  console.log(Date.now(), filename)
})

watch('libs/ui-1/src/lib/ui-1.tsx', (e, filename) => {
  console.log(Date.now(), filename)
})
