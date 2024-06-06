<template>
    <div>
        <h1>Lista de productos</h1>
        <router-link :to="{ path: '/crear-editar/0' }">
            <button class="crear-producto-btn">Crear Producto</button>
        </router-link>
        <div v-if="productos && productos.length" class="productos-grid">
            <div v-for="(producto, index) in productos" :key="index">
                <ProductoComponent :producto="producto"></ProductoComponent>
            </div>
        </div>
        <div v-else>
            <p>Cargando...</p>
        </div>
    </div>
</template>

<script setup>
import ProductoComponent from "./ProductoComponent.vue";
import { ref, onMounted } from "vue";
import { getProductos } from "../axios.js";

let productos = ref(null);

onMounted(async () => {
    const response = await getProductos();
    productos.value = response.data;
})
</script>

<style scoped>
.productos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  padding: 16px;
}

@media (max-width: 600px) {
  .productos-grid {
    grid-template-columns: 1fr;
  }
}

h1 {
  text-align: center;
  margin-bottom: 24px;
}

.producto {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.producto h2 {
  font-size: 1.5em;
  margin-bottom: 8px;
}

.producto p {
  margin: 8px 0;
}

.producto-imagen {
  max-width: 100%;
  height: auto;
  margin: 16px 0;
}
</style>