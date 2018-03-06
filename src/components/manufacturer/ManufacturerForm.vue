<template>
  <v-flex>
    <v-text-field label="Nome" v-model="entity.name" @blur="setValueIn('name', entity.name)"></v-text-field>

    <v-layout>
      <v-flex md4 sm12 xs12>
        <dropzone ref="myDropzone" id="dropzone"
                      :options="dropzoneOptions"
                      @vdropzone-file-added="fileAdded"
                      @vdropzone-mounted="dropzoneMounted">
        </dropzone>
      </v-flex>
    </v-layout>

  </v-flex>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import vue2Dropzone from 'vue2-dropzone'
import FileUtils from '../utils/FileUtils'

export default {
  components: {
    Dropzone: vue2Dropzone
  },

  data () {
    return {
      name: '',
      logo: null,
      dropzoneOptions: {
        url: 'http://localhost:8081/sgf-api/file-upload',
        maxFilesize: 1,
        acceptedFiles: 'image/*',
        addRemoveLinks: true,
        thumbnailWidth: 270,
        thumbnailMethod: 'contain',
        maxFiles: 1,
        dictDefaultMessage: 'Arraste uma imagem aqui ou clique para escolher'
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

    /* Tentar fazer parar de lançar o erro ao se editar uma montadora
    Apagar o componente SimpleInputFile
    Implementar a funcionalidade de remover uma entidade
    Fazer com que as colunas da tabela sejam dinamicas (Ver projeto AdminFy) */

    setValueIn (attribute, value) {
      this.entity[attribute] = value
    },

    fileAdded (fileUploaded) {
      FileUtils.getByteArrayFrom(fileUploaded)
        .then(byteArray => {
          this.setFile(byteArray)
          this.entity['logo'] = this.file
          console.log('Entidade: ' + JSON.stringify(this.entity))
        })
        .catch(error => console.log('ERRO: ' + error))
    },

    dropzoneMounted () {
      console.log('The Dropzone is mounted!!')
      let b64toBlob = require('b64-to-blob')
      let contentType = 'image/png'
      let blob = b64toBlob(this.entity.logo, contentType)
      let blobUrl = URL.createObjectURL(blob)
      let file = { size: 512, name: 'Logotipo' }
      this.$refs.myDropzone.manuallyAddFile(file, blobUrl)
    }
  },

  created () {
    /* console.log('Entidade: ' + JSON.stringify(this.entity)) */
  }
}
</script>

<style>
  .upload-action.is-dragging {
    background: green;
  }
</style>
