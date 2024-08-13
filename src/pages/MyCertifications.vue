
<template>
    <div id="certification">
        <div>
            <p class=" takea-look text-center mb-4">Take a Look At My</p>
            <p class=" certification-title text-white text-center font-semibold text-5xl pb-16">Certifications</p>
        </div>
        <div class="flex flex-row gap-8 justify-center flex-wrap h-96 certification-container pt-40">
            <div>
                <img class="certification-img img1" src="../assets/img/jse-40-01-jse-certified-entry-level-javascript-programmer (2).png" alt="">
            </div>
            <div>
                <img  class="certification-img img2" src="../assets/img/mta-database-fundamentals-certified-2022 (2).png" alt="">
            </div>
            <div>
                <img class="certification-img img3" src="../assets/img/frontend_certified.png" alt="">
            </div>
            <div>
                <img class="certification-img img4" src="../assets/img/microsoft-innovative-educator-expert-2021-2022 (2).png" alt="">
            </div>
            <div>
                <img class="certification-img img5" src="../assets/img/ccna-introduction-to-networks (2).png" alt="">
            </div>
     

        </div>
        <div class="hr mb-8 mt-8"></div>
    </div>
</template>


<style>


.takea-look {
    color: rgb(144, 171, 199);
}

.certification-img {
    width: 150px;
    height: 150px;
    animation: moveUpDown 6s ease-in-out infinite alternate;
}

/* Add delay for each image to move independently */
.img1 {
    animation-delay: 10s;
}

.img2 {
    animation-delay: 8s;
}

.img3 {
    animation-delay: 3s;
}

.img4 {
    animation-delay: 6s;
}

.img5 {
    animation-delay: 4s;
}

@keyframes moveUpDown {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-60px);
    }
}

.certification-container:hover .certification-img {
    animation-play-state: paused;
}
@media screen and (max-width: 598px) {
    .certification-title {
        padding-bottom: 0rem;
    }


    .certification-container{
        height: auto;
        padding-top: 4rem;
    }
}

@media screen and (min-width: 768px) {

}
</style>