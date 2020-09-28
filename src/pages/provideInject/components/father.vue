<template>
  <div class="father-container">
    <el-button type="primary" :size="size">主要按钮</el-button>
    <h4>kid:</h4>
    <c-kid v-bind="$attrs"/>
  </div>
</template>

<script>
import kid from "./kid";
export default {
  inheritAttrs:false,
  components: {
    "c-kid": kid
  },
  computed:{
    size(){
      return this.$attrs.canChange ? this.observableBtn.size : this.btnSize;
    }
  },
  inject: ["btnSize","observableBtn"]
};
</script>

<style lang="scss" scoped>
</style>