<template>
  <v-card>
    <v-card-title>
      Montadoras
      <v-spacer></v-spacer>
      <v-text-field append-icon="search" label="Pesquisar" single-line hide-details v-model="search"></v-text-field>
    </v-card-title>
    
    <v-data-table :headers="headers" :items="manufacturers" :search="search">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.name }}</td>
      </template>
 
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Sua pesquisa por "{{ search }}" não retornou resultados.
      </v-alert>
    </v-data-table>
 
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      search: '',

      headers: [
        { text: 'Nome', value: 'name' }
      ],

      //Dados temporários apenas para a tela, depois será implantado o padrão vuex e na action buscará os dados via axios
      manufacturers: [
        { id: 1, name: 'Chevrolet', logoImage: null },
        { id: 2, name: 'Fiat', logoImage: null },
        { id: 3, name: 'Ford', logoImage: null },
        { id: 4, name: 'Honda', logoImage: null },
        { id: 5, name: 'Volkswagen', logoImage: null },
        { id: 6, name: 'Toyota', logoImage: null },
        { id: 7, name: 'Renault', logoImage: null },
        { id: 8, name: 'Mitsubishi', logoImage: null },
      ]
    }
  }
}
</script>
