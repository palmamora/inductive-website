<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import WhatsappButton from './components/WhatsappButton.vue';
</script>
<template>
  <Navbar />
  <RouterView />
  <WhatsappButton />
</template>

<style scoped></style>
