// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import jQuery from "jquery";


window.jQuery = window.$ = jQuery
require('bootstrap')
require('bootstrap/dist/css/bootstrap.css')

Vue.use(vueResource)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
