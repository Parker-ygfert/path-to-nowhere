import { createRouter, createWebHistory } from 'vue-router'
import Endura from '/src/components/Endura.vue'

let history = createWebHistory()
let routes = [
  {
    path: '/',
    redirect: '/endura'
  },
  {
    path: '/endura',
    name: 'Endura',
    component: Endura
  }
]

export default createRouter({ history, routes })
