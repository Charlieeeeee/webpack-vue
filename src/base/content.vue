<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  color: #666;
  padding: 20px 10px;
  margin: 20px 10px;
  border-left: 4px solid #cbcbcb;
  background-color: #f8f8f8;
  font-size: 30px;
}
</style>