<template>
  <div>
    <b-navbar toggleable="sm" type="light">
      <b-navbar-brand href="/home">Kulineran</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/foods">Food's</router-link>
          </li>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/keranjang">
              keranjang
              <b-icon-bag></b-icon-bag>
              <span
                class="badge badge-success ml-2"
              >{{ updateKeranjang ? updateKeranjang.length : jumlah_pesanans.length }}</span>
            </router-link>
          </li>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import axios from "axios";
const apiUrl = "http://127.0.0.1:8001";
export default {
  name: "NavbarView",
  data() {
    return {
      jumlah_pesanans: []
    };
  },
  props: ["updateKeranjang"],
  methods: {
    setJumlah(data) {
      this.jumlah_pesanans = data;
    }
  },
  mounted() {
    axios
      .get(apiUrl + "/keranjangs")
      .then(response => {
        console.log("Data: " + response.data);
        this.setJumlah(response.data);
      })
      .catch(error => {
        console.log("Error: " + error);
      });
  }
};
</script>

<style></style>