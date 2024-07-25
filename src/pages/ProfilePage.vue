<script setup lang="ts">
import { ref } from 'vue';
import profilePic from '/src/assets/img/lionCoding.png'
import { IconGithub, IconLinkedin } from "@/components/icons/index2"
import AboutMe from './AboutMe.vue';
import MyProjects from './MyProjects.vue';
import MyContact from './MyContact.vue';
import ExperiencePage from './ExperiencePage.vue';

interface profileDataType {
  profilePic: any; 
  profileGreeting: String; 
  fullName: String; 
  typeOfDeveloper: [String, String]; 
  cvBtn: String;
  contactInfoBtn: String;
}

const profileInfo = ref<profileDataType>({
  profilePic: profilePic,
  profileGreeting: "Hello, I'm",
  fullName: "Richard Sanchez",
  typeOfDeveloper: ["Frontend Developer", "Backend Developer"],
  cvBtn: "Download CV",
  contactInfoBtn: "Contact Info",
});
</script>

<template>
  <div  class="profile-main-div flex justify-center text-center gap-16">
    <div class="profile-img-div flex justify-center mt-40">
      <img class="profile-img w-60 h-60 rounded-full" :src="profileInfo.profilePic" alt="profilePic">
    </div>
    <div class="profile-info-div">
      <p class="greeting-parag  text-slate-400">{{ profileInfo.profileGreeting }}</p>
      <p class="my-name text-white font-medium text-3xl pt-2 pb-2 ">{{ profileInfo.fullName }}</p>
      <p class="type-dev-parag text-xl text-slate-400 pb-2">{{ profileInfo.typeOfDeveloper[0] }}</p>
      <div>
        <button type="button" download 
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{{
            profileInfo.cvBtn }}</button>
        <button type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{{
            profileInfo.contactInfoBtn }}</button>
      </div>
      <div class="social-media-div flex flex-row justify-center">
        <icon-github></icon-github>
        <icon-linkedin></icon-linkedin>
      </div>
    </div>
  </div>
 <about-me></about-me>
 <experience-page></experience-page>
 <my-projects></my-projects>
 <my-contact></my-contact>
</template>

<style>

.profile-info-div {
  justify-content: center;
  margin-top: 10rem;
  padding-top: 2rem;
}

/* media queries */
@media screen and (max-width: 598px) {
  .profile-main-div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .profile-img-div {
    margin-top: 2rem;
  }

  .profile-info-div {
    margin-top: 0rem;
    padding-top: 0;
  }

  .nav-first-div {
    padding-left: 5rem;
  }
}

@media screen and (min-width: 768px) {
  #user-dropdown ul {
    display: none;
  }
}
</style>
