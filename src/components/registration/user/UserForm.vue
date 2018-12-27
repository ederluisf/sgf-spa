<template>
<v-container fluid grid-list-lg>
    <v-layout row wrap>
        <v-flex md4 xs12>
            <v-text-field
              v-model="entity.name"
              label="Nome"
              id="name"
              @blur="$v.entity.name.$touch()"
              @input="$v.entity.name.$touch()"
              :error-messages="nameErrors">
            </v-text-field>
        </v-flex>

        <v-flex md4 xs12>
            <v-text-field
              v-model="entity.email"
              required
              label="Email"
              id="email">
            </v-text-field>
        </v-flex>

        <v-flex md4 xs12>
          <v-select
            :items="perfis"
            v-model="entity.type"
            label="Selecione"
            placeholder="Perfil"
            item-text="type"
            item-value="value.type">
          </v-select>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import userType from '../../../data/userType'
import { required, maxLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      perfis: userType
    }
  },

  computed: {
    ...mapGetters([
      'entity',
      'users',
      'validator'
    ]),

    nameErrors () {
      const errors = []
      if (!this.$v.entity.name.$dirty) return errors
      !this.$v.entity.name.maxLength && errors.push('Nome pode ter no máximo 10 letras')
      !this.$v.entity.name.required && errors.push('Nome é obrigatório.')
      return errors
    }
  },

  methods: {
    ...mapActions([
      'setEntity',
      'listUsers',
      'setValidator'
    ])
  },

  created () {
    this.setValidator(this.$v)
  },

  validations: {
    entity: {
      name: { required, maxLength: maxLength(10) }
    }
  }
}
</script>
