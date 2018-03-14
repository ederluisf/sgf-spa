<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex md4 xs12>
        <v-select
          :items="manufacturers"
          v-model="manufacturerId"
          @change="setManufacturer"
          label="Selecione"
          placeholder="Montadora"
          item-value="id"
          item-text="name">
        </v-select>
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
      manufacturerId: null
    }
  },

  computed: {
    ...mapGetters([
      'manufacturers',
      'entity'
    ])
  },

  methods: {
    ...mapActions([
      'listManufacturers'
    ]),

    setManufacturer (idManufacturer) {
      this.entity.manufacturer = { id: idManufacturer }
    }
  },

  created () {
    this.listManufacturers()
  }
}
</script>
