import axios from 'axios'

const state = {
  manufacturers: [],
  url: '/manufacturers'
}

const mutations = {
  'SET_MANUFACTURERS' (state, manufacturers) {
    state.manufacturers = manufacturers
  }
}

const actions = {
  listManufacturers: ({ commit, state }) => {
    axios.get(state.url)
      .then(res => {
        commit('SET_MANUFACTURERS', res.data)
      })
      .catch(error => console.error(error))
  }
}

const getters = {
  manufacturers: state => {
    return state.manufacturers
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
