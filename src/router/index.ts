import { createRouter, createWebHistory } from 'vue-router'
import NavBar from '../pages/NavBar.vue'
import ProfilePage from '../pages/ProfilePage.vue'
import AboutMe from '../pages/AboutMe.vue'
import ExperiencePage from '../pages/ExperiencePage.vue'
// import MyProjects from '../pages/MyProjects.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: NavBar, 
      redirect: {
        name: 'navMenu',
      }, 

      children: [
        {
          path: '',
          name: 'ProfilePage',
          component: ProfilePage,
        }, 

        {
          path: '/about',
          name: 'abouts',
          component: AboutMe,
        },
        {
          path: '/experience',
          name: 'experiences',
          component: ExperiencePage,
        },
        // {
        //   path: '/projects',
        //   name: 'my-projects',
        //   component: MyProjects,
        // }
      ]
    },
  ]
})

export default router
