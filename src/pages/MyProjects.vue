<script setup lang="ts">
// import IconArrowdown from '@/components/icons/IconArrowdown.vue';
</script>
<template>
    <div id="projects" class="mb-40">
        <p class="browse-projects text-center mt-16 mb-4">Browse My Recent</p>
        <p class=" projects-title text-white text-center font-semibold text-5xl mb-8">Projects</p>
        <div class=" projects-div flex justify-center flex-row gap-8">
            <div class="projects-details-container border-indigo-600  m">
                <div class="projects-detail-container color-container ">
                    <div class=" flex justify-center flex-col article-container-projects">

                        <img src="../assets/img/projectImg.png" alt="Project 1" class="project-img">
                    </div>

                    <h2 class=" text-center text-3xl pb-6 text-white experience-subtitle project-title">Project One</h2>
                    <div class=" flex gap-4 justify-center text-center btn-container mb-4">
                        <button type="button"
                            class="contact-info-btn py-2.5 px-5 me-2 mb-2 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-white focus:z-10 focus:ring-4 focus:ring-indigo-700 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            onclick="location.href='https://github.com'">Gito hubo</button>
                        <button type="button"
                            class="contact-info-btn py-2.5 px-5 me-2 mb-2 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-white focus:z-10 focus:ring-4 focus:ring-indigo-700 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Live
                            Demo</button>
                    </div>

                    
                </div>
            </div>

            <div class="projects-details-container border-indigo-600  m">
                <div class="projects-detail-container color-container ">
                    <div class=" flex justify-center flex-col article-container-projects">

                        <img src="../assets/img/projectImg.png" alt="Project 1" class="project-img">
                    </div>

                    <h2 class=" text-center text-3xl pb-6 text-white experience-subtitle project-title">Project Two</h2>
                    <div class=" flex gap-4 justify-center text-center btn-container mb-4">
                        <button type="button"
                            class="contact-info-btn py-2.5 px-5 me-2 mb-2 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-white focus:z-10 focus:ring-4 focus:ring-indigo-700 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            onclick="location.href='https://github.com'">Gito hubo</button>
                        <button type="button"
                            class="contact-info-btn py-2.5 px-5 me-2 mb-2 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-white focus:z-10 focus:ring-4 focus:ring-indigo-700 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Live
                            Demo</button>
                    </div>

                    
                </div>
            </div>

            <div class="projects-details-container border-indigo-600  m">
                <div class="projects-detail-container color-container ">
                    <div class=" flex justify-center flex-col article-container-projects">

                        <img src="../assets/img/projectImg.png" alt="Project 1" class="project-img">
                    </div>

                    <h2 class=" text-center text-3xl pb-6 text-white experience-subtitle project-title">Project Three</h2>
                    <div class=" flex gap-4 justify-center text-center btn-container mb-4">
                        <button type="button"
                            class="contact-info-btn py-2.5 px-5 me-2 mb-2 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-white focus:z-10 focus:ring-4 focus:ring-indigo-700 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            onclick="location.href='https://github.com'">Gito hubo</button>
                        <button type="button"
                            class="contact-info-btn py-2.5 px-5 me-2 mb-2 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-white focus:z-10 focus:ring-4 focus:ring-indigo-700 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Live
                            Demo</button>
                    </div>

                    
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.browse-projects {
    color: rgb(144, 171, 199);
}

.project-img {
    width: 250px;
    height: 250px;
    margin: 2rem;
    border-radius: 2rem;
}

.projects-details-container {

    display: flex;
    justify-content: center;
    /* flex-direction: column; */
    transition: all ease 0.2s;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    border-width: 1px;
    width: 350px;
    height: auto;
    border-radius: 2rem;
}

.projects-details-container:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px 2px rgba(35, 23, 193, 0.823);
}

@media screen and (max-width: 768px) {
    .projects-div {
        flex-direction: column;
        align-items: center;
        padding: 3rem;
        margin: 0rem;
    }
    .projects-title {
        margin-bottom: 0rem;
    }

    .browse-projects{
        margin: 0rem;
    }
}
</style>
