<template>
  <div class="food-detail">
    <NavbarView />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-transparent p-0">
              <li class="breadcrumb-item">
                <router-link class="text-dark" to="/home">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link class="text-dark" to="/foods">Foods</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Food Order</li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row">
        <div class="col md-6">
          <img
            :src="'../assets/images/' + product.gambar"
            class="img-fluid shadow"
            alt="gambar product"
          />
        </div>
        <div class="col md-6">
          <h2>{{ product.nama }}</h2>
          <hr />
          <h4>
            Harga :
            <strong>Rp. {{ product.harga }}</strong>
          </h4>
          <form class="mt-3" v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlah_pesan">Jumlah Pesanan</label>
              <input
                type="number"
                class="form-control"
                id="jumlah_pesan"
                required
                v-model="pesan.jumlah_pemesanan"
              />
            </div>
            <div class="form-group">
              <label for="keterangan">Keterangan</label>
              <textarea
                v-model="pesan.keterangan"
                class="form-control"
                id="keterangan"
                placeholder="Pedas. Nasi Setengah ..."
                rows="3"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-success float-right" @click="pemesanan">
              <b-icon-cart></b-icon-cart>Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavbarView from "@/components/NavbarView.vue";
const apiUrl = "http://127.0.0.1:8001";
export default {
  name: "FoodDetailView",
  components: {
    NavbarView
  },
  data() {
    return {
      product: {},
      pesan: {}
    };
  },
  methods: {
    showProduct(data) {
      this.product = data;
    },
    pemesanan() {
      if (!this.pesan.jumlah_pemesanan) {
        this.toast("error", "Jumlah Pesanan Harus Di Isi.");
        return;
      }
      this.pesan.product = this.product;
      axios
        .post(apiUrl + "/keranjangs", this.pesan)
        .then(response => {
          console.log(response);
          this.$router.push({ path: "/keranjang" });
          this.toast("success", "Sukses Masuk Keranjang.");
        })
        .catch(error => {
          console.log("gagal", error);
          this.toast("error", error.response.data);
        });
    },
    toast(type, massage) {
      this.$toast[type](massage, {
        type: type,
        position: "top-right",
        duration: 3000,
        dismissible: true
      });
    }
  },
  mounted() {
    axios
      .get(apiUrl + "/products/" + this.$route.params.id)
      .then(response => {
        console.log(response.data);
        this.showProduct(response.data);
      })
      .catch(error => {
        console.log("Error: " + error);
      });
  }
};
</script>

<style>
</style>