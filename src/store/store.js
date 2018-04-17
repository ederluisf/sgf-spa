import Vue from 'vue'
import Vuex from 'vuex'

import layout from './modules/layoutStore'
import registration from './modules/registrationStore'
import inputFileStore from './modules/inputFileStore'

import manufacturerStore from './modules/entities/manufacturerStore'
import modelStore from './modules/entities/modelStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    layout,
    registration,
    inputFileStore,
    manufacturerStore,
    modelStore
  }
})
