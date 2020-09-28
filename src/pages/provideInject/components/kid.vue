<template>
  <div class="kid-container">
    <el-button type="primary" :size="size">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  inject: {
    mySize: {
      default: "medium",
      from: "btnSize"
    },
    observableBtn:{
      default: "medium",
      from: "observableBtn"
    }
  },
  computed:{
    size(){
      return this.$attrs.canChange ? this.observableBtn.size : this.mySize;
    }
  }
};
</script>

<style lang="scss" scoped>
.kid-container {
}
</style>