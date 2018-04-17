<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex md4 xs12>
        <v-select
          :items="models"
          v-model="entity.model"
          label="Selecione"
          placeholder="Modelo"
          combobox
          item-text="name">
        </v-select>
      </v-flex>

      <v-flex md4 xs12>
        <v-text-field
          v-model="entity.color"
          label="Cor"
          id="color">
        </v-text-field>
      </v-flex>

      <v-flex md4 xs12>
        <v-text-field
          v-model="entity.plate"
          label="Placa"
          id="plate">
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
      'vehicles'
    ])
  },

  methods: {
    ...mapActions([
      'listModels'
    ])
  },

  mounted () {
    console.log('Entidade: ' + JSON.stringify(this.entity))
  },

  created () {
    this.listModels()
  }
}
</script>
