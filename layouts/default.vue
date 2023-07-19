<template>
  <main>
    <slot />
    <!-- <Footer /> -->
    <div class="footer">Footer</div>
  </main>
  <!-- <div>
    header
  </div> -->
</template>
<script setup lang="ts"></script>
<style scope>
.footer {
  position: fixed;
  bottom: 0;
}
</style>
