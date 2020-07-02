<template>
  <div class="scope-container">
    which fruit do you like ?
      <ol v-if="list.length">
          <li v-for="(item,index) in list" :key="'list'+index">
              <slot :item="item">unknown fruit</slot>
          </li>
      </ol>
      <ol v-else>
        <li><slot name="apple">apple</slot></li>
        <li><slot name="watermelon">watermelon</slot></li>
        <li><slot name="strawberry">strawberry</slot></li>
        <li><slot name="cantaloupe">cantaloupe</slot></li>
      </ol>
  </div>
</template>

<script>
export default {
    name:'myscope',
    props:{
        list:{
            type:Array,
            default:()=>[]
        }
    }
}
</script>

<style lang="scss" scoped>
.scope-container{

}
</style>