import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './routes';
import store from './store';
import Vuex from 'vuex';
import './style/common.scss';
import './style/init-css.scss';

Vue.use(VueRouter);
Vue.use(Vuex);
new Vue({
  el: '#app',
  router: new VueRouter(router),
  store: new Vuex.Store(store),
  render: h => h(App)
});
