<template>
  <app-content pageTitle="Montadoras">
    <app-manufacturer-form slot="form"></app-manufacturer-form>
  </app-content>
</template>

<script>
import { mapActions } from 'vuex'
import Content from '../layout/Content'
import ManufacturerForm from './ManufacturerForm'
import manufacturerHeaders from '../../data/manufacturerHeaders'

export default {
  components: {
    appContent: Content,
    appManufacturerForm: ManufacturerForm
  },

  methods: {
    ...mapActions([
      'setUrl',
      'listHeaders'
    ])
  },

  created () {
    this.setUrl('/manufacturers')
    this.listHeaders(manufacturerHeaders)
  }
}
</script>
