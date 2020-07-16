<template>
  <div class="lifeCycle-page">
    <c-synopsis>
      <p>页面窗口从屏幕出现和从屏幕消失的两个生命周期钩子</p>
    </c-synopsis>
  </div>
</template>

<script>
export default {
  name: "lifeCycle",
  activated() {
    this.$on("hook:pageVisible", this.$_handlePageVisible);
    this.$on("hook:pageHidden", this.$_handlePageHidden);

    this.$once("hook:deactivated", () => {
      this.$off("hook:pageVisible", this.$_handlePageVisible);
      this.$off("hook:pageHidden", this.$_handlePageHidden);
    });
  },
  methods: {
    $_handlePageVisible() {
      console.log("页面显示出来了");
    },
    $_handlePageHidden() {
      console.log("页面隐藏了");
    }
  }
  // pageVisible() {
  //   console.log("页面显示出来了");
  // },
  // pageHidden() {
  //   console.log("页面隐藏了");
  // }
};
</script>

<style scoped lang="scss">
.life-cycle-page {
}
</style>
