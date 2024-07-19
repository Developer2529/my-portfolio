<script setup lang="ts">
import { ref } from 'vue';
import profilePic from '/src/assets/img/lionCoding.png'
import { IconGithub, IconLinkedin } from "@/components/icons"

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

})

</script>

<template>
  <div class="proflie-main-div">
    <div class="profile-img-div">
      <img class="profile-img " :src="profileInfo.profilePic" alt="profilePic">
    </div>
    <div class="profile-info-div">
      <p class="greeting-parag">{{ profileInfo.profileGreeting }}</p>
      <p class="my-name">{{ profileInfo.fullName }}</p>
      <p class="type-dev-parag">{{ profileInfo.typeOfDeveloper[0] }}</p>
      <div>
        <button type="button" download 
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{{
            profileInfo.cvBtn }}</button>
        <button type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{{
            profileInfo.contactInfoBtn }}</button>

      </div>
      <div class="social-media-div">
        <icon-github ></icon-github>
        <icon-linkedin></icon-linkedin>
      </div>
    </div>
  </div>
</template>

<style>

.proflie-main-div {
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 2rem;
  background-color: #1f102f;
}

.profile-img-div {
  display: flex;
  justify-content: center;
  margin-top: 5rem;
}

.profile-info-div {
  justify-content: center;
  margin-top: 5rem;
  padding-top: 2rem;
}
.profile-img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border-style: solid;
  border-color: blue;
}

.social-media-img {
  margin: 0.5rem;
}

.social-media-div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* gap: 2rem; */
}

.my-name {
  font-weight: 600;
  font-size: 2rem;
  padding: 0.2rem 0 0.2rem 0;
  color: white;
}
.type-dev-parag,
.greeting-parag {
  color: rgb(144, 171, 199);
}

.type-dev-parag {
  font-size: 1.2rem;
  padding-bottom: 0.5rem;
}

/* media queries here  */

@media screen and (max-width: 598px) {
  .proflie-main-div {
    display: flex;
    /* justify-content: center;
        text-align: center;
        gap: 2rem; */
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
    /* justify-content: space-around; */
    padding-left: 5rem;
  }
}

@media screen and (min-width: 598px) {
  #user-dropdown ul {
    display: none;
  }
}

</style>