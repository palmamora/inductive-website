<script setup>
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
    <section id="about-us" class="bg-gradient-to-r from-slate-700 to-slate-900 p-10">
        <h1 class="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-orange-200 to-red-700">Nuestro equipo</h1>
        <div class="flex flex-row flex-wrap pt-10 justify-center">
            <v-card v-for="member in teamMembers" :title="member.name" :subtitle="member.role" class="mx-10 my-4 w-80">
            </v-card>
        </div>
    </section>
</template>