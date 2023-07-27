<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="time-up-list">
    <div v-for="(item, index) in 4" :key="index" class="time-up-item">
      <van-image
        width="128"
        height="136"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      />
      <h3 class="goods-name text-ellipsis-2">SK-II神仙水230mlII神仙水230ml 精华液sk2...</h3>
      <span class="goods-price">AUD 124.5</span>
    </div>
  </div>
  <div class="tip">
    <img class="tip-icon" src="../../assets/images/left_tip_icon.png" alt="" />
    <span>左滑查看更多</span>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.time-up-list {
  overflow: hidden;
  display: flex;
  align-items: center;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }

  .time-up-item {
    margin-right: 6px;
    width: 128px;
    height: 208px;
    background: #ffffff;
    border: 1px solid #f1f1f1;
    .goods-name {
      padding: 0;
      margin: 0;
      padding-left: 6px;
      width: 104px;
      font-size: 12px;
      font-family: OPPOSans;
      font-weight: 400;
      color: #333333;
      line-height: 18px;
    }
    .goods-price {
      padding-left: 6px;
      font-size: 13px;
      font-family: OPPOSans;
      font-weight: 500;
      color: #333333;
      line-height: 35px;
    }
  }
}

.tip {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 19px 0;

  .tip-icon {
    width: 88px;
    height: 9px;
    vertical-align: middle;
  }
  span {
    margin-left: 9px;
    font-size: 9px;
    font-family: OPPOSans;
    font-weight: 400;
    color: #afaeae;
  }
}
</style>
