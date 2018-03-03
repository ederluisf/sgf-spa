<template>
  <v-flex>
    <v-text-field label="Nome" v-model="entity.name" @blur="setValueIn('name', entity.name)"></v-text-field>
    <app-simple-input-file fileAttributeName="logo" />
  </v-flex>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SimpleInputFile from '../shared/input-file/SimpleInputFile'

export default {
  components: {
    AppSimpleInputFile: SimpleInputFile
  },

  data () {
    return {
      entity: {
        name: '',
        logo: null
      }
    }
  },

  computed: {
    ...mapGetters({
      file: 'file',
      entityStore: 'entity'
    })
  },

  methods: {
    ...mapActions([
      'setEntity'
    ]),

    setValueIn (attribute, value) {
      console.log(attribute + ' - ' + value)
      const teste = {
        [attribute]: value,
        logo: this.file
      }

      this.setEntity(teste)
    }
  }
}
</script>

<style>
  .upload-action.is-dragging {
    background: green;
  }
</style>
