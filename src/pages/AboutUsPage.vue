<script setup>
import Navbar from '@/components/Navbar.vue';

const teamMembers = [
    {
        name: 'Manuel Leonardo Palma',
        role: 'Director, Cofundador',
        description: ''
    },
    {
        name: 'Luis Fabián Bahamondes',
        role: 'Gerente de Ventas',
        description: ''
    },
    {
        name: 'Manuel Eduardo Palma',
        role: 'Encargado de Desarrollo',
        description: ''
    }
]
</script>
<template>
    <section class="bg-slate-900 p-20">
        <h1 class="text-center text-4xl font-extrabold text-white">Nuestro equipo</h1>
    </section>

    <section>
        <div class="flex flex-row flex-wrap bg-slate-400 p-10 justify-center">
            <v-card v-for="member in teamMembers" :title="member.name" :subtitle="member.role" class="mx-10 my-4 w-80">
            </v-card>
        </div>
    </section>
</template>