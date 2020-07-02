<template>
  <div class="lifeCycle-page">
    <c-synopsis>
      <p>页面窗口从屏幕出现和从屏幕消失的两个生命周期钩子</p>
    </c-synopsis>
  </div>
</template>

<script>
export default {
    name:"lifeCycle",
    pageVisible() {
      console.log('页面显示出来了')
    },
    pageHidden() {
      console.log('页面隐藏了')
    }
}
</script>

<style scoped lang="scss">
.life-cycle-page{

}
</style>
