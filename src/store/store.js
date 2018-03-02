import Vue from 'vue'
import Vuex from 'vuex'

import layout from './modules/layoutStore'
import registration from './modules/registrationStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    layout,
    registration
  }
})
