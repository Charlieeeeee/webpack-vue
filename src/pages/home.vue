<template>
  <div class="container">1234567890</div>
</template>

<script>
export default {
  name: "home",
  mounted() {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("is done");
      });
    }).then((res) => {
      console.log("promise", res, [1].includes(1));
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  font-family: DS-DIGIB;
  font-size: 30px;
  width: 100px;
  height: 100px;
  border: solid 1px blue;
}
</style>