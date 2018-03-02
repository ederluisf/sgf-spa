import itemsTemp from '../../data/itemsTemp'
import headersTemp from '../../data/headersTemp'
import axios from 'axios'

const state = {
  headers: [],
  items: [],
  search: '',
  pageType: 'LIST'
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
  },
  'SET_PAGE_TYPE' (state, pageType) {
    state.pageType = pageType
  }
}

const actions = {
  listHeaders: ({ commit }, headers) => {
    commit('SET_HEADERS', headersTemp)
  },
  listItems: ({ commit }, items) => {
    axios.get('/manufacturers')
      .then(res => {
        console.log(res)
        // commit('SET_ITEMS', res.data)
        commit('SET_ITEMS', itemsTemp)
      })
      .catch(error => console.error(error))
  },
  saveItem () {
    axios.post('/manufacturers', {name: 'TESTE'})
      .then(res => console.log(res))
      .catch(error => console.log(error))
  },
  setSearch: ({ commit }, search) => {
    commit('SET_SEARCH', search)
  },
  setPageType: ({ commit }, pageType) => {
    commit('SET_PAGE_TYPE', pageType)
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
  },
  pageType: state => {
    return state.pageType
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
