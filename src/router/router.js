import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GoodsView from '@/views/GoodsView.vue'
import AboutView from '@/views/AboutView.vue'
import PolicyView from '@/views/PolicyView.vue'
import ContactsView from '@/views/ContactsView.vue'

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
    },
    {
      path: '/about',
      name: 'AboutView',
      component: AboutView,
      props: true,
    },
    {
      path: '/policy',
      name: 'PolicyView',
      component: PolicyView,
      props: true,
    },
    {
      path: '/contacts',
      name: "ContactsView",
      component: ContactsView,
      props: true,
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {top: 0 };
  }
})

export default router
