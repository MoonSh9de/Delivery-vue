import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GoodsView from '@/views/GoodsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/rest',
      name: 'GoodsView',
      component: GoodsView,
      props: true,
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {top: 0 };
  }
})

export default router
