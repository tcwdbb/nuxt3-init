<template>
  <NuxtLayout>
    <!-- <NuxtLoadingIndicator /> -->
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
// import { showSuccessToast, showFailToast, showToast } from 'vant'

// console.log(process.env)
// console.log(import.meta.env)
// const error = useError()
// watch(error, (newVal) => {
//   console.log(newVal)
// })
// showToast('123')

await useHttp
  .get('/user', { method: 'get' })
  .then((res) => {})
  .catch((err) => {})
</script>

<style lang="scss">
body {
  background-color: $bgColor;
  .add {
    color: red;
  }
}
</style>
