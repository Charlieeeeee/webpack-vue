<template>
  <div class="sync-page">
    <div style="width:400px">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </div>
    <child :input.sync="input" v-bind="$attrs" />
  </div>
</template>

<script>
import child from "./components/child";
export default {
  name: "sync",
  components: {
    child
  },
  data: () => ({
    input: "old value"
  })
};
</script>

<style lang="scss" scoped>
.sync-page {
}
</style>