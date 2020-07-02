<template>
  <div>
      <h3>child $attrs:</h3>
      <p>{{$attrs}}</p>
      <grandChild v-bind="$attrs" v-on="$listeners"/>
  </div>
</template>

<script>
import grandChild from './grandChild'
export default {
    inheritAttrs: false,
    components:{
        grandChild
    },
}
</script>

<style>

</style>