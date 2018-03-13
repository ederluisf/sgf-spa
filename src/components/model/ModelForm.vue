<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex md4 xs12>
        <v-select
          :items="manufacturers"
          v-model="model.manufacturer"
          label="Selecione"
          placeholder="Montadora"
          class="input-group--focused"
          item-value="id"
          item-text="name">
        </v-select>
      </v-flex>

      <v-flex md4 xs12>
        <v-text-field
          value="model.name"
          label="Nome"
          id="name">
        </v-text-field>
      </v-flex>

      <v-flex md4 xs12>
        <v-text-field
          value="model.version"
          label="Versão"
          id="version">
        </v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      model: { // trocar model para entity e setar os valores em entity
        manufacturerId: null,
        name: '',
        version: ''
      }
    }
  },

  computed: {
    ...mapGetters([
      'manufacturers'
    ])
  },

  methods: {
    ...mapActions([
      'listManufacturers'
    ])
  },

  created () {
    this.listManufacturers()
  }
}
</script>
