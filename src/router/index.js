import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ManufacturerList from '@/components/manufacturer/ManufacturerList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/manufacturer',
      name: 'manufacturer',
      component: ManufacturerList
    }
  ]
})
