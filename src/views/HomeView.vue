<template>
  <div class="home">
    <NavbarView />
    <div class="container">
      <HeroView />
      <div class="row mt-4">
        <div class="col-6">
          <h2>
            Best
            <strong>Food's</strong>
          </h2>
        </div>
        <div class="col-6">
          <router-link to="/foods" class="btn btn-success float-right">
            <b-icon-eye></b-icon-eye>Lihat Semua
          </router-link>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
          <CardProductView :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import HeroView from "@/components/HeroView.vue";
import CardProductView from "@/components/CardProductView.vue";
import axios from "axios";

const apiUrl = "http://127.0.0.1:8001";
export default {
  name: "HomeView",
  components: {
    NavbarView,
    HeroView,
    CardProductView
  },
  data() {
    return {
      products: []
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    }
  },
  mounted() {
    axios
      .get(apiUrl + "/best-products")
      .then(response => {
        console.log("Data: " + response.data);
        this.setProducts(response.data);
      })
      .catch(error => {
        console.log("Error: " + error);
      });
  }
};
</script>
