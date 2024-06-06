<template>
  <div class="producto" @click="irADetalleProducto">
    <h2>{{ producto.title }}</h2>
    <p><strong>Precio:</strong> ${{ producto.price }}</p>
    <img
      :src="producto.images[0]"
      alt="Imagen del producto"
      class="producto-imagen"
    />
    <p><strong>Categoría:</strong> {{ producto.category.name }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  producto: {
    type: Object,
    required: true,
  },
});

const router = useRouter();

const irADetalleProducto = () => {
  router.push(`/detalle/${props.producto.id}`);
};
</script>

<style scoped>
.producto {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  cursor: pointer;
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
