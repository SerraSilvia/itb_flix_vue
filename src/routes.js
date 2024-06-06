import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import DetalleProductoComponent from "./components/DetalleProductoComponent.vue";
import CrearEditarProductoComponent from "./components/CrearEditarProductoComponent.vue";

const routes = [
    { path: '/', component: HomeComponent },
    { path: '/detalle/:id', component: DetalleProductoComponent },
    { path: '/crear-editar/:id', component: CrearEditarProductoComponent }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});