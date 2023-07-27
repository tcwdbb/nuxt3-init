<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="banner-title">
    <p class="text">{{ props.title }}</p>
    <p class="sub-text">{{ props.subTitle }}</p>
  </div>
</template>
<script setup lang="ts">
interface Props {
  title: string
  subTitle?: string
}
const props = withDefaults(defineProps<Props>(), {
  title: '',
  subTitle: ''
})
</script>
<style lang="scss" scoped>
.banner-title {
  width: 100%;
  display: flex;
  align-items: flex-end;
  .text {
    font-size: 15px;
    font-family: OPPOSans;
    font-weight: 500;
    color: #333333;
  }
  .sub-text {
    position: relative;
    top: -1px;
    margin-left: 7px;
    font-size: 12px;
    font-family: OPPOSans;
    font-weight: 400;
    color: #333333;
  }
}
</style>
