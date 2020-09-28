<template>
  <div class="grid-page">
    <c-title>一、容器属性</c-title>
    <div class="box-1">
      <div class="container">
        <div v-for="i in 9" :key="i" :style="{'background-color': colors[i-1]}">{{i}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "grid",
  data: () => ({
    colors: [
      "yellow",
      "cyan",
      "red",
      "green",
      "brown",
      "purple",
      "orange",
      "blue",
      "pink",
    ],
  }),
};
</script>

<style scoped lang="scss">
.grid-page {
  .box-1 {
    background-color: #ccc;
    padding: 50px;
    border-radius: 10px;

    .container {
      width: 400px;
      display: grid;
      gap: 10px;
      justify-content: start;
      grid-template-areas:
        "a b c"
        "d e f"
        "g h i";

      div {
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
