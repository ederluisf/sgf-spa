import axios from 'axios'

const state = {
  headers: [],
  items: [],
  entity: {},
  search: '',
  url: '/',
  pageType: 'LIST',
  showConfirmDialog: false
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
  'SET_SHOW_CONFIRM_DIALOG' (state, showConfirmDialog) {
    state.showConfirmDialog = showConfirmDialog
  },
  'REMOVE_ITEM' (state, entity) {
    const index = state.items.indexOf(entity)
    state.items.splice(index, 1)
  }
}

const actions = {
  listHeaders: ({ commit }, headers) => {
    commit('SET_HEADERS', headers)
  },

  listItems: ({ commit, state }) => {
    axios.get(state.url)
      .then(res => {
        console.log('ITEMS: ' + JSON.stringify(res.data))
        commit('SET_ITEMS', res.data)
      })
      .catch(error => console.error(error))
  },

  save ({ commit, state }, entity) {
    console.log('Tentanto salvar: ' + JSON.stringify(entity))
    if (!entity.id) {
      axios.post(state.url, entity)
        .then(res => {
          resetValues(commit)
          commit('SET_PAGE_TYPE', 'LIST')
        })
        .catch(error => getErrors(error))
    } else {
      axios.put(`${state.url}/${entity.id}`, entity)
        .then(res => {
          resetValues(commit)
          commit('SET_PAGE_TYPE', 'LIST')
        })
        .catch(error => getErrors(error))
    }
  },

  loadEntity ({ commit, state }, id) {
    axios.get(state.url + '/' + id)
      .then(res => {
        commit('SET_ENTITY', res.data.data)
        commit('SET_PAGE_TYPE', 'FORM_EDIT')
      })
      .catch(error => getErrors(error))
  },

  deleteItem ({ commit, state }) {
    axios.delete(state.url + '/' + state.entity.id)
      .then(res => {
      })
      .catch(error => console.log('Erro ao deletar: ' + error))

    commit('REMOVE_ITEM', state.entity)
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

  setShowConfirmDialog: ({ commit }, payload) => {
    commit('SET_SHOW_CONFIRM_DIALOG', payload.show)
    commit('SET_ENTITY', payload.entity)
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
  },
  showConfirmDialog: state => {
    return state.showConfirmDialog
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

function resetValues (commit) {
  commit('SET_ENTITY', {})
  commit('SET_FILE', null)
  commit('SET_FILES', [])
}
