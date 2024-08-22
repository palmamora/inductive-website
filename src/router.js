import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutUsPage from "./pages/AboutUsPage.vue";
import SolutionsPage from "./pages/SolutionsPage.vue";
import ContactPage from "./pages/ContactPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: AboutUsPage
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactPage
        },
        {
            path: '/solutions',
            name: 'solutions',
            component: SolutionsPage
        }
    ]
});

export default router;