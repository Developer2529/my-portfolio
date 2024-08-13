<script setup lang="ts">

import { IconCertified, IconArrowdown } from '@/components/icons/index2';

</script>

<template>
    <div>

        <section id="experience">
            <p class="section-text-1 text-center explore-experience mt-40 mb-4">Explore My</p>
            <h1 class="title experience-title text-center text-white font-semibold text-5xl pb-8">Experience</h1>
            <div class=" backend-frontend-div flex flex-row justify-center gap-8 ">


                <div class="experience-details-container border-indigo-600  border-solid rounded-3xl p-6 pb-12">
                    <div class="about-cotainers">
                        <div class="details-containers">
                            <h2 class="experience-subtitle about-title text-center  text-white text-2xl pb-10 pt-4">Frontend
                                Developement</h2>
                            <div class="article-container">
                                <article>
                                    <icon-certified class="certified-icon"></icon-certified>
                                    <div class="flex flex-col">
                                        <h3 class="text-white">HTML</h3>
                                        <p class="text-white">Experienced</p>
                                    </div>
                                </article>
                                <article>
                                    <icon-certified></icon-certified>
                                    <div class="flex flex-col">
                                        <h3 class="text-white">CSS</h3>
                                        <p class="text-white">Experienced</p>
                                    </div>
                                </article>
                                <article>
                                    <icon-certified></icon-certified>
                                    <div class="flex flex-col">
                                        <h3 class="text-white">JavaScript</h3>
                                        <p class="text-white">Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <icon-certified></icon-certified>
                                    <div class="flex flex-col">
                                        <h3 class="text-white">TypeScript</h3>
                                        <p class="text-white">Basic</p>
                                    </div>
                                </article>
                                <article>
                                    <icon-certified></icon-certified>
                                    <div class="flex flex-col">
                                        <h3 class="text-white">Vue JS</h3>
                                        <p class="text-white">Basic</p>
                                    </div>
                                </article>
                                <article>
                                    <icon-certified></icon-certified>
                                    <div class="flex flex-col">
                                        <h3 class="text-white">Tailwind</h3>
                                        <p class="text-white">Basic</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
               
                <!-- here -->

                <div class="experience-details-container border-indigo-600  border-solid rounded-3xl p-6 pb-12">
                    <div class="about-cotainers">
                        <div class="details-containers">
                            <h2 class="experience-subtitle about-title  text-center  text-white text-2xl pb-10 pt-4">Backend
                                Developement</h2>
                            <div class="article-container">
                                <article>
                                    <icon-certified></icon-certified>
                                    <div class="flex flex-col">
                                        <h3 class="text-white">Git</h3>
                                        <p class="text-white">Basic</p>
                                    </div>
                                </article>
                                <article>
                                    <icon-certified></icon-certified>
                                    <div class="flex flex-col">
                                        <h3 class="text-white">SQL Server</h3>
                                        <p class="text-white">Intermediate</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </section>
        <div class="hr mb-8"></div>
    </div>
    
</template>

<style>
.arrow-down-posi {
    position: absolute;
}

.arrow-down-about {
  position: sticky;
  bottom: -10px;
  right: 20px;
  animation: moveArrow 3s ease-in-out infinite;
  /* rotate: 180deg; */
}

/* Define keyframes for infinite rotation */
@keyframes rotate-infinite {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}


.certified-icon:hover {
    animation: rotate-infinite 2s linear infinite;
}



.article-container div p {
    color: rgb(144, 171, 199);
}

.experience-details-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    transition: all ease 0.2s;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    border-width: 1px;
    width: 500px;
    height: auto;


}

.article-container {
    display: flex;
    text-align: initial;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 4rem;
    justify-content: space-around;
}

article {
    display: flex;
    width: 10rem;
    /* justify-content: space-around; */
    gap: 1rem;
}


.main-div-exp {
    height: 600px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.explore-experience {

    color: rgb(144, 171, 199);
}


/* media queries */
@media screen and (max-width: 768px) {
    .backend-frontend-div {
        flex-direction: column;
        align-items: center;
        padding: 3rem;
        margin: 0rem;
    }

    .title {
        padding-bottom: 0rem;
    }

    .article-div {
        display: flex;
        flex-direction: column;
        height: 100%;
        align-items: start;

    }
    
    .explore-experience {
     margin-top: -15rem;
    }
    .experience-details-container {
        width: auto;
    }

}

@media screen and (max-width: 1224px) {
    #experience {
        margin-top: 0rem
    }

}

@media screen and (max-width: 1050) {
    .backend-frontend-div  {
        margin: 0 2rem 0 2rem;
    }

}

.experience-front-div {
    box-sizing: border-box;
    transition: all ease 0.2s;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    border-width: 1px;
    margin-bottom: 1rem;
}

.experience-details-container:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px 2px rgba(35, 23, 193, 0.823);
}
</style>