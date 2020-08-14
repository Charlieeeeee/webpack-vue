import './utils/flexible';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './routes';
import store from './store';
import Vuex from 'vuex';
import './style/common.scss';
import './style/init-css.scss';
import Vant from 'vant';
import 'vant/lib/index.css';
import './base';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vant);
new Vue({
  el: '#app',
  router: new VueRouter(router),
  store: new Vuex.Store(store),
  render: h => h(App),
  data: {
    isShowNavBar: true
  },
  methods: {
    showNavBar() {
      this.isShowNavBar = true;
    },
    hideNavBar() {
      this.isShowNavBar = false;
    }
  }
});
