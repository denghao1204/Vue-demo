// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuerouter from 'vue-router'
import Vueresouce from 'vue-resource'
import Layout from './components/layout.vue'
import routerConfig from './routerConfig'
import store from './store/index'
Vue.use(Vuerouter);
Vue.use(Vueresouce);
const router = new Vuerouter(routerConfig)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<Layout/>',
  components: { Layout }
})
