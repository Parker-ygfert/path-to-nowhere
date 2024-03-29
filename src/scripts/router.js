import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const env = import.meta.env
const routes = [
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
    path: '/pool',
    name: 'pool',
    component: () => import('@/components/Pool')
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
    path: '/guide',
    name: 'guide',
    component: () => import('@/components/Guide')
  },
  {
    path: '/sinner/:job/:name',
    name: 'sinner',
    component: () => import('@/components/Sinner')
  },
  {
    path: '/reply',
    name: 'reply',
    component: () => import('@/components/CommentReply')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/homepage'
  }
]

const router = createRouter({
  history: createWebHistory(env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      document.getElementById(to.hash.slice(1)).scrollIntoView()
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
