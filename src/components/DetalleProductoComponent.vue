<template>
    <div class="detalle-producto">
        <h1>Detalles del Producto</h1>
        <div v-if="producto" class="producto-contenedor">
            <img :src="producto.images[0]" alt="Imagen del producto" class="producto-imagen">
            <div class="producto-detalles">
                <h2>{{ producto.title }}</h2>
                <p><strong>Precio:</strong> ${{ producto.price }}</p>
                <p><strong>Categoría:</strong> {{ producto.category.name }}</p>
                <p>{{ producto.description }}</p>
                <button @click="irACrearEditarProducto">Editar Producto</button>
            </div>
        </div>
        <div v-else>
            <p>Cargando...</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getProductoById } from '../axios.js';

const route = useRoute();
const router = useRouter();
const producto = ref(null);

onMounted(async () => {
    const id = route.params.id;
    const response = await getProductoById(id);
    producto.value = response.data;
});

const irACrearEditarProducto = () => {
    const id = route.params.id;
    router.push(`/crear-editar/${id}`);
};
</script>

<style scoped>
.detalle-producto {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 0 auto;
}

.producto-contenedor {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 100%;
}

.producto-imagen {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.producto-detalles {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 100%;
}

.producto-detalles h2 {
    font-size: 2em;
    margin-bottom: 8px;
}

.producto-detalles p {
    margin: 8px 0;
}

@media (min-width: 768px) {
    .producto-contenedor {
        flex-direction: row;
        align-items: flex-start;
    }

    .producto-imagen {
        width: 50%;
    }

    .producto-detalles {
        width: 50%;
        padding-left: 16px;
    }
}
</style>
