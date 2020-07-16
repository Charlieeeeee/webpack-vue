<template>
  <div class="extend-page">
    <c-synopsis>
      <p>点击open程序化调用全局组件loading</p>
    </c-synopsis>
    <el-button type="primary" @click="handleOpen">open</el-button>
  </div>
</template>

<script>
export default {
  name: "extend",
  methods: {
    handleOpen() {
      this.$Loading.open();
      let timer = setTimeout(() => {
        this.$Loading.close();
        clearTimeout(timer);
        timer = null;
      }, 1000);
    }
  }
};
</script>

<style scoped lang="scss">
.extend-page {
}
</style>
