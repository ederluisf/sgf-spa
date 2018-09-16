import axios from 'axios'

const state = {
  models: [],
  url: '/models'
}

const mutations = {
  'SET_MODELS' (state, models) {
    state.models = models
  }
}

const actions = {
  listModels: ({ commit, state }) => {
    console.log('URL dentro do list models' + state.url)
    axios.get(state.url)
      .then(res => {
        console.log('Retorno do listModels' + res.data)
        commit('SET_MODELS', res.data)
      })
      .catch(error => console.error(error))
  }
}

const getters = {
  models: state => {
    return state.models
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
