import itemsTemp from '../../data/itemsTemp'
import headersTemp from '../../data/headersTemp'
import axios from 'axios'

const state = {
  headers: [],
  items: [],
  entity: null,
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
  'SET_ENTITY' (state, entity) {
    state.entity = entity
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
  save ({ commit }, entity) {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>> Em save da store ---> Name: ' + entity.name)
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>> Em save da store ---> Logo: ' + entity.logo)
    axios.post('/manufacturers', entity)
      .then(res => {
        console.log(res)
        commit('SET_FILE', null)
        commit('SET_FILES', [])
        commit('SET_PAGE_TYPE', 'LIST')
      })
      .catch(error => console.log(error))
  },
  setSearch: ({ commit }, search) => {
    commit('SET_SEARCH', search)
  },
  setEntity: ({ commit }, entity) => {
    console.log('>>>>>>>>>>>>>>>>>>>>>>> Em actions, Entidade: ' + entity.name + ' - Logotipo: ' + entity.logo)
    commit('SET_ENTITY', entity)
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
  },
  entity: state => {
    return state.entity
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
