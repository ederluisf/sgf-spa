const state = {
  drawer: null,
  miniDrawer: false,
  dialog: false // Dialog do login --- refactor
}

const mutations = {
  'SET_DRAWER' (state, drawer) {
    state.drawer = drawer
  },
  'SET_MINI_DRAWER' (state, miniDrawer) {
    state.miniDrawer = miniDrawer
  },
  'SET_DIALOG' (state, dialog) {
    state.dialog = dialog
  }
}

const actions = {
  changeDrawer: ({ commit }, drawer) => {
    commit('SET_DRAWER', drawer)
  },
  changeMiniDrawer: ({ commit }, miniDrawer) => {
    commit('SET_MINI_DRAWER', miniDrawer)
  },
  showDialog: ({ commit }, dialog) => {
    commit('SET_DIALOG', dialog)
  }
}

const getters = {
  drawer: state => {
    return state.drawer
  },
  miniDrawer: state => {
    return state.miniDrawer
  },
  dialog: state => {
    return state.dialog
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
