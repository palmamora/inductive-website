<script setup>
import { reactive } from 'vue';
import emailjs from '@emailjs/browser';
import { useToast } from 'vue-toastification';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

const toast = useToast();
emailjs.init({
    publicKey: ''
})

const contactForm = reactive({
    isLoading: false,
    title: 'Formulario de contacto',
    description: '',
    name: '',
    phone: '',
    email: '',
    message: ''
})


const handleSubmit = () => {
    const { name, phone, email, message } = contactForm;

    const name_ = name.trim();
    const phone_ = phone.trim();
    const email_ = email.trim();
    const message_ = message.trim();

    if (name_ == '' || phone_ == '' || email_ == '' || message_ == '') {
        toast.error("Uno o más campos no válidos", { timeout: 3000 });
        return;
    };

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email_)) {
        toast.error("Correo no válido", { timeout: 3000 })
        return;
    };

    contactForm.isLoading = true;
    emailjs.send('service_dsdp1fe', 'template_3lbp8md', {
        from_name: name_,
        to_name: 'inductive spa',
        message: `
            name: ${name_} \n
            phone: ${phone_} \n
            email: ${email_} \n
            message: ${message_}
        `
    })
        .then(res => {
            console.log(res)
            toast.success("Mensaje enviado. Pronto le contactaremos.")
        })
        .catch(err => {
            console.log(err)
            toast.error("Ha ocurrido un error. Contáctenos por otro canal.")
        })
        .finally(() => {
            contactForm.isLoading = false;
        })

}
</script>
<template>
    <section id="contact" class="bg-gradient-to-r from-slate-700 to-slate-900 p-14">
        <h1
            class="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-orange-200 to-red-700">
            Contáctanos</h1>
        <h1 class="text-center font-extrabold text-slate-300 pt-6">Nuestros canales de comunicación</h1>
        <ul class="text-slate-300 px-10 md:px-20 lg:px-64">
            <li>
                <i class="pi pi-map-marker text-lg mr-2"></i>
                <a href="mailto:inductivespa@gmail.com">{{ 'inductivespa@gmail.com' }}</a>
            </li>
            <li>
                <i class="pi pi-phone text-lg text mr-2"></i>
                <a href="tel:+56942914317">+56942914317</a>
                <a class="ml-4" href="tel:+56959374730">+56959374730</a>
            </li>
        </ul>
    </section>

    <section v-if="!contactForm.isLoading">
        <div class="bg-gradient-to-r from-slate-700 to-slate-900 p-10 text-slate-300">
            <h1
                class="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-orange-200 to-red-700">
                {{ contactForm.title }}</h1>
            <p class="text-center font-extrabold pt-6">Puedes completar el formulario o escribirnos a través de los
                distintos canales de comunicación.</p>
            <form @submit.prevent="handleSubmit" class="px-4 md:px-20 lg:px-64 text-slate-300">
                <div class="mb-4">
                    <label for="type" class="block font-bold mb-2">Nombre</label>
                    <input v-model="contactForm.name" type="text" class="border rounded w-full py-2 px-3 text-black">
                </div>
                <div class="mb-4">
                    <label for="type" class="block font-bold mb-2">Teléfono de contacto</label>
                    <input v-model="contactForm.phone" type="text" class="border rounded w-full py-2 px-3 text-black">
                </div>
                <div class="mb-4">
                    <label for="type" class="block font-bold mb-2">Correo de contacto</label>
                    <input v-model="contactForm.email" type="text" class="border rounded w-full py-2 px-3 text-black">
                </div>
                <div class="mb-4">
                    <label for="type" class="block font-bold mb-2">Mensaje</label>
                    <input v-model="contactForm.message" type="text" class="border rounded w-full py-2 px-3 text-black">
                </div>
                <div class="text-center">
                    <button
                        class="rounded-lg bg-orange-400 px-6 py-3 text-white font-extrabold hover:bg-indigo-600 hover:scale-110 duration-300"
                        type="submit">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    </section>
    <section v-else class="bg-gradient-to-r from-slate-700 to-slate-900 p-10 text-slate-300 text-center">
        <PulseLoader />
    </section>
</template>