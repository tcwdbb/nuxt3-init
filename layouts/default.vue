<template>
  <main>
    <Header />
    <slot />
    <Footer />
  </main>
</template>
<script setup lang="ts"></script>
<style scope>
.footer {
  position: fixed;
  bottom: 0;
}
</style>
