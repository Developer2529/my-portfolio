<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import type { Ref } from 'vue';

interface NavBarText {
  fullName: string;
  home: string;
  about: string;
  experience: string;
  projects: string;
  contact: string;
}

interface MenuListProps {
  divBg: string;
  width: string;
  marginTop: string;
  transition: string;
}

export default {
  setup() {
    const navBartext: Ref<NavBarText> = ref<NavBarText>({
      fullName: "${R1ch@rd S@nch3z}",
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    });

    const hamburgerDiv: Ref<boolean> = ref(false);
    const menuListProps: Ref<MenuListProps> = ref<MenuListProps>({
      divBg: "#300a6f",
      width: "100%",
      marginTop: "8rem",
      transition: "1.5s",
    });

    const showMenuOptBtn = (): void => {
      hamburgerDiv.value = !hamburgerDiv.value;
    };

    const handleOutsideClick = (event: MouseEvent): void => {
      if ((event.target as HTMLElement).closest('.hamburger-bg') === null) {
        hamburgerDiv.value = false;
      }
    };

    const handleScroll = (): void => {
      hamburgerDiv.value = false;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      navBartext,
      showMenuOptBtn,
      handleOutsideClick,
      hamburgerDiv,
      menuListProps,
    };
  },
};
</script>

<template>
  <div id="home" @click="handleOutsideClick">
    <nav class="bg-navBar desktop-nav border-gray-200 dark:bg-gray-900">
      <div class="nav-first-div font-light max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div class="logo font-semibold  self-center  text-xl whitespace-nowrap dark:text-white">{{ navBartext.fullName.toUpperCase() }}</div>
        <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            class="hamburger-bg inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
            @click.stop="showMenuOptBtn"
          >
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul
            class="nav-links flex flex-col font-light p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <a
                href="#home"
                class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                {{ navBartext.home }}
              </a>
            </li>
            <li>
              <a
                href="#about"
                class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                {{ navBartext.about }}
              </a>
            </li>
            <li>
              <a
                href="#experience"
                class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                {{ navBartext.experience }}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                {{ navBartext.projects }}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                {{ navBartext.contact }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div
      v-if="hamburgerDiv" class="hamburger-div z-50 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
      id="user-dropdown"
      :style="{ backgroundColor: menuListProps.divBg, width: menuListProps.width }"
    >
      <ul class="py-2" aria-labelledby="user-menu-button">
        <li>
          <a
            href="#about"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
          {{ navBartext.about }}
          </a>
        </li>
        <li>
          <a
            href="#experience"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
          {{ navBartext.experience }}
          </a>
        </li>
        <li>
          <a
            href="#projects"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
          {{ navBartext.projects }}
          </a>
        </li>
        <li>
          <a
            href="#contact"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
          {{ navBartext.contact }}
          </a>
        </li>
      </ul>
    </div>
    <div  :style="{ marginTop: hamburgerDiv ? menuListProps.marginTop : '', transition: menuListProps.transition }" class="profile-main-div">
    </div>
    <router-view></router-view>
  </div>
</template>

<style>

@media screen and (max-width: 431px) {
  .hamburger-div ul li a {
font-size: 1.5rem;

}

.hamburger-div ul li {
margin-bottom: 1rem;

}

}


    </style>