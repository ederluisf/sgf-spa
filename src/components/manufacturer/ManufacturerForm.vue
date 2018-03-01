<template>
  <form>
    <v-text-field label="Name"></v-text-field>

    <vue-clip :options="options">
      <template slot="clip-uploader-action">
        <div>
          <div class="dz-message"><h2> Click or Drag and Drop files here upload </h2></div>
        </div>
      </template>

      <template slot="clip-uploader-body" slot-scope="props">
        <div v-for="file in props.files" :key="file.name">
          <img v-bind:src="file.dataUrl" />
          {{ file.name }} {{ file.status }}
        </div>
      </template>
    </vue-clip>

    <vue-clip :options="options">
      <template slot="clip-uploader-action" slot-scope="params">
       <div v-bind:class="{'is-dragging': params.dragging}" class="upload-action">
          <h2> Click or Drag and Drop files here upload </h2>
        </div>
      </template>

    </vue-clip>

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
