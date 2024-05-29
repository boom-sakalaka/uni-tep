import { defineUniPages } from "@uni-helper/vite-plugin-uni-pages";

export default defineUniPages({
  easycom: {
    autoscan: true,
    custom: {
      "^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)":
        "z-paging/components/z-paging$1/z-paging$1.vue"
    }
  },
  pages: [],
  globalStyle: {
    navigationBarTextStyle: "black",
    navigationBarTitleText: "123",
    navigationBarBackgroundColor: "#fef100",
    backgroundColor: "#F8F8F8"
  }
  // tabBar: {
  //   custom: true,
  //   backgroundColor: '#ffffff',
  //   list: [
  //     {
  //       pagePath: 'pages/home/index'
  //     },
  //     {
  //       pagePath: 'pages/user/index'
  //     },
  //     {
  //       pagePath: 'pages/sale/index'
  //     }
  //   ]
  // }
});
