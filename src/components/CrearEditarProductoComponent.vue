<template>
    <div class="crear-editar-producto">
        <div class="card">
            <h1>{{ esEditar ? 'Editar Producto' : 'Crear Producto' }}</h1>
            <form @submit.prevent="submitForm">
                <div class="form-group">
                    <label for="titulo">Título:</label>
                    <input type="text" id="titulo" v-model="producto.title" required>
                </div>
                <div class="form-group">
                    <label for="descripcion">Descripción:</label>
                    <textarea id="descripcion" v-model="producto.description" required></textarea>
                </div>
                <div class="form-group">
                    <label for="precio">Precio:</label>
                    <input type="number" id="precio" v-model="producto.price" required>
                </div>
                <div v-if="!esEditar" class="form-group">
                    <label for="categoria">Categoría ID:</label>
                    <input type="number" id="categoria" v-model="producto.categoryId" required>
                </div>
                <div v-if="!esEditar" class="form-group">
                    <label for="imagen">Imagen URL:</label>
                    <input type="url" id="imagen" v-model="producto.images[0]" required>
                </div>
                <button type="submit">{{ esEditar ? 'Guardar Cambios' : 'Crear Producto' }}</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getProductoById, postProducto, putProducto } from '../axios.js';

const route = useRoute();
const router = useRouter();
const producto = ref({
    title: '',
    description: '',
    price: null,
    categoryId: 1,
    images: ['']
});
const esEditar = ref(false);

onMounted(async () => {
    const id = parseInt(route.params.id);
    if (id !== 0) {
        esEditar.value = true;
        const response = await getProductoById(id);
        producto.value = response.data;
    }
});

const submitForm = async () => {
    const id = parseInt(route.params.id);
    if (id === 0) {
        await postProducto(producto.value);
    } else {
        await putProducto(id, {
            title: producto.value.title,
            description: producto.value.description,
            price: producto.value.price
        });
    }
    router.push('/');
};
</script>

<style scoped>
.crear-editar-producto {
    display: flex;
    justify-content: center;
    height: 75%;
    margin-top: 30px;
}

.card {
    max-width: 400px;
    width: 100%;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    font-weight: bold;
    margin-bottom: 8px;
}

input, textarea {
    width: 100%;
    padding: 8px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    width: 100%;
    padding: 10px 20px;
    font-size: 1em;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>
