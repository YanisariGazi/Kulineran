<template>
  <div class="row mt-5">
    <div class="col-md-6 order-2 order-md-1">
      <div class="d-flex h-100">
        <div class="justify-content-center align-self-center">
          <h2>
            <strong>Delecious Food Menu,</strong>
            <br />in your Gadget.
          </h2>
          <p>Ayo segera pilih makanan favorit Anda</p>
          <router-link class="btn btn-lg btn-success" to="/pesan">
            <b-icon-arrow-right-short></b-icon-arrow-right-short>Pesan
          </router-link>
        </div>
      </div>
    </div>
    <div class="col-md-6 order-1 order-md-2 mb-3">
      <img src="../assets/image/hero.png" width="100%" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroView"
};
</script>

<style>
</style>