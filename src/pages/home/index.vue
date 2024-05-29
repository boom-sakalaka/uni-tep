<route lang="json">
{ "name": "home", "style": { "navigationBarTitleText": "home" } }
</route>
<template>
  <z-paging ref="paging" v-model="dataList" @query="queryList">
    <view class="item" v-for="(item, index) in dataList" :key="index">
      <view class="item-title">{{ item.title }}</view>
    </view>
  </z-paging>
</template>
<script setup lang="ts">
  const paging = ref();
  const dataList = ref<{ title: string }[]>([]);

  const queryList = () => {
    paging.value.complete([{ title: "123" }]);
  };
</script>
