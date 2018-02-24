<template>
  <v-flex fill-height>
    <v-card flat style="height: 100%;">

      <!-- Barra de Título -->
      <v-card-title>
        <h3 class="headline"> {{ getPageTitle() }} </h3>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-text-field append-icon="search" v-model="search" @input="doSearch"
                      v-show="pageType === 'LIST'" single-line hide-details placeholder="Pesquisar"></v-text-field>
      </v-card-title>

      <!-- Tabela ou Formulário -->
      <v-card-text>
        <app-table v-if="pageType === 'LIST'"></app-table>
        <slot v-else name="form"></slot>
      </v-card-text>

      <!-- Barra de botões -->
      <v-card-actions class="absolute-bottom pr-4">
        <v-btn v-show="pageType === 'LIST'" color="primary" @click="newItem">
          Novo
        </v-btn>

        <v-btn v-show="pageType === 'FORM_NEW' || pageType === 'FORM_EDIT'" color="success"
               @click="save">
          Salvar
        </v-btn>

        <v-btn v-show="pageType === 'FORM_NEW' || pageType === 'FORM_EDIT'" color="error"
               @click="cancel" class="ml-4">
          Cancelar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import Table from '../shared/Table'
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    pageTitle: ''
  },

  components: {
    appTable: Table
  },

  data () {
    return {
      search: ''
    }
  },

  computed: {
    ...mapGetters([
      'pageType'
    ])
  },

  methods: {
    ...mapActions([
      'setSearch',
      'setPageType'
    ]),

    doSearch () {
      this.setSearch(this.search)
    },

    newItem () {
      this.setPageType('FORM_NEW')
    },

    cancel () {
      this.setPageType('LIST')
    },

    save () {
      this.setPageType('LIST')
    },

    getPageTitle () {
      return this.pageType === 'LIST' ? this.pageTitle : this.pageType === 'FORM_NEW' ? this.pageTitle + ' (Novo)' : this.pageTitle + ' (Edição)'
    }
  }
}
</script>

<style>
.absolute-bottom {
  position: absolute;
  bottom: 0;
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  transition: all .4s cubic-bezier(.25,.8,.5,1);
  width: 100%;
}
</style>
