const state = {
  file: null,
  files: []
}

const mutations = {
  'SET_FILE' (state, file) {
    state.file = file
  },
  'SET_FILES' (state, files) {
    state.files = files
  }
}

const actions = {
  setFile: ({ commit, state }, file) => {
    state.files.push(file)
    commit('SET_FILE', file)
  },
  clearFiles: ({ state }) => {
    state.files = []
  }
}

const getters = {
  file: state => {
    return state.file
  },
  files: state => {
    return state.files
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
