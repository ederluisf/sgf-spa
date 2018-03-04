<template>
  <v-flex>
    <v-text-field label="Nome" v-model="entity.name" @blur="setValueIn('name', entity.name)"></v-text-field>
    <app-simple-input-file @getFile="getFile" />
  </v-flex>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SimpleInputFile from '../shared/input-file/SimpleInputFile'
import FileUtils from '../utils/FileUtils'

export default {
  components: {
    AppSimpleInputFile: SimpleInputFile
  },

  data () {
    return {
      name: '',
      logo: null
    }
  },

  computed: {
    ...mapGetters([
      'file',
      'entity'
    ])

  },

  methods: {
    ...mapActions([
      'setEntity',
      'setFile',
      'setUrl'
    ]),

    getFile (fileUploaded) {
      FileUtils.getByteArrayFrom(fileUploaded)
        .then(byteArray => {
          this.setFile(byteArray)
          this.entity['logo'] = this.file
          console.log('Entidade: ' + JSON.stringify(this.entity))
        })
        .catch(error => console.log('ERRO: ' + error))
    },

    setValueIn (attribute, value) {
      this.entity[attribute] = value
    }
  },

  created () {
    console.log('Entidade: ' + JSON.stringify(this.entity))
  }
}
</script>

<style>
  .upload-action.is-dragging {
    background: green;
  }
</style>
