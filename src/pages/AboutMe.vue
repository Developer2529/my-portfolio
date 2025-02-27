<script setup lang="ts">
import { IconQuality } from "../components/icons/index2";
</script>

<template>
  <div class="aboutme main-div-vh" >
    <div class="get-to-knowme flex flex-col items-center ">
      <p id="about" class="mb-4">Get to know more</p>
      <p class="about-title text-white font-semibold text-5xl">About Me</p>
    </div>

    <div class="flex flex-row items-center justify-center gap-6 px-16 about-inner-div about-main-div">
      <div class="card">
        <img src="../assets/img/lionCoding.png" alt="">
      </div>

      <div class="w-full flex flex-wrap about-inner-div flex-row about-main-div mt-4">
        <div>
          <div class="flex flex-row gap-4 w-full about-inner-div">
            <div
              class="column first flex flex-col text-center border-solid rounded-3xl border-indigo-600 w-full md:w-80 h-auto p-4">
              <div class="flex flex-row justify-center pt-4 pb-2">
                <IconQuality />
              </div>
              <p class="font-semibold about-title text-slate-300 text-xl">Experience</p>
              <p class="font-title-col">1 year</p>
              <p class="font-title-col">Frontend Development</p>
            </div>

            <div
              class="column first flex flex-col text-center border-solid rounded-3xl border-indigo-600 w-full md:w-80 h-auto p-4">
              <div class="flex flex-row justify-center pt-4 pb-2">
                <IconQuality />
              </div>
              <p class="font-semibold about-title text-slate-300 text-xl">Education</p>
              <p class="font-title-col">In the process of</p>
              <p class="font-title-col">Software Engineering Degree</p>
            </div>
          </div>

          <div class="column third">
            <p class="text-justify font-title-col">
                            I'm a Software Developer with 1 year of experience in Frontend
              Development. I specialize in Javascript, HTML and CSS, creating
              responsive and user-friendly interfaces,  dynamic web applications. I'm also
              expanding my expertise in TypeScript, Vue.js, and UX/UI design. On the
              backend, I use Git for version control and have intermediate experience
              with SQL Server. Currently, I'm pursuing a Software Development degree
              at UAPA University, set to graduate in less than two years.
            </p>
            <div class="hr"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="hr arrow-container">
      <a href="#experience" class="arrow-down">
        <!-- <IconArrowdown /> -->
      </a>
    </div>
  </div>
</template>

<style scoped>
.arrow-container {
  position: absolute;
  bottom: -770px;
 
  left: 50%;
  transform: translateX(-50%);
}

.arrow-down {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.arrow-container a {

display: flex;
justify-content: first end;
align-items: center;

}
</style>