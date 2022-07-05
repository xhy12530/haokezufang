import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout/home'
  },
  {
    path: '/layout',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: '/layout/home',
        component: () => import('@/views/Home')
      },
      {
        path: '/layout/list',
        component: () => import('@/views/List')
      },
      {
        path: '/layout/news',
        component: () => import('@/views/News')
      },
      {
        path: '/layout/profile',
        component: () => import('@/views/Profile')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  }
]

const router = new VueRouter({
  routes
})

export default router
