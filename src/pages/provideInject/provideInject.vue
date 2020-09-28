<template>
  <div class="provide-inject-page">
    <h3>can change:</h3>
    close <el-switch v-model="canChange"></el-switch> open
    <h4>ancestor:</h4>
    <el-button type="primary" size="mini" @click="handleChange">change</el-button>
    <h4>father:</h4>
    <c-father :canChange="canChange"/>
  </div>
</template>

<script>
import father from "./components/father";
import Vue from 'vue'
export default {
  name: "provideInject",
  data:()=>({
    $_name: 'charlie',
    canChange: false,
    changeFlag: false
  }),
  components: {
    "c-father": father
  },
  provide: {
    btnSize: "mini", /* medium, small, mini */
    observableBtn: Vue.observable({
      size: "mini"
    })
  },
  watch:{
    changeFlag(val){
      const size = val ? 'medium' : 'mini';
      this._provided.btnSize = size
      this._provided.observableBtn.size = size
    }
  },
  methods: {
    handleChange(){
        if(this.canChange){
          this.changeFlag = ! this.changeFlag;
        }
    }
  }
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
