import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './routes';
import store from './store';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/common.scss';
import './style/init-css.scss';
import '@/base';
import Loading from '@/global/loading/loading';
import { init, bind } from '@/utils/custom-life-cycle';

// 延时异步组件
// Vue.component('async-component', function(resolve) {
// // 延时演示
//   setTimeout(function() {
//     require(['@/global/async/AsyncComponent'], resolve);
//   }, 2000);
// });

//
// Vue.component('async-component', () => import('@/global/async/AsyncComponent'));

// 初始化生命周期函数, 必须在Vue实例化之前确定合并策略
console.log(Vue.config.optionMergeStrategies);
init();

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);

Vue.$Loading = Vue.prototype.$Loading = Loading;
const vm = new Vue({
  el: '#app',
  router: new VueRouter(router),
  store: new Vuex.Store(store),
  render: h => h(App)
});

// 将rootVm 绑定到生命周期函数监听里面
bind(vm);
