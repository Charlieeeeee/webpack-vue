<template>
  <div class="sync-child-page">
      <el-button type="primary" @click="handleClick">change</el-button>
  </div>
</template>

<script>
export default {
    props:['input'],
    // data:()=>({
    //     input:''
    // }),
    methods:{
        handleClick(){
            // this.input = 'new value'
            this.$emit('update:input', 'new value')
        }
    }
}
</script>

<style scoped lang="scss">
.sync-child-page{

}
</style>