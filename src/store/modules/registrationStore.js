import axios from 'axios'

const state = {
  headers: [],
  items: [],
  entity: {},
  search: '',
  url: '/',
  pageType: 'LIST',
  showConfirmDialog: false,
  showSnack: false,
  configSnack: {
    text: '',
    timeout: 3000,
    color: 'success'
  }
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
  },
  'SET_SHOW_SNACK' (state, showSnack) {
    state.showSnack = showSnack
  },
  'SET_CONFIG_SNACK' (state, configSnack) {
    state.configSnack = configSnack
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
          setSnackConf(commit, 'Item salvo com sucesso!', 'success')
          resetValues(commit)
          commit('SET_PAGE_TYPE', 'LIST')
        })
        .catch(error => getErrors(commit, error))
    } else {
      axios.put(`${state.url}/${entity.id}`, entity)
        .then(res => {
          setSnackConf(commit, 'Item editado com sucesso!')
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
        setSnackConf(commit, 'Item removido com sucesso!')
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
  },

  setShowSnack: ({ commit }, showSnack) => {
    commit('SET_SHOW_SNACK', showSnack)
  },

  setConfigSnack: ({ commit }, configSnack) => {
    commit('SET_CONFIG_SNACK', configSnack)
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
  },
  showSnack: state => {
    return state.showSnack
  },
  configSnack: state => {
    return state.configSnack
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

function getErrors (commit, error) {
  if (error.response) {
    let errors = error.response.data.errors
    errors.forEach(erro => {
      setSnackConf(commit, erro, 'error')
    })
  }
  console.log(error.config)
}

function resetValues (commit) {
  commit('SET_ENTITY', {})
  commit('SET_FILE', null)
  commit('SET_FILES', [])
}

function setSnackConf (
  commit,
  text = state.configSnack.text,
  color = state.configSnack.color,
  timeout = state.configSnack.timeout
) {
  commit('SET_CONFIG_SNACK', {
    text: text,
    color: color,
    timeout: timeout
  })
  hideSnackOnTimeout(commit)
}

function hideSnackOnTimeout (commit) {
  commit('SET_SHOW_SNACK', true)
  setTimeout(() => {
    commit('SET_SHOW_SNACK', false)
  }, state.configSnack.timeout)
}
