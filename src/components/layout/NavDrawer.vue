<template>
  <v-navigation-drawer fixed clipped width="250" mini-variant-width="60"
                       app :value="drawer" :mini-variant.sync="miniDrawer" hide-overlay>
    <v-list dense>
      <v-list-group v-for="menu in menus" :key="menu.title" :prepend-icon="menu.action" no-action>
        <v-list-tile slot="activator">
          <v-list-tile-content>
            <v-list-tile-title>{{ menu.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-for="subMenu in menu.subMenus" :key="subMenu.title" :to="subMenu.route">
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
</template>

<script>
import menus from '../../data/menus'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      menus
    }
  },

  computed: {
    ...mapGetters([
      'drawer',
      'miniDrawer'
    ])
  }
}
</script>

<style scoped>
.submenu-icon {
  min-width: 30px;
}
</style>
