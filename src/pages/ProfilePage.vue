<script setup lang="ts">
import { ref } from 'vue';
import profilePic from '/src/assets/img/profilePicModified2.svg'
import { IconGithub, IconLinkedin } from "@/components/icons/index2"
import AboutMe from './AboutMe.vue';
import MyProjects from './MyProjects.vue';
import MyContact from './MyContact.vue';
import ExperiencePage from './ExperiencePage.vue';
import DownloBtn from '@/components/icons/DownloBtn.vue';
import MyCertifications from './MyCertifications.vue';

interface profileDataType {
  profilePic: any;
  profileGreeting: string;
  fullName: string;
  typeOfDeveloper: [string, string];
  cvBtn: string;
  contactInfoBtn: string;
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
  <div class="profile-main-div flex justify-center text-center gap-16   main-div-vh">

    <div class="profile-img-div flex justify-center mt-40">
      <img class="profile-img w-52 h-60" :src="profileInfo.profilePic" alt="profilePic">
    </div>

    <div class="profile-info-div">
      <p class="greeting-parag profile-name text-slate-400">{{ profileInfo.profileGreeting }}</p>
      <p class="my-name profile-name text-white font-medium text-3xl pt-2 pb-2">{{ profileInfo.fullName }}</p>
      <p class="type-dev-parag profile-name text-xl text-slate-400 pb-4">{{ profileInfo.typeOfDeveloper[0] }}</p>

      <button type="button"
        class="contact-info-btn py-2.5 px-5 me-2 mb-2 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-white focus:z-10 focus:ring-4 focus:ring-indigo-700 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        <DownloBtn url="/CV_RICHARD_SANCHEZ_FRONTEND_DEVELOPER.pdf"></DownloBtn>
      </button>

      <a href="#contact"><button type="button"
          class=" contact-info-btn py-2.5 px-5 me-2 mb-2 ml-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-white focus:z-10 focus:ring-4 focus:ring-indigo-700 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white ">{{
            profileInfo.contactInfoBtn }}</button></a>


      <div class="social-media-div flex gap-4 flex-row justify-center pt-2">
        <a class="social-icon" href="https://github.com/Developer2529" target="_blank">
          <IconGithub />
        </a>
        <a class="social-icon" href="https://www.linkedin.com/in/richar-starling-sanchez-francis-b11502213"
          target="_blank">
          <IconLinkedin />
        </a>
      </div>
    </div>



    <div class="hr"></div>

  </div>
  <div class="hr arrow-container">
    <a href="#about" class="arrow-down">
      <!-- <IconArrowdown /> -->
    </a>
  </div>



  <AboutMe />
  <ExperiencePage />
  <MyProjects />
  <MyCertifications />
  <MyContact />
</template>

<style>
.arrow-container {
  position: absolute;
  bottom: 20px;
  /* Adjust as needed */
  left: 50%;
  transform: translateX(-50%);
}

.arrow-down {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}


.contact-info-btn,
.social-icon {
  transition: transform 0.3s ease-in-out;
}

.contact-info-btn {
  background-color: white;
}

.social-icon:hover {
  transform: scale(1.1);
}

.contact-info-btn:hover {
  background-color: #fa200c;
  transform: scale(1.1);
}

.profile-img {
  border-radius: 15%;
}

.profile-info-div {
  justify-content: center;
  margin-top: 7rem;
  padding-top: 4rem;
}

/* Media Queries */
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
}

@media screen and (min-width: 768px) {
  #user-dropdown ul {
    display: none;
  }
}
</style>
