import { createRouter, createWebHistory } from 'vue-router'
import Endura from '/src/components/Endura.vue'
import Fury from '/src/components/Fury.vue'
import CrimeBrands from '/src/components/CrimeBrands.vue'

let history = createWebHistory()
let routes = [
  {
    path: '/',
    redirect: '/endura'
  },
  {
    path: '/endura',
    name: 'endura',
    component: Endura
  },
  {
    path: '/fury',
    name: 'fury',
    component: Endura
  },
  {
    path: '/umbra',
    name: 'umbra',
    component: Endura
  },
  {
    path: '/reticle',
    name: 'reticle',
    component: Endura
  },
  {
    path: '/arcane',
    name: 'arcane',
    component: Endura
  },
  {
    path: '/catalyst',
    name: 'catalyst',
    component: Endura
  },
  {
    path: '/crime-brands/:name',
    name: 'crime-brands',
    component: CrimeBrands
  }
]

export default createRouter({ history, routes })
