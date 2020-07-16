<template>
  <div class="father-container">
    <el-button type="primary" :size="btnSize">主要按钮</el-button>
    <h4>kid:</h4>
    <c-kid />
  </div>
</template>

<script>
import kid from "./kid";
export default {
  components: {
    "c-kid": kid
  },
  inject: ["btnSize"]
};
</script>

<style lang="scss" scoped>
</style>