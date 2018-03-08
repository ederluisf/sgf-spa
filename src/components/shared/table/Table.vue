<template>
  <v-data-table :headers="headers" :items="items" :search="search" rows-per-page-text="Itens por página"
                :rows-per-page-items="[5, 10, 25, {text: 'Todos', value: -1}]"
                :pagination.sync="pagination" item-key="id"
                no-data-text="Nenhum item para ser exibido">

      <template slot="headers" slot-scope="props">
        <tr>
          <th v-for="header in props.headers"
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
      <td :class="header.left ? '' : 'text-xs-right text-md-right'" v-for="header in headers" :key="header.id">
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
          <v-btn icon class="mx-0" @click="deleteEntity(props.item)" slot="activator">
            <v-icon color="red">delete_forever</v-icon>
          </v-btn>
          <span>Remover</span>
        </v-tooltip>
      </td>
    </template>

    <v-alert slot="no-results" :value="true" color="error" icon="warning">
      Sua pesquisa por "{{ search }}" não retornou resultados.
    </v-alert>
  </v-data-table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  created () {
    this.$store.dispatch('listHeaders')
    this.$store.dispatch('listItems')
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
      'search'
    ])
  },

  methods: {
    ...mapActions([
      'setPageType',
      'loadEntity',
      'deleteItem'
    ]),

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
    },

    edit (entity) {
      this.loadEntity(entity.id)
    },

    deleteEntity (entity) {
      console.log('Deletando o item: ' + entity.name)
      console.log('Items cadastrados' + this.items)
      debugger
      this.deleteItem(entity)
    }
  }
}
</script>
