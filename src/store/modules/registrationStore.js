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
  },
  'REMOVE_ITEM' (state, entity) {
    state.items.splice(entity, 1)
  }
}

const actions = {
  listHeaders: ({ commit }, headers) => {
    commit('SET_HEADERS', headersTemp)
  },

  listItems: ({ commit }) => {
    axios.get('/manufacturers')
      .then(res => {
        commit('SET_ITEMS', res.data)
      })
      .catch(error => console.error(error))
  },

  save ({ commit, state }, entity) {
    if (!entity.id) {
      axios.post(state.url, entity)
        .then(res => {
          console.log(res)
        })
        .catch(error => getErrors(error))
    } else {
      axios.put(`${state.url}/${entity.id}`, entity)
        .then(res => {
          console.log(res)
        })
        .catch(error => getErrors(error))
    }
    commit('SET_ENTITY', {})
    commit('SET_FILE', null)
    commit('SET_FILES', [])
    commit('SET_PAGE_TYPE', 'LIST')
  },

  loadEntity ({ commit, state }, id) {
    axios.get(state.url + '/' + id)
      .then(res => {
        commit('SET_ENTITY', res.data.data)
        commit('SET_PAGE_TYPE', 'FORM_EDIT')
      })
      .catch(error => getErrors(error))
  },

  deleteItem ({ commit, state }, entity) {
    console.log('Passei no deleteItem da Store')

    axios.delete(state.url + '/' + entity.id)
      .then(res => {
        console.log('Deletando: ' + JSON.stringify(entity.name))
        console.log('Itens: ' + JSON.stringify(state.items))
        console.log('Resposta do Servidor: ' + JSON.stringify(res))
        commit('REMOVE_ITEM', entity)
        debugger
      })
      .catch(error => console.log('Erro ao deletar: ' + error))
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

function getErrors (error) {
  if (error.response) {
    console.log(error.response.status)
    console.log(error.response.data.errors)
  }
  console.log(error.config)
}
