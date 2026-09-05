import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import APODPage from '../views/APODPage.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactPage from '../views/ContactPage.vue'
import ProjectsPage from '@/views/ProjectsPage.vue'
import PhotographyPage from '../views/PhotographyPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/projects/apod',
      name: 'apod',
      component: APODPage
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },
    {
      path: '/randomize',
      name: 'randomize',
      component: () => import('../views/RandomizePage.vue')
    },
    {
      path: '/photography',
      name: 'photography',
      component: PhotographyPage
    }
  ]
})

export default router
