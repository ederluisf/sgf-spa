<template>
  <app-content pageTitle="Usuários">
    <app-user-form slot="form"></app-user-form>
  </app-content>
</template>

<script>
import { mapActions } from 'vuex'
import Content from '@/components/layout/Content'
import UserForm from './UserForm'
import usersHeaders from '@/data/entity-headers/userHeaders'

export default {
  components: {
    appContent: Content,
    appUserForm: UserForm
  },

  methods: {
    ...mapActions([
      'setUrl',
      'listHeaders'
    ])
  },

  created () {
    this.setUrl('/users')
    this.listHeaders(usersHeaders)
  }
}
</script>
