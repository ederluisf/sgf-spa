<template>
  <v-data-table :headers="headers" :items="items" :search="search" rows-per-page-text="Itens por página"
                :rows-per-page-items="[5, 10, 25, {text: 'Todos', value: -1}]">
    <template slot="items" slot-scope="props">
      <td class="justify-center">{{ props.item.name }}</td>
      <td class="justify-center layout px-0">
        <v-tooltip bottom open-delay="1500">
          <v-btn icon class="mx-0" @click="editItem(props.item)" slot="activator">
            <v-icon color="blue">edit</v-icon>
          </v-btn>
          <span>Editar</span>
        </v-tooltip>
        <v-tooltip bottom open-delay="1500">
          <v-btn icon class="mx-0" @click="deleteItem(props.item)" slot="activator">
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

  computed: {
    ...mapGetters([
      'headers',
      'items',
      'search'
    ])
  },

  methods: {
    ...mapActions([
      'setPageType'
    ]),

    editItem (item) {
      this.setPageType('FORM_EDIT')
    }
  }
}
</script>
