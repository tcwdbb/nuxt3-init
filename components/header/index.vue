<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <van-image
      class="logo"
      width="49"
      height="49"
      src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    />
    <div class="right-icon">
      <van-icon class="search" size="23" name="../../assets/images/search_icon.png" />
      <van-icon
        class="cart"
        :badge-props="{ color: '#8BD822' }"
        :badge="12"
        size="24"
        name="../../assets/images/cart_icon.png"
      />
      <van-icon class="expansion" size="20" name="../../assets/images/expansion_icon.png" />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 375px;
  height: 49px;
  background: #10131f;
  .logo {
    margin-left: 11px;
  }
  .right-icon {
    margin-right: 10px;
    .cart {
      margin-right: 30px;
    }
    .search {
      margin-right: 20px;
    }
    .expansion {
      position: relative;
      top: -2px;
    }
  }
}
</style>
