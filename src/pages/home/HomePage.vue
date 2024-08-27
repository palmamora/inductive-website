<script setup>
import AboutUsSection from './AboutUsSection.vue';
import ContactSection from './ContactSection.vue';

</script>
<template>
    <section id="home" class="video-container">
        <video autoplay muted loop>
            <source src="@/assets/videos/1992-153555258_small.mp4" type="video/mp4" />
        </video>
        <div class="caption bg-gradient-to-r from-transparent to-slate-700 p-20">
            <h1 class="text-center text-4xl font-extrabold text-white mt-20">Optimiza tu negocio. Soluciones a
                medida.
            </h1>
            <p class="mt-6 text-lg text-white text-center mb-20">Soluciones informáticas que se adaptan a tu
                negocio. ¿Una idea en mente? Contáctanos.</p>
            <div class="flex flex-row justify-center">
                <a :href="'#contact'"
                    class="rounded-lg bg-orange-400 px-6 py-3 text-white font-extrabold hover:bg-indigo-600 hover:scale-110 duration-300">
                    Contactar</a>
            </div>
        </div>
    </section>

    <ContactSection></ContactSection>
    <AboutUsSection></AboutUsSection>


</template>

<style scoped>
.video-container {
    height: auto;
    width: 100%;
    position: relative;
}

.video-container video {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    z-index: 0;
}

/* Just styling the content of the div, the *magic* in the previous rules */
.video-container .caption {
    z-index: 1;
    position: relative;
    text-align: center;
}
</style>