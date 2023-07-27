<template>
  <div class="container">
    <!-- 顶部轮播图区域 -->
    <div class="swiper-wrap">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <van-image
            width="375"
            height="456"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
        </van-swipe-item>
        <van-swipe-item>
          <van-image
            width="375"
            height="456"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
        </van-swipe-item>
        <van-swipe-item>
          <van-image
            width="375"
            height="456"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 内容区域 -->
    <div class="content">
      <!-- 图片导航区域 -->
      <div class="img-wrap-three">
        <van-image
          width="114"
          height="161"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <van-image
          width="114"
          height="161"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <van-image
          width="114"
          height="161"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
      </div>

      <!-- 限时秒杀 -->
      <div class="time-up">
        <!-- 限时秒杀标题 -->
        <div class="title-wrap">
          <span class="title-name">限时秒杀</span>
          <div class="time-box">
            <div class="time-text">
              <van-icon class="clock-icon" size="12" name="../assets/images/clock_icon.png" />
              <span class="date">1月4日场</span>
            </div>
            <!-- 倒计时 -->
            <van-count-down :time="state.time">
              <template #default="timeData">
                <div class="count-down-wrap">
                  <span class="block">{{ timeData.hours }}</span>
                  <span class="colon">:</span>
                  <span class="block">{{ timeData.minutes }}</span>
                  <span class="colon">:</span>
                  <span class="block">{{ timeData.seconds }}</span>
                </div>
              </template>
            </van-count-down>
          </div>
        </div>

        <!-- 限时秒杀商品 -->
        <div class="goods-list">
          <scroll-view-list />
        </div>
      </div>

      <!-- 图片导航2 -->
      <div class="img-nav-list">
        <div class="img-nav-item">
          <van-image
            width="114"
            height="68"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
        </div>
        <div class="img-nav-item">
          <van-image
            width="114"
            height="68"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
        </div>
        <div class="img-nav-item">
          <van-image
            width="114"
            height="68"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
        </div>
        <div class="img-nav-item">
          <van-image
            width="114"
            height="68"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
        </div>
        <div class="img-nav-item">
          <van-image
            width="114"
            height="68"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
        </div>
        <div class="img-nav-item">
          <van-image
            width="114"
            height="68"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
        </div>
      </div>

      <!-- 图片广告 -->
      <div class="banner-wrap">
        <!-- 标题 -->
        <custom-title title="护肤美妆" sub-title="为你寻觅日本好物" />
        <!-- 广告图 -->
        <banner-img />
        <!-- 商品列表 -->
        <div class="goods-list">
          <scroll-view-list />
        </div>
      </div>

      <!-- 标题 -->
      <custom-title title="人气美瞳" sub-title="为你寻觅日本好物" />
      <!-- 广告图 -->
      <banner-img />
      <!-- 商品列表 -->
      <div class="goods-list">
        <scroll-view-list />
      </div>
      <!-- 分类弹窗 -->
      <van-popup v-model:show="state.showCategory" position="left">
        <div class="popup-content">
          <div class="header">
            <div class="login-btn">
              <img class="avatar" src="../assets/images/default_avatar.png" alt="" />
              <span>登录/注册</span>
            </div>
            <img class="right-icon" src="../assets/images/right_icon1.png" alt="" />
          </div>
          <div class="cat-list">
            <template v-for="item in state.catList" :key="item">
              <div class="cat-item">
                <span>{{ item.name }}</span>
                <img class="right-icon" src="../assets/images/right_icon1.png" alt="" />
              </div>
            </template>
          </div>
        </div>
      </van-popup>
    </div>

    <!-- <div class="title">
      {{ $t('login.title') }}
    </div>
    <van-button type="primary" @click="increment"> 主要按钮 {{ state.count }}</van-button> -->
  </div>
</template>
<script setup lang="ts">
// import { useExample } from '../store/use-expmale'
// const { increment, state } = useExample()
// const { $gsap } = useNuxtApp()
// onMounted(() => {
//   $gsap.to('.title', { x: 200 })
// })
const state = reactive({
  time: 30 * 60 * 60 * 1000,
  showCategory: true,
  catList: [
    {
      name: '美妆',
      id: ''
    },
    {
      name: '美瞳',
      id: ''
    },
    {
      name: '个护',
      id: ''
    },
    {
      name: '母婴',
      id: ''
    },
    {
      name: '健康',
      id: ''
    },
    {
      name: '生活',
      id: ''
    },
    {
      name: '零食',
      id: ''
    },
    {
      name: '品牌馆',
      id: ''
    }
  ]
})
</script>
<style lang="scss" scoped>
.title {
  width: 1px;
  height: 100px;
}

.container {
  .content {
    padding: 14px 10px;
    .img-wrap-three {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .time-up {
      margin-top: 30px;
      .title-wrap {
        display: flex;
        align-items: flex-end;
        .title-name {
          font-size: 15px;
          font-family: OPPOSans;
          font-weight: 500;
          color: #333333;
        }
        .time-box {
          display: flex;
          align-items: flex-end;

          .time-text {
            .clock-icon {
              margin-left: 10px;
            }
            .date {
              margin-left: 4px;
              font-size: 13px;
              font-family: OPPOSans;
              font-weight: 500;
              color: #e13925;
            }
          }

          .count-down-wrap {
            display: flex;
            align-items: center;
            margin-left: 6px;
            .block {
              display: block;
              width: 16px;
              height: 16px;
              line-height: 16px;
              text-align: center;
              background: #333333;

              font-size: 10px;
              font-family: OPPOSans;
              font-weight: bold;
              color: #ffffff;
            }
            .colon {
              margin: 0 2px;
            }
          }
        }
      }
      .goods-list {
        margin-top: 20px;
      }
    }

    .img-nav-list {
      margin-top: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      &::after {
        content: '';
        width: 114px;
      }
      .img-nav-item {
        margin-bottom: 6px;
      }
    }

    .banner-wrap {
      margin-top: 32px;

      .goods-list {
        margin-top: 11px;
      }
    }
  }
}

.popup-content {
  width: 236px;
  height: 100vh;
  background: #ffffff;
  overflow: hidden;

  .header {
    position: relative;
    padding: 17px 20px 0 26px;
    width: 237px;
    height: 59px;
    background: #efefef;
    .login-btn {
      .avatar {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        vertical-align: middle;
      }
      span {
        margin-left: 8px;
        font-size: 16px;
        font-family: OPPOSans;
        font-weight: 500;
        color: #383838;
      }
    }
    .right-icon {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      width: 5px;
      height: 12px;
    }
  }

  .cat-list {
    padding: 0 14px;
    .cat-item {
      position: relative;
      height: 56px;
      line-height: 54px;
      border-bottom: 1px solid #d7d7d7;
      &:nth-last-child(1) {
        border: none;
      }
      span {
        font-size: 14px;
        font-family: OPPOSans;
        font-weight: 500;
        color: #383838;
      }
      .right-icon {
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
        width: 5px;
        height: 11px;
      }
    }
  }
}
</style>
