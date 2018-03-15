<template>
  <v-flex>
    <v-data-table :headers="headers" :items="items" :search="search" rows-per-page-text="Itens por página"
                  :rows-per-page-items="[5, 10, 25, {text: 'Todos', value: -1}]"
                  :pagination.sync="pagination" item-key="id">

        <template slot="headers" slot-scope="props">
          <tr>
            <th v-for="header in headers"
                :key="header.id"
                :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                @click="changeSort(header.value)" >
              <v-icon small>arrow_upward</v-icon>
              {{ header.text }}
            </th>
            <th class="text-md-right">
              <span>Ações</span>
            </th>
          </tr>
        </template>

      <template slot="items" slot-scope="props">
        <td :class="header.left ? '' : 'text-xs-center text-md-center'" v-for="header in headers" :key="header.id">
            {{ getColumnData(props.item, header.value) }}
        </td>

        <td class="justify-end layout px-0">
          <v-tooltip bottom open-delay="1500">
            <v-btn icon class="mx-0" @click="edit(props.item)" slot="activator">
              <v-icon color="blue">edit</v-icon>
            </v-btn>
            <span>Editar</span>
          </v-tooltip>

          <v-tooltip bottom open-delay="1500">
            <v-btn icon class="mx-0" @click.stop="doShowConfirmDialog(true, props.item)" slot="activator">
              <v-icon color="red">delete_forever</v-icon>
            </v-btn>
            <span>Remover</span>
          </v-tooltip>
        </td>
      </template>

      <template slot="no-data" :value="true">
        <v-layout align-center>
          <v-icon color="red">warning</v-icon>
          <h3>&nbsp; Nenhum item para ser exibido.</h3>
        </v-layout>
      </template>

      <template slot="no-results" :value="true">
        <v-layout align-center>
          <v-icon color="red">warning</v-icon>
          <h3>&nbsp; Sua pesquisa por "<span style="color: red">{{ search }}</span>" não retornou resultados.</h3>
        </v-layout>
      </template>
    </v-data-table>

    <app-confirm title="Confirme: " message="Tem certeza que deseja remover este item?" @confirmed="deleteEntity" />
  </v-flex>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ConfirmDialog from '../dialog/ConfirmDialog'

export default {
  created () {
    this.$store.dispatch('listItems')
  },

  components: {
    appConfirm: ConfirmDialog
  },

  data () {
    return {
      pagination: {
        sortBy: 'name'
      }
    }
  },

  computed: {
    ...mapGetters([
      'headers',
      'items',
      'search',
      'showConfirmDialog'
    ])
  },

  methods: {
    ...mapActions([
      'setPageType',
      'loadEntity',
      'deleteItem',
      'setShowConfirmDialog'
    ]),

    edit (entity) {
      this.loadEntity(entity.id)
    },

    deleteEntity () {
      this.deleteItem()
    },

    doShowConfirmDialog (show, entity) {
      this.setShowConfirmDialog({
        show, entity
      })
    },

    getColumnData (row, field) {
      // process fields like `type.name`
      if (field) {
        let [l1, l2] = field.split('.')

        if (l2) {
          return row[l1] ? row[l1][l2] : null
        } else {
          return row[l1]
        }
      }
    },

    changeSort (column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = column
        this.pagination.descending = false
      }
    }
  }
}
</script>
