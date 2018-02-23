import Vue from 'vue'
import Router from 'vue-router'
import ManufacturerList from '@/components/manufacturer/ManufacturerList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/manufacturer',
      name: 'manufacturer',
      component: ManufacturerList
    }
  ]
})
