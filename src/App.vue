<template>
  <div id="app">
    <v-app id="sgf-root">
    
    <v-navigation-drawer class="nav-drawer" fixed :clipped="$vuetify.breakpoint.mdAndUp" app v-model="drawer" :mini-variant.sync="miniDrawer">
      <v-list dense>
        <v-list-group v-for="item in items" :key="item.title" :prepend-icon="item.action" no-action>
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-for="subItem in item.items" :key="subItem.title" @click="goTo(item.title)">
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>{{ subItem.action }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    
    <v-toolbar color="blue darken-3" dark app fixed :clipped-left="$vuetify.breakpoint.mdAndUp">
   
      <v-toolbar-title class="ml-0 text-md-left text-sm-left text-xs-left nav-drawer">
        <v-toolbar-side-icon @click.stop="$vuetify.breakpoint.mdAndUp ? miniDrawer = !miniDrawer : drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">SGF</span>
      </v-toolbar-title>
   
      <v-text-field flat solo-inverted prepend-icon="search" label="Pesquisar" class="hidden-sm-and-down"></v-text-field>
      <v-spacer></v-spacer>
   
      <v-btn icon>
        <v-icon>apps</v-icon>
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
   
    <v-btn fab bottom right color="pink" dark fixed @click.stop="dialog = !dialog">
      <v-icon>add</v-icon>
    </v-btn>

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
  name: "App",
  data: () => ({
    dialog: false,
    miniDrawer: false,
    drawer: null,
    items: [
      {
        action: "local_activity",
        title: "Attractions",
        items: [{ title: "List Item" }]
      },
      {
        action: "restaurant",
        title: "Dining",
        active: true,
        items: [
          { title: "Breakfast & brunch" },
          { title: "New American" },
          { title: "Sushi" }
        ]
      },
      {
        action: "school",
        title: "Education"
      },
      {
        action: "directions_run",
        title: "Family",
        items: [{ title: "List Item" }]
      },
      {
        action: "healing",
        title: "Health",
        items: [{ title: "List Item" }]
      },
      {
        action: "content_cut",
        title: "Office",
        items: [{ title: "List Item" }]
      },
      {
        action: "local_offer",
        title: "Promotions",
        items: [{ title: "List Item" }]
      }
    ]
  }),

  props: {
    source: String
  },

  methods: {
    goTo(path) {
      this.$router.push({ name: "HelloWorld" });
    }
  }
};
</script>

<style scoped>
  .nav-drawer {
    width: 250px !important;
  }
</style>
