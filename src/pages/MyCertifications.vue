<script setup lang="ts">
import IconArrowdown from '@/components/icons/IconArrowdown.vue';
</script>

<template>
    <div id="certification" class="main-div-vh ">
        <div>
            <p class="takea-look text-center mb-4">Take a Look At My</p>
            <p class="certification-title text-white text-center font-semibold text-5xl pb-16">Certifications</p>
        </div>

        <div class="flex flex-row gap-8 justify-center flex-wrap h-96 certification-container pt-40">
            <img class="certification-img img1"
                src="../assets/img/jse-40-01-jse-certified-entry-level-javascript-programmer (2).png" alt="">
            <img class="certification-img img2" src="../assets/img/mta-database-fundamentals-certified-2022 (2).png"
                alt="">
            <img class="certification-img img3" src="../assets/img/frontend_certified.png" alt="">
            <img class="certification-img img4"
                src="../assets/img/microsoft-innovative-educator-expert-2021-2022 (2).png" alt="">
            <img class="certification-img img5" src="../assets/img/ccna-introduction-to-networks (2).png" alt="">
        </div>

    </div>

    <div class="hr arrow-container">
        <a href="#contact" class="arrow-down">
            <!-- <IconArrowdown /> -->
        </a>
    </div>
    <div class="hr"></div>
</template>

<style scoped>
.arrow-container {
    position: absolute;
    bottom: -3000px;
 
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
