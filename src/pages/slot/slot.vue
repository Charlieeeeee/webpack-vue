<template>
  <div class="slot-page">
    <div>
      <c-title>
        1.后备内容
      </c-title>
      <my-scope :list="list"></my-scope>
    </div>

    <div>
      <c-title>
        2.作用域插槽
      </c-title>
      <my-scope :list="list" v-slot:default="scope">
        {{scope.item}}
      </my-scope>
    </div>

    <div>
      <c-title>
        3.动态插槽 & 具名插槽的缩写
      </c-title>
      <my-scope>
        <template v-slot:[list[1]]>
          here is watermelon
        </template>
        <template #cantaloupe>
          pick me, cantaloupe
        </template>
      </my-scope>
    </div>
  </div>
</template>

<script>
import myscope from './components/myscope'
export default {
    name:"myslot",
    components:{
      'my-scope':myscope
    },
    data:()=>({
      list:[
        'apple',
        'watermelon',
        'strawberry',
        'cantaloupe',
      ],
      watermelon:'watermelon'
    })
}
</script>

<style scoped lang="scss">

</style>
