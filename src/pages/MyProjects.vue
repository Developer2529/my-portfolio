<script setup lang="ts">
import IconArrowdown from '@/components/icons/IconArrowdown.vue';
</script>
<template>
    <div class="main-div-vh">
        <div id="projects" class=" projects-main-div mb-40 ">
            <p class="browse-projects text-center mt-16 mb-4">Browse My Recent</p>
            <p class=" projects-title text-white text-center font-semibold text-5xl mb-8">Projects</p>
            <div class=" projects-div flex justify-center flex-row flex-wrap gap-8 mx-4">
                <div class="projects-details-container border-indigo-600  m">
                    <div class="projects-detail-container color-container ">
                        <div class=" flex justify-center flex-col article-container-projects">

                            <img src="../assets/img/projectImg.png" alt="Project 1" class="project-img">
                        </div>

                        <h2 class=" text-center text-3xl pb-6 text-white experience-subtitle project-title">Password Gen
                        </h2>
                        <div class="flex gap-4 justify-center text-center btn-container mb-4">
                            <button type="button" class="projects-btn"
                                onclick="window.open('https://github.com', '_blank')">
                                GitHub
                            </button>
                            <button type="button" class="projects-btn"
                                onclick="window.open('https://password-generator-cqiufczdo-developer2529s-projects.vercel.app/', '_blank')">
                                Live Demo
                            </button>
                        </div>





                    </div>
                </div>

                <div class="projects-details-container border-indigo-600  m">
                    <div class="projects-detail-container color-container ">
                        <div class=" flex justify-center flex-col article-container-projects">

                            <img src="../assets/img/projectImg.png" alt="Project 1" class="project-img">
                        </div>

                        <h2 class=" text-center text-3xl pb-6 text-white experience-subtitle project-title">Phone Book
                        </h2>
                        <div class=" flex gap-4 justify-center text-center btn-container mb-4">
                            <button type="button" class="projects-btn"
                                onclick="window.location.href='https://github.com'">GitHub</button>
                            <button type="button" class="projects-btn" onclick="window.location.href='#'">Live
                                Demo</button>
                        </div>


                    </div>
                </div>

                <div class="projects-details-container border-indigo-600  ">
                    <div class="projects-detail-container color-container ">
                        <div class=" flex justify-center flex-col article-container-projects">

                            <img src="../assets/img/projectImg.png" alt="Project 1" class="project-img">
                        </div>

                        <h2 class=" text-center text-3xl pb-6 text-white experience-subtitle project-title">Office
                            Location
                        </h2>
                        <div class=" flex gap-4 justify-center text-center btn-container mb-4">
                            <button type="button" class="projects-btn"
                                onclick="window.location.href='https://github.com'">GitHub</button>
                            <button type="button" class="projects-btn" onclick="window.location.href='#'">Live
                                Demo</button>
                        </div>


                    </div>
                </div>
                <div class="projects-details-container border-indigo-600  ">
                    <div class="projects-detail-container color-container ">
                        <div class=" flex justify-center flex-col article-container-projects">

                            <img src="../assets/img/projectImg.png" alt="Project 1" class="project-img">
                        </div>

                        <h2 class=" text-center text-3xl pb-6 text-white experience-subtitle project-title">Pensum
                            Online
                        </h2>
                        <div class=" flex gap-4 justify-center text-center btn-container mb-4">
                            <button type="button" class="projects-btn"
                                onclick="window.location.href='https://github.com'">GitHub</button>
                            <button type="button" class="projects-btn" onclick="window.location.href='#'">Live
                                Demo</button>
                        </div>


                    </div>
                </div>
                <div class="projects-details-container border-indigo-600  ">
                    <div class="projects-detail-container color-container ">
                        <div class=" flex justify-center flex-col article-container-projects">

                            <img src="../assets/img/projectImg.png" alt="Project 1" class="project-img">
                        </div>

                        <h2 class=" text-center text-3xl pb-6 text-white experience-subtitle project-title">Help Desk
                            Center
                        </h2>
                        <div class=" flex gap-4 justify-center text-center btn-container mb-4">
                            <button type="button" class="projects-btn"
                                onclick="window.location.href='https://github.com'">GitHub</button>
                            <button type="button" class="projects-btn" onclick="window.location.href='#'">Live
                                Demo</button>
                        </div>


                    </div>
                </div>
                <div class="projects-details-container border-indigo-600  ">
                    <div class="projects-detail-container color-container ">
                        <div class=" flex justify-center flex-col article-container-projects">

                            <img src="../assets/img/projectImg.png" alt="Project 1" class="project-img">
                        </div>

                        <h2 class=" text-center text-3xl pb-6 text-white experience-subtitle project-title">Project
                            Three
                        </h2>
                        <div class=" flex gap-4 justify-center text-center btn-container mb-4">
                            <button type="button" class="projects-btn"
                                onclick="window.location.href='https://github.com'">GitHub</button>
                            <button type="button" class="projects-btn" onclick="window.location.href='#'">Live
                                Demo</button>
                        </div>


                    </div>
                </div>
            </div>
            <div class="arrow-container">
                <a href="#certification" class="arrow-down">
                    <!-- <IconArrowdown /> -->
                </a>
            </div>
        </div>

    </div>
    <div class="hr"></div>
</template>


<style scoped>
.projects-main-div {
    position: relative;
    /* Importante para que .arrow-container se posicione respecto a esto */
    /* padding-bottom: 80px; */
    /* Espacio extra para que la flecha no se solape */
}

.arrow-container {
    position: absolute;
    bottom: -170px;
    left: 50%;
    transform: translateX(-50%);
}

.arrow-down {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}


.projects-btn {
    padding: 10px 15px;
    font-size: 1rem;
    background-color: white;
    color: black;
    transition: transform 0.3s ease-in-out;
    border-radius: 8px;

}

.projects-btn:hover {
    background-color: #fa200c;
    transform: scale(1.1);
    color: white;
}
</style>