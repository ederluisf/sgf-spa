<template>
  <form>
    <v-text-field label="Name"></v-text-field>

  </form>
</template>

<script>
export default {
  data () {
    return {
      options: {
        url: '/upload',
        paramName: 'file'
      }
    }
  }
}
</script>

<style>
  .upload-action.is-dragging {
    background: green;
  }
</style>
