<template>
  <div id="app">
    <v-app id="sgf-root">

      <v-navigation-drawer :class="miniDrawer ? 'nav-drawer-mini' : 'nav-drawer'" fixed :clipped="$vuetify.breakpoint.mdAndUp" app v-model="drawer" :mini-variant.sync="miniDrawer">
        <v-list dense>
          <v-list-group v-for="menu in menus" :key="menu.title" :prepend-icon="menu.action" no-action>
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ menu.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="subMenu in menu.subMenus" :key="subMenu.title" @click="goTo(subMenu.route)">
              <v-list-tile-action class="submenu-icon">
                <v-icon small>{{ subMenu.action }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ subMenu.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar color="blue darken-3" dark app fixed :clipped-left="$vuetify.breakpoint.mdAndUp">
        <v-toolbar-title class="ml-0 text-md-left text-sm-left text-xs-left nav-drawer">
          <v-toolbar-side-icon @click.stop="$vuetify.breakpoint.mdAndUp ? miniDrawer = !miniDrawer : drawer = !drawer"></v-toolbar-side-icon>
          <span class="hidden-sm-and-down">SGF</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon @click.stop="dialog = !dialog">
          <v-icon>person_outline</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>

        <v-btn icon large>
          <v-avatar size="32px" tile>
            <img src="https://vuetifyjs.com/static/doc-images/logo.svg"
                alt="Vuetify">
          </v-avatar>
        </v-btn>
      </v-toolbar>

      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
            <router-view/>
          </v-layout>
        </v-container>
      </v-content>

      <v-dialog v-model="dialog" width="400px">
        <v-container grid-list-sm>
          <v-layout align-center justify-center>
          <v-flex>
              <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                  <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                  <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Senha" id="password" type="password"></v-text-field>
                  </v-form>
              </v-card-text>
              <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary">Entrar</v-btn>
              </v-card-actions>
              </v-card>
          </v-flex>
          </v-layout>
        </v-container>
      </v-dialog>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    dialog: false,
    miniDrawer: false,
    drawer: null,
    menus: [
      {
        action: 'library_books',
        title: 'Cadastros',
        subMenus: [{ title: 'Montadoras', action: 'build', route: 'Manufacturer' }]
      },
      {
        action: 'local_activity',
        title: 'Attractions',
        subMenus: [{ title: 'List Item' }]
      },
      {
        action: 'restaurant',
        title: 'Dining',
        active: true,
        subMenus: [
          { title: 'Breakfast & brunch' },
          { title: 'New American' },
          { title: 'Sushi' }
        ]
      }
    ]
  }),

  props: {
    source: String
  },

  methods: {
    goTo (route) {
      this.$router.push({ name: route })
    }
  }
}
</script>

<style scoped>
  .nav-drawer {
    width: 250px !important;
  }

  .nav-drawer-mini {
    width: 60px !important;
  }

  .submenu-icon {
    min-width: 30px;
  }
</style>
