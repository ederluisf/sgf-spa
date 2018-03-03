<template>
  <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center" md4 sm12>
    <img :src="imageUrl" width="200" v-if="imageUrl"/>
    <v-text-field label="Selecione uma imagem" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
    <input
      type="file"
      style="display: none"
      ref="image"
      accept="image/*"
      @change="onFilePicked">
  </v-flex>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      imageName: '',
      imageUrl: '',
      imageFile: ''
    }
  },

  props: {
    fileAttributeName: ''
  },

  computed: {
    ...mapGetters([
      'file',
      'files',
      'entity'
    ])
  },

  methods: {
    ...mapActions([
      'setFile',
      'setEntity'
    ]),

    pickFile () {
      this.$refs.image.click()
    },

    /* No tutorial de obter um byte[] da imagem estava ensinando com readAsArrayBuffer
    Porém com readAsDataURL também salvou.
    Então agora preciso listar corretamente e tentar reexibir na edição
    Caso Não exiba a imagem, tentar salvar com readAsArrayBuffer e testar novamente */

    onFilePicked (e) {
      const files = e.target.files

      if (files[0] !== undefined) {
        this.imageName = files[0].name

        if (this.imageName.lastIndexOf('.') <= 0) { return }

        const fileReader = new FileReader()
        const fileByteArray = []

        fileReader.readAsDataURL(files[0])

        fileReader.addEventListener('load', () => {
          this.imageUrl = fileReader.result
          this.imageFile = files[0]

          let array = new Uint8Array(this.imageUrl)

          for (var i = 0; i < array.length; i++) {
            fileByteArray.push(array[i])
          }

          this.setFile(fileByteArray)
          this.entity[this.fileAttributeName] = fileByteArray
          this.setEntity(this.entity)
          console.log('The fileAttributeName is : ' + this.fileAttributeName)
          console.log('No onFilePicked: ' + this.file)
          console.log('Entity from vuex: ' + this.entity)
          console.log('>>>>>>> Result: ' + fileByteArray)
        })
      } else {
        this.imageName = ''
        this.imageFile = ''
        this.imageUrl = ''
      }
    }
  }
}
</script>

<style scoped>

</style>
