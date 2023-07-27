<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- <div class="placeholder"></div> -->
  <div class="container">
    <!-- 常见问题区域 -->
    <div class="action-wrap">
      <div class="item">
        <span class="text">常见问题</span>
        <img class="right-icon" src="../../assets/images/right_icon.png" alt="" />
      </div>
      <div class="item">
        <span class="text">隐私政策</span>
        <img class="right-icon" src="../../assets/images/right_icon.png" alt="" />
      </div>
      <div class="item">
        <span class="text">注册协议</span>
        <img class="right-icon" src="../../assets/images/right_icon.png" alt="" />
      </div>
    </div>
    <!-- 联系方式 -->
    <div class="contact-way">
      <span class="title">联系我们</span>
      <div class="content">
        <div class="item">
          <img class="icon" src="../../assets/images/phone_icon.png" alt="" />
          <div class="info">
            <span class="way">call anytime</span>
            <span class="val">+81 5055323600</span>
          </div>
        </div>
        <div class="item">
          <img class="icon" src="../../assets/images/email_icon.png" alt="" />
          <div class="info">
            <span class="way">Send Email</span>
            <span class="val">service@miau.co.jp</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 邮箱填写 -->
    <div class="email-input">
      <input v-model="state.email" class="input" type="text" placeholder="请输入您的邮箱" />
      <button class="btn">订阅</button>
    </div>
    <!-- 网站信息 -->
    <p class="web-info">Copyright © 2022 邦禾分类信息网版权所有 鲁ICP备20019313号-1</p>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
interface IState {
  email: string
}
const state = reactive<IState>({
  email: ''
})
</script>
<style lang="scss" scoped>
// .placeholder {
//   width: 375px;
//   height: 308px;
// }
.container {
  // position: fixed;
  // bottom: 0;
  padding: 27px;
  width: 375px;
  height: 308px;
  background-color: #10131f;
  // 常见问题等操作区域样式
  .action-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .item {
      .text {
        width: 55px;
        height: 14px;
        font-size: 14px;
        font-family: OPPOSans;
        font-weight: 400;
        color: #fafafa;
        line-height: 25px;
      }
      .right-icon {
        width: 13px;
        height: 14px;
        vertical-align: middle;
        margin-left: 3px;
      }
    }
  }
  // 联系方式区域样式
  .contact-way {
    margin-top: 46px;
    .title {
      height: 16px;
      font-size: 16px;
      font-family: OPPOSans;
      font-weight: 400;
      color: #ffffff;
      line-height: 25px;
    }
    .content {
      margin-top: 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .item {
        display: flex;
        align-items: center;
        height: 32px;
        .icon {
          vertical-align: middle;

          width: 32px;
          height: 32px;
        }
        .info {
          margin-top: -40px;
          margin-left: 9px;
          display: flex;
          flex-direction: column;
          height: 100%;
          font-size: 12px;
          font-family: OPPOSans;
          font-weight: 500;
          color: #ffffff;
          line-height: 60px;
          span {
            height: 13px;
          }
        }
      }
    }
  }
  // 邮箱填写区域样式
  .email-input {
    display: flex;
    align-items: center;
    height: 30px;
    background: #f9f8f8;
    border-radius: 15px;
    overflow: hidden;
    margin-top: 45px;
    .input {
      flex: 1;
      height: 30px;
      background-color: transparent;
      outline: none;
      border: none;
      padding-left: 13px;
      &::placeholder {
        // height: 13px;
        font-size: 13px;
        font-family: OPPOSans;
        font-weight: 400;
        color: #959595;
        line-height: 36px;
      }
    }
    .btn {
      flex-shrink: 0;
      border: none;
      width: 86px;
      height: 30px;
      background: #5dbf02;
      border-radius: 15px;
      font-size: 14px;
      font-family: OPPOSans;
      font-weight: 500;
      color: #f9f8f8;
    }
  }
  .web-info {
    margin-top: 21px;
    height: 11px;
    text-align: center;
    font-size: 10px;
    font-family: OPPOSans;
    font-weight: 400;
    color: #ffffff;
  }
}
</style>
