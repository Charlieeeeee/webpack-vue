<template>
  <div>
    <van-nav-bar
      v-if="$root.isShowNavBar"
      :title="navTitle"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import routes from "./routes";
export default {
  name: "App",
  data: () => ({
    navTitle: "垂直居中",
  }),
  mounted() {
    // 改变标题
    this.$watch("$route.meta", (val) => {
      if (val.title) {
        this.navTitle = val.title;
      }
    });
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    onClickRight() {
      this.$router.push({
        path: "indexBar",
      });
    },
  },
};
</script>

<style>
</style>