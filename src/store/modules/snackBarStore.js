const state = {
  showSnack: false,
  config: {
    text: 'Eder',
    timeout: 2000,
    color: 'success'
  }
}

const mutations = {
  'SET_SHOW_SNACK' (state, showSnack) {
    state.showSnack = showSnack
  },
  'SET_CONFIG' (state, config) {
    state.config = config
  }
}

const actions = {
  setShowSnack: ({ commit }, showSnack) => {
    commit('SET_SHOW_SNACK', showSnack)
  },
  setConfigSnack: ({ commit }, config) => {
    commit('SET_CONFIG', config)
  }
}

const getters = {
  showSnack: state => {
    return state.showSnack
  },
  configSnack: state => {
    return state.config
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
