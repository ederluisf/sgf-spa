// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'animate.css/animate.min.css'
import 'dropzone/dist/min/dropzone.min.css'
import 'dropzone/dist/min/basic.min.css'
import VueClip from 'vue-clip'
import App from './App'
import router from './router'
import store from './store/store'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8081/sgf-api'
axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueClip)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
