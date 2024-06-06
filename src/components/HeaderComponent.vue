<template>
  <header>
    <img class="headerImg" src="../assets/itbflix.png" alt="itbflix" />
  </header>
</template>
<script setup>
</script>
<style scoped>
/*Colocamos la imagen y alineamos */
.headerImg {
  width: 30%;
  height: 200px;
  text-align: center;
}
header {
  text-align: center;
  background-color: rgb(224, 60, 49);
}

/*Ponemos color de fondo al nav*/
.headerNav {
  background-color: rgb(224, 60, 49);
  padding: 5px;
}
/*Colocamos en orden horizontal la lista y la ponemos bonita*/
ul {
  font-size: 25px;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
}
</style>
