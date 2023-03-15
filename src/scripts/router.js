import { createRouter, createWebHashHistory } from 'vue-router'
import CrimeBrands from '/src/components/CrimeBrands.vue'
import Job from '/src/components/Job.vue'
import Source from '/src/components/Source.vue'

let history = createWebHashHistory()
let routes = [
  {
    path: '/',
    redirect: '/source'
  },
  {
    path: '/path-to-nowhere',
    redirect: '/source'
  },
  {
    path: '/source',
    name: 'source',
    component: Source
  },
  {
    path: '/endura',
    name: 'endura',
    component: Job
  },
  {
    path: '/fury',
    name: 'fury',
    component: Job
  },
  {
    path: '/umbra',
    name: 'umbra',
    component: Job
  },
  {
    path: '/reticle',
    name: 'reticle',
    component: Job
  },
  {
    path: '/arcane',
    name: 'arcane',
    component: Job
  },
  {
    path: '/catalyst',
    name: 'catalyst',
    component: Job
  },
  {
    path: '/crime-brands/:job/:name',
    name: 'crime-brands',
    component: CrimeBrands
  }
]

export default createRouter({ history, routes })
