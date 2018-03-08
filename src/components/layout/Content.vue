<template>
  <v-flex fill-height>
    <v-card flat style="height: 100%;">

      <!-- Barra de Título -->
      <v-card-title>
            <h3 class="headline"> {{ pageTitle }}
                <transition
                  appear mode="out-in"
                  enter-active-class="animated fadeIn"
                  leave-active-class="animated fadeOut">
                  <span v-if="pageType === 'FORM_NEW'">(Novo)</span>
                  <span v-if="pageType === 'FORM_EDIT'">(Edição)</span>
                </transition>
            </h3>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-text-field append-icon="search" v-model="search" @input="doSearch"
                          v-show="pageType === 'LIST'" single-line hide-details placeholder="Pesquisar"></v-text-field>
      </v-card-title>

      <!-- Tabela ou Formulário -->
      <v-card-text>
        <transition
          appear mode="out-in"
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut">
          <app-table v-if="pageType === 'LIST'" transition="slide-x-transition"></app-table>
          <slot v-else name="form"></slot>
        </transition>
      </v-card-text>

      <!-- Barra de botões -->
      <v-card-actions class="absolute-bottom pr-4">
         <transition
          appear mode="out-in"
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut">
          <v-btn v-if="pageType === 'LIST'" color="primary" @click="newItem">
            Novo
          </v-btn>

          <div v-else>
            <v-btn v-show="pageType === 'FORM_NEW' || pageType === 'FORM_EDIT'" color="success"
                   @click="saveEntity">
              Salvar
            </v-btn>

            <v-btn v-show="pageType === 'FORM_NEW' || pageType === 'FORM_EDIT'" color="error"
                  @click="cancel" class="ml-4">
              Cancelar
            </v-btn>
          </div>
        </transition>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import Table from '../shared/table/Table'
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
      'pageType',
      'file',
      'files',
      'entity'
    ])
  },

  methods: {
    ...mapActions([
      'setSearch',
      'setPageType',
      'setEntity',
      'save'
    ]),

    doSearch () {
      this.setSearch(this.search)
    },

    newItem () {
      this.setEntity({})
      this.setPageType('FORM_NEW')
    },

    cancel () {
      this.setPageType('LIST')
    },

    saveEntity () {
      this.save(this.entity)
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
