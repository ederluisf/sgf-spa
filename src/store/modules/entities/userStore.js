import axios from 'axios'

const state = {
  users: [],
  url: '/users'
}

const mutations = {
  'SET_USERS' (state, users) {
    state.users = users
  }
}

const actions = {
  listUsers: ({ commit, state }) => {
    axios.get(state.url)
      .then(res => {
        commit('SET_USERS', res.data)
      })
      .catch(error => console.error(error))
  }
}

const getters = {
  users: state => {
    return state.users
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
