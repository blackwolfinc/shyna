import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import product from '../views/product.vue'
import ShopCart from '../views/ShopCart.vue'
import Sucses from '../views/Sucses.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: '/product',
    name: 'product',
    component: product
  }, {
    path: '/ShopCart',
    name: 'ShopCart',
    component: ShopCart
  }, {
    path: '/Sucses',
    name: 'Sucses',
    component: Sucses
  }


]

const router = new VueRouter({
  routes
})

export default router