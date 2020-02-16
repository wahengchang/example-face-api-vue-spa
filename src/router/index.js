import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/facedetection',
    name: 'Facedetection',
    component: () => import(/* webpackChunkName: "Facedetection" */ '../views/Facedetection.vue')
  },
  {
    path: '/landmark',
    name: 'Landmark',
    component: () => import(/* webpackChunkName: "about" */ '../views/Landmark.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
