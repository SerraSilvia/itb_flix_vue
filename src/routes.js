import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import RankingComponent from "./components/RankingComponent.vue";
import AltaComponent from "./components/AltaComponent.vue";
import EncuestaComponent from "./components/EncuestaComponent.vue";
import ContactoComponent from "./components/ContactoComponent.vue";

const routes = [
    { path: '/', component: HomeComponent },
    { path: '/ranking', component: RankingComponent },
    { path: '/register', component: AltaComponent },
    { path: '/survey', component: EncuestaComponent },
    { path: '/contact', component: ContactoComponent }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});