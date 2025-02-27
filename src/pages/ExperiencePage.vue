<script setup lang="ts">


// const frontendSkills = [
//     { name: "HTML", level: "Experienced" },
//     { name: "CSS", level: "Experienced" },
//     { name: "JavaScript", level: "Intermediate" },
//     { name: "TypeScript", level: "Basic" },
//     { name: "Vue JS", level: "Basic" },
//     { name: "Tailwind", level: "Basic" }
// ];
const frontendSkills = [
    { name: "HTML", level: "" },
    { name: "CSS", level: "" },
    { name: "JavaScript", level: "" },
    { name: "TypeScript", level: "" },
    { name: "Vue JS", level: "" },
    { name: "Tailwind", level: "" }
];

const backendSkills = [
    { name: "Git", level: "Basic" },
    { name: "SQL Server", level: "Intermediate" }
];

</script>

<template>
    <div>
        <section id="experience" class="main-div-vh">
            <p class="section-text-1 text-center explore-experience">Explore My</p>
            <h1 class="title experience-title text-center text-white font-semibold text-5xl pb-8">Experience</h1>
            <div class="backend-frontend-div flex flex-row justify-center gap-8">
                <!-- Frontend Experience -->
                <div class="experience-details-container border-indigo-600 border-solid rounded-3xl p-6 pb-12">
                    <div class="about-containers">
                        <div class="details-containers">
                            <h2 class="experience-subtitle about-title text-center text-white text-2xl pb-10 pt-4">
                                Frontend Development
                            </h2>
                            <div class="article-container">
                                <article v-for="(skill, index) in frontendSkills" :key="index">
                                    <IconCertified class="certified-icon" />
                                    <div class="flex flex-col">
                                        <h3 class="text-white">{{ skill.name }}</h3>
                                        <!-- <p class="text-white">{{ skill.level }}</p> -->
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Backend Experience -->
                <div class="experience-details-container border-indigo-600 border-solid rounded-3xl p-6 pb-12">
                    <div class="about-containers">
                        <div class="details-containers">
                            <h2 class="experience-subtitle about-title text-center text-white text-2xl pb-10 pt-4">
                                Backend Development
                            </h2>
                            <div class="article-container">
                                <article v-for="(skill, index) in backendSkills" :key="index">
                                    <IconCertified />
                                    <div class="flex flex-col">
                                        <h3 class="text-white">{{ skill.name }}</h3>
                                        <!-- <p class="text-white">{{ skill.level }}</p> -->
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="hr arrow-container">
            <a href="#projects" class="arrow-down">
                <!-- <IconArrowdown /> -->
            </a>
        </div>
        <div class="hr"></div>
    </div>
</template>

<style scoped>
.arrow-container {
    position: absolute;
    bottom: -1500px;
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
</style>
