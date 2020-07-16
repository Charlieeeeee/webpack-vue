<template>
  <div class="transition-page">
    <c-title>1.单元素/组件的过渡</c-title>
    <div>
      <button @click="show1 = !show1">Toggle</button>
      <transition name="fade">
        <p v-if="show1">hello</p>
      </transition>
    </div>

    <c-title>2.CSS 过渡</c-title>
    <div>
      <button @click="show2 = !show2">Toggle render</button>
      <transition name="slide-fade">
        <p v-if="show2">hello</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "mytransition",
  data: () => ({
    show1: true,
    show2: true
  })
};
</script>

<style scoped lang="scss">
.transition-page {
}
</style>

<style lang="scss">
// 1
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

// 2
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
