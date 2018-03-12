import Vue from 'vue'
import Router from 'vue-router'
import ManufacturerWrapper from '@/components/manufacturer/ManufacturerWrapper'
import ModelWrapper from '@/components/model/ModelWrapper'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/manufacturer',
      name: 'manufacturer',
      component: ManufacturerWrapper
    },
    {
      path: '/model',
      name: 'model',
      component: ModelWrapper
    }
  ]
})
