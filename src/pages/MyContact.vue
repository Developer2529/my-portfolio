<script setup lang="ts">
import IconArrowup from '@/components/icons/IconArrowup.vue';

const sendMail = () => {
    console.log("Enviando correo..."); 
    // Aquí puedes agregar la lógica para enviar el correo
};
</script>

<template>
    <div id="contact" class="main-div-vh pb-24 ">
        <div>
            <p class="browse-projects text-center mb-4 text-lg  tracking-wide">Get in Touch</p>
            <p class="contact-title text-white text-center font-semibold text-5xl mb-20">Contact Me</p>
        </div>

        <div class="flex flex-wrap justify-center gap-16">
            <!-- Contact Form -->
            <section class="contact-form-container bg-gray-800 p-8 mx-8 rounded-lg shadow-lg">
                <form id="contactForm" class="flex flex-col gap-4">
                    <input type="text" id="nombre" class="input-field" placeholder="Full Name">

                    <div class="flex flex-wrap gap-4">
                        <input type="email" id="correo" class="input-field w-full md:w-1/2" placeholder="Email Address">
                        <input type="tel" id="telefono" class="input-field w-full md:w-1/2" placeholder="Phone Number">
                    </div>

                    <textarea id="mensaje" class="input-field h-40 resize-none" placeholder="Message"></textarea>

                    <button @click.prevent="sendMail" class="btn-submit">SEND MESSAGE</button>
                </form>
            </section>

            <!-- Contact Info -->
            <section class="contact-info flex flex-col gap-6 text-white">
                <div class="flex items-center gap-4">
                    <img class="contact-icon" src="../assets/img/telephone_icon.svg" alt="Phone Icon">
                    <a href="tel:+1829-670-6437">829-670-6437</a>
                </div>
                <div class="flex items-center gap-4">
                    <img class="contact-icon" src="../assets/img/email_icon.svg" alt="Email Icon">
                    <a href="mailto:developer2529@gmail.com">developer2529@gmail.com</a>
                </div>
                <div class="flex items-center gap-4">
                    <img class="contact-icon" src="../assets/img/website_world wide web_internet_globe_network_icon.svg" alt="Website Icon">
                    <p>www.richard.net</p>
                </div>
            </section>
        </div>
        
    </div>
</template>

<style>


.contact-form-container {
    width: 100%;
    max-width: 500px;
}

.input-field {
    width: 100%;
    padding: 12px;
    font-size: 1rem;
    border-radius: 8px;
    background-color: #384360;
    color: white;
    border: none;
    outline: none;
}

.btn-submit {
    padding: 12px;
    font-size: 1rem;
    background-color: #1e40af;
    color: white;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s;
}

.btn-submit:hover {
    background-color: #2563eb;
}

.contact-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.2rem;
}

.contact-icon {
    width: 24px;
    height: 24px;
}
</style>
