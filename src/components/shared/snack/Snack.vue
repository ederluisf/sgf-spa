<template>
  <v-snackbar
    top right
    :value="showSnack"
    :color="configSnack.color"
    :timeout="configSnack.timeout"
  >
    <span class="body-2"> {{ configSnack.text }} </span>

    <v-btn dark flat small @click.native="hideSnack">X</v-btn>
  </v-snackbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'showSnack',
      'configSnack'
    ])
  },

  methods: {
    ...mapActions([
      'setShowSnack'
    ]),

    hideSnack () {
      this.setShowSnack(false)
    }
  }
}
</script>
