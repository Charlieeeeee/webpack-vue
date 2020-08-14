<template>
  <div class="box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CTitle",
};
</script>

<style lang="scss" scoped>
.box {
  padding: 10px;
  border-left: 4px solid #42b983;
  font-size: 30px;
  margin: 10px;
}
</style>