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
        <v-select
          :items="engines"
          v-model="entity.engine"
          label="Selecione"
          chips
          placeholder="Motor"
          item-text="type"
          item-value="value.type"
          >
        </v-select>
      </v-flex>

      <v-flex md4 xs12>
        <v-text-field
          v-model="entity.color"
          label="Cor"
          id="color">
        </v-text-field>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex md4 xs12>
        <v-select
          :items="fuelTypes"
          v-model="entity.fuel"
          label="Selecione"
          placeholder="Tipo de combustível"
          item-text="type"
          item-value="value.type">
        </v-select>
      </v-flex>

      <v-flex md4 xs12>
        <v-text-field
          v-model="entity.year"
          label="Ano"
          id="year"
          @blur="$v.entity.year.$touch()"
          :error-messages="yearErrors">
        </v-text-field>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex md4 xs12>
        <v-text-field
          v-model="entity.plate"
          label="Placa"
          id="plate">
        </v-text-field>
      </v-flex>

      <v-flex md8 xs12>
        <v-text-field
          v-model="entity.chassis"
          label="Chassis"
          id="chassis">
        </v-text-field>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex md6 xs12>
        <v-text-field
          v-model="entity.initialMileage"
          label="KM Inicial"
          id="initialMileage">
        </v-text-field>
      </v-flex>

      <v-flex md6 xs12>
        <v-text-field
          v-model="entity.currentMileage"
          label="KM Atual"
          id="currentMileage">
        </v-text-field>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import engineType from '../../../data/engineType'
import fuelType from '../../../data/fuelType'
import { required } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      engines: engineType,
      fuelTypes: fuelType
    }
  },

  computed: {
    ...mapGetters([
      'entity',
      'models',
      'validator'
    ]),

    // Configuração de mensagens das validações
    yearErrors () {
      const errors = []
      if (!this.$v.entity.year.$dirty) return errors
      !this.$v.entity.year.required && errors.push('Ano é obrigatório.')
      return errors
    }
  },

  methods: {
    ...mapActions([
      'listModels',
      'setValidator'
    ])
  },

  validations: {
    entity: {
      year: { required }
    }
  },

  mounted () {},

  created () {
    this.listModels()
    this.setValidator(this.$v)
  }
}
</script>
