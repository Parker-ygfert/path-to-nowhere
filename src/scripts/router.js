import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const env = import.meta.env
let history = createWebHistory(env.BASE_URL)
let routes = [
  {
    path: '',
    redirect: '/homepage'
  },
  {
    path: '/',
    redirect: '/homepage'
  },
  {
    path: env.VITE_PATH,
    redirect: '/homepage'
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: () => import('@/components/Source')
  },
  {
    path: '/endura',
    name: 'endura',
    component: () => import('@/components/Job')
  },
  {
    path: '/fury',
    name: 'fury',
    component: () => import('@/components/Job')
  },
  {
    path: '/umbra',
    name: 'umbra',
    component: () => import('@/components/Job')
  },
  {
    path: '/reticle',
    name: 'reticle',
    component: () => import('@/components/Job')
  },
  {
    path: '/arcane',
    name: 'arcane',
    component: () => import('@/components/Job')
  },
  {
    path: '/catalyst',
    name: 'catalyst',
    component: () => import('@/components/Job')
  },
  {
    path: '/sinner/:job/:name',
    name: 'sinner',
    component: () => import('@/components/Sinner')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/homepage'
  }
]

export default createRouter({ history, routes })
