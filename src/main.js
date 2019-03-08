// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import { router } from './router'
import  { store }  from './store'
import ApiService from './services/api.service'
import { TokenService } from './services/storage.service'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)
// todo
// cssVars()

Vue.use(BootstrapVue)

ApiService.init("http://localhost:8081/api")

// If token exists set header
if (TokenService.getToken()) {
  ApiService.setHeader()
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
