// Imports
import Vue from 'vue'
import Router from 'vue-router'
// import { trailingSlash } from '@/util/helpers'
/* import {
  layout,
  route,
} from '@/util/routes' */

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition
    return { x: 0, y: 0 }
  },
  routes: [
    { path: '*', redirect: '/foxbel' },
    { path: '/', redirect: '/foxbel' },
    {
      path: '/foxbel',
      name: 'lpn',
      redirect: '/foxbel/admin-foxbel',
      component: () => import('@/layouts/default/Index.vue'),
      children: [
        {
          path: 'admin-foxbel',
          name: 'admin-foxbel',
          component: () => import('@/views/LPN/Lpn.vue'),
        },
      ],
    },
    /* {
      path: '/',
      redirect: 'login',
      component: () => import('@/layouts/blank/Blanklayout.vue'),
      children: [
        {
          name: 'FullLogin',
          path: 'login',
          component: () => import('@/views/Login/Login.vue'),
        },
      ],
    }, */
  ],
})
export default router
