<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex md4 xs12>
        <v-combobox
          :items="manufacturers"
          v-model="entity.manufacturer"
          label="Selecione"
          placeholder="Montadora"
          item-text="name">
        </v-combobox>
      </v-flex>

      <v-flex md4 xs12>
        <v-text-field
          v-model="entity.name"
          label="Nome"
          id="name">
        </v-text-field>
      </v-flex>

      <v-flex md4 xs12>
        <v-text-field
          v-model="entity.version"
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
    }
  },

  computed: {
    ...mapGetters([
      'entity',
      'manufacturers'
    ])
  },

  methods: {
    ...mapActions([
      'listManufacturers'
    ])
  },

  mounted () {
  },

  created () {
    this.listManufacturers()
  }
}
</script>
