import Vue from 'vue'
import Router from 'vue-router'
import ManufacturerWrapper from '@/components/registration/manufacturer/ManufacturerWrapper'
import ModelWrapper from '@/components/registration/model/ModelWrapper'
import VehicleWrapper from '@/components/registration/vehicle/VehicleWrapper'

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
    },
    {
      path: '/vehicle',
      name: 'vehicle',
      component: VehicleWrapper
    }
  ]
})
