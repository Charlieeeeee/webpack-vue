<template>
  <div class="kid-container">
    <el-button type="primary" :size="mySize">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  inject: {
    mySize: {
      default: "medium",
      from: "btnSize"
    }
  }
};
</script>

<style lang="scss" scoped>
.kid-container {
}
</style>