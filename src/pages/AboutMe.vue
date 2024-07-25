<script setup lang="ts">
import { IconEducation, IconQuality } from "../components/icons/index2"
</script>

<template>
  <div class="get-to-knowme flex flex-col items-center mt-96">
    <p id="about" class="text-white">Get to know more</p>
    <p class="text-white font-semibold text-4xl">About Me</p>
  </div>
  
  <div class="flex flex-wrap about-main-div mt-4 justify-center">
    <div class="card">
      <img src="../assets/img/lionCoding.png" alt="">
    </div>

    <div class="flex flex-wrap about-inner-div gap-4 w-full  justify-center p-3">
      <div class="column first flex flex-col text-center border-solid rounded-3xl border-indigo-600 w-full md:w-80 h-auto p-4">
        <div class="flex flex-row justify-center pt-4 pb-2"><icon-quality></icon-quality></div>
        <p class="font-semibold text-slate-300 text-xl">Experience</p>
        <p class="font-title-col">7 months</p>
        <p class="font-title-col">Frontend Development</p>
      </div>

      <div class="column second flex flex-col text-center border-solid border-2 rounded-3xl border-indigo-600 w-full md:w-80 h-auto p-4">
        <div class="flex flex-row justify-center pt-4 pb-2"><icon-education></icon-education></div>
        <p class="font-semibold text-slate-300 text-xl">Education</p>
        <p class="font-title-col">Software Developer</p>
        <p class="font-title-col">UAPA University</p>
      </div>

      <div class="column third w-full ">
        <p class="text-justify font-title-col">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus in ducimus sint earum quisquam quam maiores, nesciunt sunt iste voluptatibus eius error aliquam quae eveniet facilis ullam labore dolores nisi? Consequuntur necessitatibus quos libero eum dolores nostrum. Tenetur voluptas deserunt quas, quibusdam minima.
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.about-main-div {
  background-color: #07182E;
}

#about,
.font-title-col {
  color: rgb(144, 171, 199);
}

.card {
  width: 290px;
  height: 415px;
  margin: 1rem 0 2rem 0;
  background: #07182E;
  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
  border-color: rgb(79 70 229);
}

.card img {
  z-index: 1;
  width: 284px;
  height: 400px;
  border-radius: 1rem;
}

.card::before {
  content: '';
  position: absolute;
  width: 100px;
  background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
  height: 130%;
  animation: rotBGimg 3s linear infinite;
  transition: all 0.2s linear;
}

@keyframes rotBGimg {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.card::after {
  content: '';
  position: absolute;
  background: #07182E;
  inset: 5px;
  border-radius: 15px;
}

.card:hover:before {
  background-image: linear-gradient(180deg, rgb(81, 255, 0), purple);
  animation: rotBGimg 10s linear infinite;
}

.about-inner-div .column {
  box-sizing: border-box;
}

.column.first,
.column.second {
  width: 30%;
  transition: all ease 0.2s;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  border-width: 1px;
  margin-bottom: 1rem;
}

.column.third {
  width: 61%;
}

.column.first:hover,
.column.second:hover {
  transform: translateY(-5px);
  box-shadow: 0px 10px 20px 2px rgba(35, 23, 193, 0.823);
}

/* media queries */
@media screen and (max-width: 768px) {
  .about-inner-div {
    flex-direction: column;
    align-items: center;
  }

  .column.first,
  .column.second {
    width: 100%;
  }

  
  .column.third {
  width: auto;
}
}

@media screen and (max-width: 598px) {
  .profile-main-div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .profile-img-div {
    margin-top: 2rem;
  }

  .get-to-knowme {
    margin-top: 4rem;
  }


}
</style>
