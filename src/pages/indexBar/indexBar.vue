<template>
  <div class="container">
    <van-cell
      :title="`${index+1}. ${item.meta.title}`"
      v-for="(item,index) in routes"
      :key="item.name"
      @click="handleClick(item)"
    />
  </div>
</template>

<script>
import routeData from "@/routes";
export default {
  name: "IndexBar",
  activated() {
    this.$root.hideNavBar();
  },
  deactivated() {
    this.$root.showNavBar();
  },
  computed: {
    routes() {
      return routeData.routes.filter(
        (item) => item.name !== "IndexBar" && item.name
      );
    },
  },
  data: () => ({
    indexList: [1, 2],
  }),
  methods: {
    handleClick(item) {
      this.$router.push({ path: item.path });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  background-color: #f7f8fa;
  .van-cell {
    font-size: 40px;
    line-height: normal;
  }
}
</style>