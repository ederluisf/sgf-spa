import Vue from 'vue'
import Vuex from 'vuex'

import layout from './modules/layout'
import registration from './modules/registration'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    layout,
    registration
  }
})
