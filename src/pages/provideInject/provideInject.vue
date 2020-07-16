<template>
  <div class="provide-inject-page">
    <h4>father:</h4>
    <c-father />
  </div>
</template>

<script>
import father from "./components/father";
export default {
  name: "provideInject",
  components: {
    "c-father": father
  },
  provide: {
    btnSize: "mini" /* medium, small, mini */
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.provide-inject-page {
  width: 30%;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  padding: 20px;
  min-width: 300px;
}
</style>
