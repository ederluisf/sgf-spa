<template>
  <v-flex fill-height>
    <v-card flat height="100%">
      <v-card-title>
        <h3 class="headline"> {{ pageTitle }} </h3>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-text-field append-icon="search" single-line hide-details v-model="search" placeholder="Pesquisar"></v-text-field>
      </v-card-title>

      <v-card-text>
        <v-data-table :headers="headers" :items="manufacturers" :search="search" rows-per-page-text="Itens por página"
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
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn depressed color="primary">Novo</v-btn>
      </v-card-actions>
    </v-card>

  </v-flex>
</template>

<script>
export default {
  data () {
    return {
      search: '',

      pageTitle: 'Montadoras',

      headers: [
        { text: 'Nome', value: 'name' },
        { text: 'Ações', value: 'name', sortable: false, width: 50 }
      ],

      // Dados temporários apenas para a tela, depois será implantado o padrão vuex e na action buscará os dados via axios
      manufacturers: [
        { id: 1, name: 'Chevrolet', logoImage: null },
        { id: 2, name: 'Fiat', logoImage: null },
        { id: 3, name: 'Ford', logoImage: null },
        { id: 4, name: 'Honda', logoImage: null },
        { id: 5, name: 'Volkswagen', logoImage: null },
        { id: 6, name: 'Toyota', logoImage: null },
        { id: 7, name: 'Renault', logoImage: null },
        { id: 8, name: 'Mitsubishi', logoImage: null },
        { id: 9, name: 'Hyundai', logoImage: null },
        { id: 10, name: 'Chery', logoImage: null },
        { id: 11, name: 'Pegeot', logoImage: null },
        { id: 12, name: 'Subaru', logoImage: null },
        { id: 13, name: 'Nissan', logoImage: null },
        { id: 14, name: 'Citroen', logoImage: null }
      ]
    }
  }
}
</script>
