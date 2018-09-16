<template>
  <v-flex>
    <v-text-field label="Nome"
      v-model.trim="entity.name"
      id="manufacturer-name"
      @blur="$v.entity.name.$touch()"
      @input="$v.entity.name.$touch()"
      :error-messages="nameErrors"
    />

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
import FileUtils from '@/components/utils/FileUtils'
import { required, maxLength } from 'vuelidate/lib/validators'

export default {
  components: {
    Dropzone: vue2Dropzone
  },

  data () {
    return {
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
      'entity',
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
      'setFile',
      'setUrl',
      'setValidator'
    ]),

    fileAdded (fileUploaded) {
      if (!fileUploaded.manuallyAdded) {
        FileUtils.getByteArrayFrom(fileUploaded)
          .then(byteArray => {
            this.setFile(byteArray)
            this.entity['logo'] = this.file
          })
          .catch(error => console.log('ERRO: ' + error))
      }
    },

    dropzoneMounted () {
      if (this.entity.logo) {
        let b64toBlob = require('b64-to-blob')
        let contentType = 'image/png'
        let blob = b64toBlob(this.entity.logo, contentType)
        let blobUrl = URL.createObjectURL(blob)
        let file = { size: 512, name: 'Logotipo' }
        this.$refs.myDropzone.manuallyAddFile(file, blobUrl)
      }
    }
  },

  created () {
    // console.log('V em Manufacturer Form: ' + JSON.stringify(this.$v))
    this.setValidator(this.$v)
  },

  validations: {
    entity: {
      name: { required, maxLength: maxLength(10) }
    }
  }
}
</script>

<style>
  .upload-action.is-dragging {
    background: green;
  }
</style>
