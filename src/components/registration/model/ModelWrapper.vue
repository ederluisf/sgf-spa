<template>
  <app-content pageTitle="Modelos">
    <app-model-form slot="form"></app-model-form>
  </app-content>
</template>

<script>
import { mapActions } from 'vuex'
import Content from '@/components/layout/Content'
import ModelForm from './ModelForm'
import modelsHeaders from '@/data/entity-headers/modelHeaders'

export default {
  components: {
    appContent: Content,
    appModelForm: ModelForm
  },

  methods: {
    ...mapActions([
      'setUrl',
      'listHeaders'
    ])
  },

  created () {
    this.setUrl('/models')
    this.listHeaders(modelsHeaders)
  }
}
</script>
