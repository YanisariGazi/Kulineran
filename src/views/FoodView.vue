<template>
  <div class="food-view">
    <NavbarView />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>
            Daftar
            <strong>Makanan</strong>
          </h2>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Search Food"
              aria-label="Search Food"
              aria-describedby="basic-addon1"
              @keyup="searchProduct"
            />
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <b-icon-search></b-icon-search>
              </span>
            </div>
          </div>
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
import axios from "axios";
import NavbarView from "@/components/NavbarView.vue";
import CardProductView from "@/components/CardProductView.vue";
const apiUrl = "http://127.0.0.1:8001";
export default {
  name: "FoodView",
  components: {
    NavbarView,
    CardProductView
  },
  data() {
    return {
      products: [],
      search: ""
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    capitalizeWords(str) {
      return str
        .split(" ")
        .map(function(word) {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(" ");
    },
    searchProduct() {
      axios
        .get(apiUrl + "/products?nama=" + this.capitalizeWords(this.search))
        .then(response => {
          console.log("Data: " + response.data);
          this.setProducts(response.data);
        })
        .catch(error => {
          console.log("Error: " + error);
        });
    }
  },
  mounted() {
    axios
      .get(apiUrl + "/products")
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

<style>
</style>