<script setup lang="ts">
import IconArrowdown from '@/components/icons/IconArrowdown.vue';


</script>
<template>
    <div id="contact" class="mb-96">
        <div>
            <p class="browse-projects text-center mt-16 mb-4">Get in Touch</p>
            <p class=" contact-title text-white text-center font-semibold text-5xl mb-36">Contact Me</p>
        </div>
        <div class="flex pic-together-div pb-24 gap-8 justify-center items-end">
            <div>
                <img class="rounded-t-3xl" style="width: 200px; height: 200px;" src="../assets/img/lionCoding.png"
                    alt="">
            </div>
            <div>
                <p class="browse-projects  lets-work-title mt-16 mb-4 text-5xl">Let's work</p>
                <p class=" projects-title together text-white  font-semibold text-8xl  ">TOGETHER</p>
            </div>
        </div>
        <div class="horizontal-line"></div>
        <div class=" contact-info-div flex flex-row gap-56 justify-evenly py-8">
            <div class="flex flex-row items-center">
                <img class="contact-icon" src="../assets/img/telephone_icon.svg" alt="">
                <a class="text-white" href="tel:+1829-670-6437">829-670-6437</a>
            </div>
            <div class="flex flex-row items-center">
                <img class="contact-icon" src="../assets/img/email_icon.svg" alt="">
                <p><a class="text-white" href="mailto:developer2529@gmail.com">developer2529@gmail.com</a></p>


            </div>
            <div class="flex flex-row items-center  ">
                <img class="contact-icon" src="../assets/img/website_world wide web_internet_globe_network_icon.svg"
                    alt="">
                <p class="text-white">www.richard.net</p>
            </div>
        </div>
        <div class="footer-main-div">
            <div class="flex flex-row gap-8 justify-center text-white ">
                <ul class="footer-links flex flex-row gap-8 justify-center items-center ">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Project</a></li>
                    <li><a href="#certification">Certification</a></li>
                </ul>
            </div>
            <footer>
                <p class=" copy-right text-center  text-slate-400">Copyright &copy; 2024 Richard Sanchez. All Rights
                    Reserved</p>
            </footer>
        </div>
    </div>
</template>

