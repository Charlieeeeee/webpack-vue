<template>
  <div>
      <h4>grand child props:</h4>
      <p>{{foo}}</p>
      <h4>grand child $attrs:</h4>
      <p>{{$attrs}}</p>
      <el-button type="primary" @click="handleClick">change foo</el-button>
      <grandGrandChild v-bind="$attrs" v-on="$listeners"  @sayHello="sayHello"/>
  </div>
</template>

<script>
import grandGrandChild from './grandGrandChild'
export default {
    name:'grandChild',
    props:['foo'],
    inheritAttrs:false,
    components:{
        grandGrandChild
    },
    methods:{
        handleClick(){
            this.$emit('update:foo','new foo')
            this.$emit('sayHi')
        },
        sayHello(){
            console.log('here is grand child. got hello from grand grand child')
        }
    }
}
</script>

<style>

</style>