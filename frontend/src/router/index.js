import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home.vue'
import upload from '../views/upload.vue'
import signUp from '../views/signUp.vue'
import Logout from '../views/Logout.vue'
import apply from '../views/apply.vue'
import login from '../views/Login.vue'
import analysis from '../views/analysis.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/upload',
    name: 'upload',
    component: upload
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: signUp
  },
  {
    path: '/Logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/apply',
    name: 'apply',
    component: apply
  },
  {
    path: '/analysis',
    name: 'analysis',
    component: analysis
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
