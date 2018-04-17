<template>
  <app-content pageTitle="Veículos">
    <app-vehicle-form slot="form"></app-vehicle-form>
  </app-content>
</template>

<script>
import { mapActions } from 'vuex'
import Content from '@/components/layout/Content'
import VehicleForm from './VehicleForm'
import vehicleHeaders from '@/data/entity-headers/vehicleHeaders'

export default {
  components: {
    appContent: Content,
    appVehicleForm: VehicleForm
  },

  methods: {
    ...mapActions([
      'setUrl',
      'listHeaders'
    ])
  },

  created () {
    this.setUrl('/vehicles')
    this.listHeaders(vehicleHeaders)
  }
}
</script>
