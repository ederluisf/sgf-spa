import itemsTemp from '../../data/itemsTemp'
import headersTemp from '../../data/headersTemp'

const state = {
  headers: [],
  items: [],
  search: ''
}

const mutations = {
  'SET_HEADERS' (state, headers) {
    state.headers = headers
  },
  'SET_ITEMS' (state, items) {
    state.items = items
  },
  'SET_SEARCH' (state, search) {
    state.search = search
  }
}

const actions = {
  listHeaders: ({ commit }, headers) => {
    commit('SET_HEADERS', headersTemp)
  },
  listItems: ({ commit }, items) => {
    commit('SET_ITEMS', itemsTemp)
  },
  setSearch: ({ commit }, search) => {
    commit('SET_SEARCH', search)
  }
}

const getters = {
  headers: state => {
    return state.headers
  },
  items: state => {
    return state.items
  },
  search: state => {
    return state.search
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
