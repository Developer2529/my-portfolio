<script setup lang="ts">
import { ref } from 'vue';
// import profilePic from '/src/assets/img/lionCoding.png'
import profilePic from '/src/assets/img/10.svg'
import { IconGithub, IconLinkedin } from "@/components/icons/index2"
import AboutMe from './AboutMe.vue';
import MyProjects from './MyProjects.vue';
import MyContact from './MyContact.vue';
import ExperiencePage from './ExperiencePage.vue';
import DownloBtn from '@/components/icons/DownloBtn.vue';

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
  fullName: "John Doe",
  typeOfDeveloper: ["Frontend Developer", "Backend Developer"],
  cvBtn: "Download CV",
  contactInfoBtn: "Contact Info",
});
</script>

<template>
  <div  class="profile-main-div flex justify-center text-center gap-16">
    <div class="profile-img-div flex justify-center mt-40">
      <img class="profile-img w-80 h-80 " :src="profileInfo.profilePic" alt="profilePic">
    </div>
    <div class="profile-info-div">
      <p class="greeting-parag  text-slate-400">{{ profileInfo.profileGreeting }}</p>
      <p class="my-name text-white font-medium text-3xl pt-2 pb-2 ">{{ profileInfo.fullName }}</p>
      <p class="type-dev-parag text-xl text-slate-400 pb-2">{{ profileInfo.typeOfDeveloper[0] }}</p>
      <div class=" gap-2 mt-2 mb-2" >

        
          <button type="button"
            class="contact-info-btn py-2.5 px-5 me-2 mb-2 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-white focus:z-10 focus:ring-4 focus:ring-indigo-700 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"> <DownloBtn url="/src/assets/img/lionCoding.png"></DownloBtn></button>
      

        <!-- <DownloBtn url="/src/assets/logo.svg">
          <button type="button"
            class="py-2.5 px-5 me-2 mb-2 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{{
              profileInfo.cvBtn }}</button>
        </DownloBtn> -->
        <a href="#contact"><button type="button"
          class=" contact-info-btn py-2.5 px-5 me-2 mb-2 ml-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-white focus:z-10 focus:ring-4 focus:ring-indigo-700 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white ">{{
            profileInfo.contactInfoBtn }}</button></a>
      </div>
      <div class="social-media-div flex gap-4 flex-row justify-center">
        <a class="social-icon" href="https://github.com/Developer2529" target="_blank"><icon-github></icon-github></a>
        <a class="social-icon" href="https://www.linkedin.com/in/richar-starling-sanchez-francis-b11502213" target="_blank"><icon-linkedin></icon-linkedin></a>
      </div>
    </div>
  </div>
 <about-me></about-me>
 <experience-page></experience-page>
 <my-projects></my-projects>
 <my-contact></my-contact>
</template>

<style>


.contact-info-btn,
.social-icon{
  transition: transform 0.3s ease-in-out;
}

.social-icon:hover {
    transform: scale(1.1);
}
.contact-info-btn:hover{
  background-color: #fa200c;
  transform: scale(1.1);
}

.profile-img{
border-radius: 40%;

  
}
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
