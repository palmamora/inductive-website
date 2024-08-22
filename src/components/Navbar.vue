<script setup>
import { RouterLink, useRoute } from 'vue-router';
import logo from '@/assets/inductive.png'
const isActiveLink = (routePath) => {
    const route = useRoute();
    return route.fullPath === routePath
}

const routes = [
    { label: 'Inicio', path: '/' },
    { label: 'Nosotros', path: '/about-us' },
    { label: 'Soluciones', path: '/solutions' },
    { label: 'Contacto', path: '/contact' }
]
</script>

<template>
    <nav class="bg-gradient-to-r from-slate-700 to-slate-900">
        <div class="mx-auto">
            <div class="flex flex-1 items-center justify-center">
                <RouterLink class="ml-4" to="/">
                    <img :src="logo" alt="" class="h-14">
                </RouterLink>
                <div class="md:ml-auto"></div>
                <RouterLink v-for="route in routes" :to="route.path"
                    :class="['text-white', 'px-3', 'py-1', 'mx-3', 'rounded-md', isActiveLink(route.path) ? 'bg-slate-800' : '', 'hover:bg-white-500']">
                    {{ route.label }}</RouterLink>
            </div>
        </div>
    </nav>
</template>