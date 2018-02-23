<template>
  <v-flex fill-height>
    <v-card flat height="100%">

      <!-- Barra de Título -->
      <v-card-title>
        <h3 class="headline"> {{ getPageTitle() }} </h3>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-text-field append-icon="search" v-model="search" @input="setSearch" single-line hide-details placeholder="Pesquisar"></v-text-field>
      </v-card-title>

      <!-- Tabela ou Formulário -->
      <v-card-text>
        <app-table></app-table>
      </v-card-text>

      <!-- Barra de botões -->
      <v-card-actions>
        <v-spacer/>
        <v-btn v-show="pageType === 'LIST'" color="primary" @click="newItem">Novo</v-btn>
        <v-btn v-show="pageType === 'FORM_NEW' || pageType === 'FORM_EDIT'" color="success">Salvar</v-btn>
        <v-btn v-show="pageType === 'FORM_NEW' || pageType === 'FORM_EDIT'" color="error" @click="cancel">Cancelar</v-btn>
      </v-card-actions>
    </v-card>

  </v-flex>
</template>

<script>
import Table from '../shared/Table'

export default {
  props: {
    pageTitle: ''
  },

  components: {
    appTable: Table
  },

  data () {
    return {
      pageType: 'LIST', // Este state precisa ser compartilhado pelo Vuex
      search: ''
    }
  },

  methods: {
    setSearch (event) {
      this.$store.dispatch('setSearch', this.search)
    },

    newItem () {
      this.pageType = 'FORM_NEW'
    },

    cancel () {
      this.pageType = 'LIST'
    },

    getPageTitle () {
      return this.pageType === 'LIST' ? this.pageTitle : this.pageType === 'FORM_NEW' ? this.pageTitle + ' (Novo)' : this.pageTitle + ' (Edição)'
    }
  }
}
</script>
