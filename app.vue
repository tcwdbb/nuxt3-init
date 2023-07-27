<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
// await useHttp
//   .get('/user', { method: 'get' })
//   .then((res) => {})
//   .catch((err) => {})
</script>

<style lang="scss">
body {
  background-color: $bgColor;
  .add {
    color: red;
  }
}
div {
  box-sizing: border-box;
}
p {
  padding: 0;
  margin: 0;
}
</style>
