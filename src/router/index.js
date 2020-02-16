import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Facedetection from '../views/Facedetection.vue'
import Landmark from '../views/Landmark.vue'

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
    component: Facedetection
  },
  {
    path: '/landmark',
    name: 'Landmark',
    component: Landmark
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
