<template>
  <v-dialog :value="dialog" width="400px" hide-overlay>
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
              <v-btn @click="login" color="primary">Entrar</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    dialog () {
      return this.$store.getters.dialog
    }
  },

  methods: {
    login () {
      this.$store.dispatch('showDialog', false)
    }
  }
}
</script>
