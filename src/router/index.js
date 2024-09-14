import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodView from '../views/FoodView.vue'
import FoodDetailView from '../views/FoodDetailView.vue'
import KeranjangView from '@/views/KeranjangView.vue'
import PesananSayaView from '@/views/PesananSayaView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/foods',
    name: 'FoodView',
    component: FoodView
  },
  {
    path: '/foods/:id',
    name: 'FoodDetailView',
    component: FoodDetailView
  },
  {
    path: '/keranjang',
    name: 'KeranjangView',
    component: KeranjangView
  },
  {
    path: '/pesanan-saya',
    name: 'PesananSayaView',
    component: PesananSayaView
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
