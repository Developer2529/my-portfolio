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
        <div class="hr"></div>
        <div class=" contact-info-div flex flex-row gap-56 justify-evenly py-8">
            <div class="flex flex-row items-center">
                <img class="contact-icon" src="../assets/img/telephone_icon.svg" alt="">
                <a class="text-white" href="tel:123-456-7890">829-670-6437</a>
            </div>
            <div class="flex flex-row items-center">
                <img class="contact-icon" src="../assets/img/email_icon.svg" alt="">
                <p><a class="text-white" href="mailto:developer2529@gmail.com">developer2529@gmail.com</a></p>


            </div>
            <div class="flex flex-row items-center  ">
                <img class="contact-icon" src="../assets/img/website_world wide web_internet_globe_network_icon.svg"
                    alt="">
                <p class="text-white">www.richar.net</p>
            </div>
        </div>
        <div class="flex flex-row gap-8 justify-center text-white mb-8">
            <ul class="footer-links flex flex-row gap-8 justify-center items-center">
                <li><a href="#about">About</a></li>
                <li><a href="#certification">Certification</a></li>
                <li><a href="#home"><img class="contact-icon" src="../assets/img/home_building_property_icon.svg"
                            alt=""></a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Project</a></li>
            </ul>
        </div>
        <footer>
            <p class=" copy-right text-center  text-slate-400">Copyright &copy; 2024 Richard Sanchez. All Rights Reserved</p>
        </footer>
    </div>
</template>

<style>
.hr {
    margin-left: 5rem;
    margin-right: 5rem;
    border-color: #ff3300;
    border-style: solid;
    border-width: 0.2px;
}



.contact-title,
.about-title,
.experience-title,
.projects-title,
.lets-work-title,
.profile-name {
    font-family: "Quicksand", sans-serif;
}

.contact-icon {
    width: 50px;
    height: 50px;
}

.footer-links li a:hover {
    color: gray;
    text-decoration: underline;
    text-underline-offset: 1rem;
    text-decoration-color: #ff3300;
}

.footer-links li {
    transition: transform 0.3s ease-in-out;
}

.footer-links li:hover {
    transform: scale(1.1);
}


/* media queries */
@media screen and (max-width: 768px) {

    .pic-together-div {

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contact-title {
        margin-bottom: 2rem;
    }


}

@media screen and (max-width: 598px) {

    .lets-work-title {
        font-size: 1.4rem;
        text-align: center;
    }

    .together {
        font-size: 2rem;

    }

    .projects-main-div {
        margin-bottom: 0rem;
    }

    .pic-together-div {
        padding-bottom: 2rem;
    }

    .contact-info-div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0rem;
    }

    #contact{
        margin-bottom: 2rem;
    }

    .footer-links{
        margin: 4rem 0 4rem 0;
        display: flex;
        gap: 1rem;
    }

    .copy-right{
        font-size: 0.8rem;
        margin-bottom: 2rem;
    }

    .footer-links li a {
        font-size: 0.9rem;
    }

    .hr{
        margin-top: 2rem;
    }
}
</style>