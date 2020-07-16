<template>
  <div class="hook-page">
    <div style="width:400px">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </div>
    <el-button type="primary" @click="handleClick">change</el-button>

    <!-- <async-component style="margin-top:20px;"></async-component> -->
  </div>
</template>
<script>
export default {
  name: "hook",
  components: {
    // 'async-component': () => import('@/global/async/AsyncComponent')
  },
  data: () => ({
    input: "old value"
  }),
  mounted() {
    this.$on("hook:updated", () => {
      console.log("updated");
    });
    this.$on("hook:deactivated", () => {
      console.log("deactivated");
    });
  },
  methods: {
    handleClick() {
      this.input = "new value";
    }
  }
};
</script>

<style scoped lang="scss">
.hook-page {
}
</style>