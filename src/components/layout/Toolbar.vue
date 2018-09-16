<template>
    <v-toolbar color="blue darken-3" dark app fixed :clipped-left="$vuetify.breakpoint.mdAndUp">
    <v-toolbar-title class="ml-0 text-md-left text-sm-left text-xs-left">
      <v-toolbar-side-icon @click.stop="showMiniDrawer"></v-toolbar-side-icon>
      <router-link to="/" tag="span" style="cursor: pointer" class="hidden-sm-and-down">SGF</router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon @click.stop="showDialog">
        <v-icon>person_outline</v-icon>
    </v-btn>

    <v-btn icon>
        <v-icon>notifications</v-icon>
    </v-btn>

    <v-btn icon large>
        <v-avatar size="32px" tile>
        <img src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
             alt="Vuetify">
        </v-avatar>
    </v-btn>
    </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'drawer',
      'miniDrawer',
      'dialog'
    ])
  },

  methods: {
    showMiniDrawer () {
      if (this.$vuetify.breakpoint.mdAndUp) {
        this.changeMiniDrawer()
      } else {
        this.changeDrawer()
      }
    },

    changeDrawer () {
      this.$store.dispatch('changeDrawer', !this.drawer)
    },

    changeMiniDrawer () {
      this.$store.dispatch('changeMiniDrawer', !this.miniDrawer)
    },

    showDialog () {
      this.$store.dispatch('showDialog', !this.dialog)
    }
  }
}
</script>
