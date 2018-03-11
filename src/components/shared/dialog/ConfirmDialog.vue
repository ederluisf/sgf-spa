<template>
  <v-layout row justify-center>
    <v-dialog :value="showConfirmDialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline" >{{ title }}</v-card-title>
        <v-card-text class="subheading">{{ message }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="yesClicked">Sim</v-btn>
          <v-btn color="blue darken-1" flat @click.native="noClicked">Não</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    title: '',
    message: ''
  },

  computed: {
    ...mapGetters([
      'showConfirmDialog',
      'entity'
    ])
  },

  methods: {
    ...mapActions([
      'setShowConfirmDialog'
    ]),

    yesClicked () {
      this.$emit('confirmed')
      this.setShowConfirmDialog(false)
    },

    noClicked () {
      this.setShowConfirmDialog(false)
    }
  }
}
</script>
