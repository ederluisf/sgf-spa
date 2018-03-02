<template>
  <form>
    <v-text-field label="Name" v-model="entity.name"></v-text-field>
    <vue-dropzone v-model="entity.picture"
                  ref="myVueDropzone"
                  id="dropzone"
                  @vdropzone-complete="teste"
                  :options="dropzoneOptions"
                  style="width: 260px;"/>
  </form>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'

export default {
  components: {
    vueDropzone: vue2Dropzone
  },

  data () {
    return {
      entity: {
        name: 'Eder',
        picture: null
      },

      dropzoneOptions: {
        url: 'http://httpbin.org/post',
        thumbnailWidth: 185,
        addRemoveLinks: true,
        maxFilesize: 0.5,
        maxFiles: 1,
        thumbnailMethod: 'contain',
        acceptedFiles: 'image/*',
        dictDefaultMessage: 'Arraste arquivos aqui ou clique para selecionar uma imagem',
        dictRemoveFile: 'Remover Imagem'
      }
    }
  },

  methods: {
    teste (file) {
      console.log(file)
      console.log('Nome: ' + file.name)
    }
  }
}
</script>

<style>
  .upload-action.is-dragging {
    background: green;
  }
</style>
