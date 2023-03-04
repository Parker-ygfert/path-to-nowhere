import { createRouter, createWebHistory } from 'vue-router'
import Endura from '/src/components/Endura.vue'
import Fury from '/src/components/Fury.vue'
import CrimeBrands from '/src/components/CrimeBrands.vue'

let history = createWebHistory()
let routes = [
  {
    path: '/',
    redirect: '/path-to-nowhere/endura'
  },
  {
    path: '/path-to-nowhere',
    redirect: '/path-to-nowhere/endura'
  },
  {
    path: '/path-to-nowhere/endura',
    name: 'endura',
    component: Endura
  },
  {
    path: '/path-to-nowhere/fury',
    name: 'fury',
    component: Fury
  },
  {
    path: '/path-to-nowhere/umbra',
    name: 'umbra',
    component: Endura
  },
  {
    path: '/path-to-nowhere/reticle',
    name: 'reticle',
    component: Endura
  },
  {
    path: '/path-to-nowhere/arcane',
    name: 'arcane',
    component: Endura
  },
  {
    path: '/path-to-nowhere/catalyst',
    name: 'catalyst',
    component: Endura
  },
  {
    path: '/path-to-nowhere/crime-brands/:name',
    name: 'crime-brands',
    component: CrimeBrands
  }
]

export default createRouter({ history, routes })
