<template>
  <div class="pesanan-saya">
    <NavbarView />
    <div class="container">
        <div class="row justify-content-center mt-4">
            <div class="col text-center">
                <img src="../assets/image/menunggu.png" width="500px" alt="">
                <h2><strong>Sukses!!</strong></h2>
                <h4>Pesanan Anda Segera Di Peroses, <strong>Harap Tunggu</strong>.</h4>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import NavbarView from '../components/NavbarView.vue'
export default {
    name:"PesananSayaView",
    components: {
        NavbarView
    }
}
</script>

<style>

</style>