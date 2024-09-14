<template>
  <div class="card shadow card-product">
    <img :src="'../assets/images/' + product.gambar" class="card-img-top" alt="gambar makanan" />
    <div class="card-body">
      <h5 class="card-title">{{ product.nama }}</h5>
      <p class="card-text">Harga : {{ product.harga }}</p>
      <router-link :to="'/foods/'+product.id" class="btn btn-outline-success">
        <b-icon-cart></b-icon-cart>Pesan
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProductView",
  props: ["product"]
};
</script>

<style>
</style>