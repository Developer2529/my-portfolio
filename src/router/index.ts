import { createRouter, createWebHistory } from "vue-router";
import ProfilePage from "../pages/ProfilePage.vue";
import NavBar from '../pages/NavBar.vue'
// import AboutMe from "../pages/AboutMe.vue";
// import ExperiencePage from "../pages/ExperiencePage.vue";
// import MyProjects from "../pages/MyProjects.vue";
// import MyContact from "../pages/MyContact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: NavBar,
      redirect: {
        name: "navMenu",
      },

      children: [
        {
          path: "",
          name: "ProfilePage",
          component: ProfilePage,
        },
      ],
    },
  ],
});

export default router;
