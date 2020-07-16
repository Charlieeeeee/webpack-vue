<template>
  <div class="attr-linstener-page">
    <c-synopsis>
        <p>1. $attrs 就是没有用props接收的，父组件传来的，参数对象</p>
        <p>2. $listeners 当组件A被调用时加上 <c-codes>v-on="$listeners"</c-codes>，外部所有组件都可以通过监听到组件A的所有emit发出的事件</p>
    </c-synopsis>
    <h2>parents foo</h2>
    <p>{{foo}}</p>
    <child :foo.sync="foo" :coo.sync="coo" :goo="goo" @sayHi="sayHi" @sayHello="sayHello"/>
  </div>
</template>

<script>
// import CustomDialog from '../components/customDialog'
import child from './components/child'
import { Dialog } from 'element-ui'
export default {
    name:"attrs_listener",
    components:{
      // CustomDialog,
      child,
    },
    data:()=>({
      // visibleDialog:true
      foo:'foo',
      coo:'coo',
      goo:'goo'
    }),
    methods:{
      sayHi(){
        console.log('Hi, here is grand child')
      },
      sayHello(){
        console.log('Hello, here is grand grand child')
      }
    }
}
</script>

<style lang="scss" scoped>
.attr-linstener-page{
}
</style>