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
export default {
  data () {
    return {
      imageName: '',
      imageUrl: ''
    }
  },

  methods: {
    pickFile () {
      this.$refs.image.click()
    },

    onFilePicked (e) {
      const files = e.target.files
      const file = files[0]

      if (file !== undefined) {
        this.$emit('getFile', file) // Return file to de parent component
        this.imageName = file.name
        if (this.imageName.lastIndexOf('.') <= 0) { return }

        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)

        fileReader.addEventListener('load', () => {
          this.imageUrl = fileReader.result
        })
      } else {
        this.imageName = ''
        this.imageUrl = ''
      }
    }
  }
}
</script>
