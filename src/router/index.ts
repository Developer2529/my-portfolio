import { createRouter, createWebHistory } from "vue-router";
import TheHeader from "@/pages/TheHeader.vue";
import ProfilePage from "../pages/ProfilePage.vue";
// import TheNavBar from  "../pages/TheNavBar.vue";
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
      component: TheHeader,
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
