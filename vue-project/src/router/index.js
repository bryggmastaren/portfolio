import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // använder HTML5-history-läge
  routes: [
    {
      path: '/', // sökvägen för hemsidan
      name: 'home', // namnet på routern
      component: HomePage,
    },
    {
      path: '/randomize',
      name: 'randomize',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RandomizePage.vue'),
    },
  ],
})

export default router
