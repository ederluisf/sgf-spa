import Vue from 'vue'
import Router from 'vue-router'
import ManufacturerWrapper from '@/components/registration/manufacturer/ManufacturerWrapper'
import ModelWrapper from '@/components/registration/model/ModelWrapper'
import UserWrapper from '@/components/registration/user/UserWrapper'
import VehicleWrapper from '@/components/registration/vehicle/VehicleWrapper'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/model',
      name: 'model',
      component: ModelWrapper
    },
    {
      path: '/manufacturer',
      name: 'manufacturer',
      component: ManufacturerWrapper
    },
    {
      path: '/user',
      name: 'user',
      component: UserWrapper
    },
    {
      path: '/vehicle',
      name: 'vehicle',
      component: VehicleWrapper
    }
  ]
})
