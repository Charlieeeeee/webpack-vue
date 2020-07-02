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
import { init, bind } from '@/utils/custom-life-cycle';

console.log(Vue.config.optionMergeStrategies);
// 初始化生命周期函数, 必须在Vue实例化之前确定合并策略
init();

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);
const vm = new Vue({
  el: '#app',
  router: new VueRouter(router),
  store: new Vuex.Store(store),
  render: h => h(App)
});

// 将rootVm 绑定到生命周期函数监听里面
bind(vm);
