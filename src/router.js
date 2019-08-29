import Vue from 'vue'
import Router from 'vue-router'
import ProductList from './views/ProductList'
import ProductAdd from './views/ProductAdd'
import Web from './views/Web'
import Webid from './views/Webid'
import Kurs from './views/Kurs'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'product-list',
      component: ProductList
    },
    {
      path: '/add',
      name: 'product-add',
      component: ProductAdd
    },
    {
      path: '/web',
      name: 'web',
      component: Web
    },
    {
      path: '/web/:id',
      name: 'web-id',
      component: Webid
    },
    {
      path: '/kurs',
      name: 'kurs',
      component: Kurs
    }
  ]
})
