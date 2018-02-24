<template>
  <app-content pageTitle="Montadoras">
    <app-manufacturer-form slot="form"></app-manufacturer-form>
  </app-content>
</template>

<script>
import Content from '../layout/Content'
import ManufacturerForm from './ManufacturerForm'

export default {
  components: {
    appContent: Content,
    appManufacturerForm: ManufacturerForm
  }
}
</script>
