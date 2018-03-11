import Vue from 'vue'
import Router from 'vue-router'
import ManufacturerWrapper from '@/components/manufacturer/ManufacturerWrapper'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/manufacturer',
      name: 'manufacturer',
      component: ManufacturerWrapper
    }
  ]
})
