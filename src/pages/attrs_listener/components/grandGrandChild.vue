<template>
  <div>
      <h5>grand grand child props:</h5>
      <p>{{coo}}</p>
      <h5>grand grand child $attrs:</h5>
      <p>{{$attrs}}</p>
      <el-button type="primary" @click="handleClick">change coo</el-button>
  </div>
</template>

<script>
export default {
    name:'grandGrandChild',
    props:['coo'],
    // inheritAttrs:false,
    methods:{
        handleClick(){
            this.$emit('update:coo','new coo')
            this.$emit('sayHello')
        }
    }
}
</script>

<style>

</style>