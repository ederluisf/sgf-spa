<template>
  <v-flex>
    <v-text-field label="Nome" v-model="entity.name" @blur="setValueIn('name', entity.name)"></v-text-field>
    <app-simple-input-file @getFile="getFile" />

    <dropzone ref="myVueDropzone" id="dropzone"
                  :options="dropzoneOptions"
                  @vdropzone-file-added="teste"> </dropzone>

  </v-flex>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SimpleInputFile from '../shared/input-file/SimpleInputFile'
import vue2Dropzone from 'vue2-dropzone'
import FileUtils from '../utils/FileUtils'

export default {
  components: {
    AppSimpleInputFile: SimpleInputFile,
    Dropzone: vue2Dropzone
  },

  data () {
    return {
      name: '',
      logo: null,
      dropzoneOptions: {
        url: 'http://localhost:8081/sgf-api/file-upload',
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        addRemoveLinks: true,
        thumbnailMethod: 'contain',
        headers: { 'My-Awesome-Header': 'header value' }
      }
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
    },

    teste (file2) {
      console.log('Arquivo: ' + JSON.stringify(file2))
      this.entity.file = file2
      console.log('Entidade: ' + this.entity)
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
