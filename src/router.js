import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/home/HomePage.vue";
import SolutionsPage from "./pages/solutions/SolutionsPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/solutions',
            name: 'solutions',
            component: SolutionsPage
        }
    ]
});

export default router;