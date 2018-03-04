// import itemsTemp from '../../data/itemsTemp'
import headersTemp from '../../data/headersTemp'
import axios from 'axios'

const state = {
  headers: [],
  items: [],
  entity: {},
  search: '',
  url: '/',
  pageType: 'LIST'
}

const mutations = {
  'SET_HEADERS' (state, headers) {
    state.headers = headers
  },
  'SET_ITEMS' (state, items) {
    state.items = items
  },
  'SET_ENTITY' (state, entity) {
    state.entity = entity
  },
  'SET_SEARCH' (state, search) {
    state.search = search
  },
  'SET_PAGE_TYPE' (state, pageType) {
    state.pageType = pageType
  },
  'SET_URL' (state, url) {
    state.url = url
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
        commit('SET_ITEMS', res.data)
      })
      .catch(error => console.error(error))
  },

  save ({ commit, state }, entity) {
    axios.post(state.url, entity)
      .then(res => {
        console.log(res)
        commit('SET_FILE', null)
        commit('SET_FILES', [])
        commit('SET_PAGE_TYPE', 'LIST')
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.status)
          console.log(error.response.data.errors)
        }
        console.log(error.config)
      })
  },

  loadEntity ({ commit, state }, id) {
    axios.get(state.url + '/' + id)
      .then(res => {
        console.log('RES.DATA: ' + JSON.stringify(res.data.data))

        commit('SET_ENTITY', res.data.data)
        commit('SET_PAGE_TYPE', 'FORM_EDIT')
      })
      .catch(error => {
        console.log(error.response.data.errors)
      })
  },

  setSearch: ({ commit }, search) => {
    commit('SET_SEARCH', search)
  },

  setEntity: ({ commit }, entity) => {
    commit('SET_ENTITY', entity)
  },

  setPageType: ({ commit }, pageType) => {
    commit('SET_PAGE_TYPE', pageType)
  },

  setUrl: ({ commit }, url) => {
    commit('SET_URL', url)
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
  },
  entity: state => {
    return state.entity
  },
  url: state => {
    return state.url
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
