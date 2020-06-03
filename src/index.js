import  Vue from 'vue'
import Home from './pages/home.vue'

var app = new Vue({
  el: '#app',
  render: h => h(Home),
})