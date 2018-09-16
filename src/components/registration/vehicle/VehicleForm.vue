<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex md4 xs12>
        <v-combobox
          :items="models"
          v-model="entity.model"
          label="Selecione"
          placeholder="Modelo"
          item-text="name">
        </v-combobox>
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
      'models'
    ])
  },

  methods: {
    ...mapActions([
      'listModels'
    ])
  },

  mounted () {
  },

  created () {
    this.listModels()
  }
}
</script>
