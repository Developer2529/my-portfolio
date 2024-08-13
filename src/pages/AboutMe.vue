<script setup lang="ts">
import { IconEducation, IconQuality, IconArrowdown, IconArrowup } from "../components/icons/index2"
</script>

<template>
  <div>
    <div class="get-to-knowme flex flex-col items-center mt-40">
      <p id="about" class=" mb-4">Get to know more</p>
      <p class=" about-title text-white font-semibold text-5xl">About Me</p>
    </div>

    <div class="flex flex-wrap flex-row about-main-div mt-4 justify-center">
      <div class="card">
        <img src="../assets/img/lionCoding.png" alt="">
      </div>

      <div class="flex flex-wrap about-inner-div gap-4 w-full  justify-center p-12">
        <div
          class="column first flex flex-col text-center border-solid rounded-3xl border-indigo-600 w-full md:w-80 h-auto p-4">
          <div class="flex flex-row justify-center pt-4 pb-2"><icon-quality></icon-quality></div>
          <p class="font-semibold about-title  text-slate-300 text-xl">Experience</p>
          <p class="font-title-col">1 year</p>
          <p class="font-title-col">Frontend Development</p>
        </div>

        <div
          class="column second flex flex-col text-center border-solid border-2 rounded-3xl border-indigo-600 w-full md:w-80 h-auto p-4">
          <div class="flex flex-row justify-center pt-4 pb-2"><icon-education></icon-education></div>
          <p class="font-semibold about-title text-slate-300 text-xl">Education</p>
          <p class="font-title-col">Software Developer</p>
          <p class="font-title-col">UAPA University</p>
        </div>

        <div class="column third w-full ">
          <p class="text-justify font-title-col">
            I am a dedicated Software Developer with 1 year of hands-on experience in Frontend Development. My expertise includes HTML and CSS, where I have gained substantial experience in creating responsive and user-friendly web interfaces. I also have intermediate proficiency in JavaScript, allowing me to develop interactive and dynamic web applications. Additionally, I am expanding my knowledge with basic skills in TypeScript, Vue JS, and UX/UI design, ensuring that I stay current with modern development practices. On the backend, I am familiar with Git for version control and have intermediate experience with SQL Server for managing and querying databases. I am currently pursuing my degree in Software Development at UAPA University, with plans to graduate in less than 2 years, which has provided me with a solid foundation to continue growing in this field.
          </p>
          <div class="hr"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.arrow-down {
  animation: moveArrow 3s ease-in-out infinite;

}

.arrow-up {
  position: fixed;
  bottom: 380px;
  left: 10px;
  animation: moveArrow 3s ease-in-out infinite;

}
.arrow-down-about{
  position: absolute;

}



@keyframes moveArrow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}


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

.details-div {
  transition: all ease 0.2s;
  box-shadow: 0px 5px 10px 0px rgba(82, 76, 76, 0.5);
  border-width: 1px;
  margin-bottom: 1rem;
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
    margin-bottom: 15rem;
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

  .card{
    margin: 0;
  }


}
</style>