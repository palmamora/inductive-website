<script setup>
import Navbar from '@/components/Navbar.vue';
import { reactive } from 'vue';
const contactForm = reactive({
    title: 'Formulario de contacto',
    description: '',
    name: ''
})

const handleSubmit = () => { }
</script>
<template>
    <section>
        <div class="bg-slate-900 p-20">
            <h1 class="text-center text-4xl font-extrabold text-white">Contáctanos</h1>
        </div>
    </section>
    <section>
        <div class="bg-slate-400 p-10">
            <h1 class="text-center text-xl font-extrabold text-gray-800">Canales de comunicación</h1>
            <ul class="text-orange-700 px-10 md:px-20 lg:px-64">
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
        </div>
    </section>
    <section>
        <div class="bg-slate-300 p-10">
            <h1 class="text-center text-xl font-extrabold text-gray-800">{{ contactForm.title }}</h1>
            <p class="text-center text-gray-900">Puedes completar el formulario o escribirnos a través de los
                distintos canales de comunicación.</p>
            <form @submit.prevent="handleSubmit" class="px-10 md:px-20 lg:px-64">
                <div class="mb-4">
                    <label for="type" class="block text-gray-700 font-bold mb-2">Nombre</label>
                    <input v-model="contactForm.name" type="text" class="border rounded w-full py-2 px-3">
                </div>
                <div class="mb-4">
                    <label for="type" class="block text-gray-700 font-bold mb-2">Teléfono de contacto</label>
                    <input v-model="contactForm.name" type="text" class="border rounded w-full py-2 px-3">
                </div>
                <div class="mb-4">
                    <label for="type" class="block text-gray-700 font-bold mb-2">Correo de contacto</label>
                    <input v-model="contactForm.name" type="text" class="border rounded w-full py-2 px-3">
                </div>
                <div class="mb-4">
                    <label for="type" class="block text-gray-700 font-bold mb-2">Mensaje</label>
                    <input v-model="contactForm.name" type="text" class="border rounded w-full py-2 px-3">
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
</template>