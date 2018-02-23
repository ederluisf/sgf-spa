<template>
  <div id="app">
    <v-app id="sgf-root">

      <app-login></app-login>

      <app-nav-drawer></app-nav-drawer>

      <app-toolbar></app-toolbar>

      <v-content>
        <v-container fluid fill-height px-2 py-2>
          <v-layout justify-center align-center>
            <router-view/>
          </v-layout>
        </v-container>
      </v-content>

    </v-app>
  </div>
</template>

<script>
import NavDrawer from './components/layout/NavDrawer.vue'
import Toolbar from './components/layout/Toolbar.vue'
import Login from './components/layout/Login.vue'

export default {
  name: 'App',

  components: {
    appNavDrawer: NavDrawer,
    appToolbar: Toolbar,
    appLogin: Login
  },

  data: () => ({
    dialog: false
  }),

  computed: {
    drawer () {
      return this.$store.getters.drawer
    },
    miniDrawer () {
      return this.$store.getters.miniDrawer
    }
  },

  props: {
    source: String
  },

  methods: {
  }
}
</script>
