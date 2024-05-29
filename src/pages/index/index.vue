<route lang="json">
{
  "name": "首页",
  "style": { "navigationBarTitleText": "首页" }
}
</route>
<template>
  <view class="content">
    <view class="text-area" @click="toSubPages">
      <text class="title mt-10">{{ title }}</text>
    </view>

    <button class="btn">Click Me</button>
  </view>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  const title = ref("Hello");

  const toSubPages = () => {
    uni.navigateTo({ url: "/pages-sub/subPages/index" });
  };
</script>

<style scoped lang="scss">
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .logo {
    width: 200rpx;
    height: 200rpx;
    margin: 200rpx auto 50rpx;
  }
  .text-area {
    display: flex;
    justify-content: center;
  }
  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>
