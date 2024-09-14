<template>
  <div class="keranjang">
    <NavbarView :updateKeranjang="keranjangs" />
    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-transparent p-0">
              <li class="breadcrumb-item">
                <router-link class="text-dark" to="/home">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link class="text-dark" to="/foods">Foods</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Kerajang</li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h2>
            Kerajang
            <strong>Saya</strong>
          </h2>
          <div class="table-responsive">
            <table class="table mt-3">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Makanan</th>
                  <th scope="col">Keterangan</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Total Harga</th>
                  <th scope="col">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(keranjang, index) in keranjangs" :key="keranjang.id">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>
                    <img
                      :src="'../assets/images/' + keranjang.product.gambar"
                      width="200px"
                      class="img-fluid shadow"
                      alt="gambar product"
                    />
                  </td>
                  <td>
                    <strong>{{ keranjang.product.nama }}</strong>
                  </td>
                  <td>{{ keranjang.keterangan || "-" }}</td>
                  <td>{{ keranjang.jumlah_pemesanan }}</td>
                  <td align="right">Rp. {{ keranjang.product.harga }}</td>
                  <td align="right">
                    <strong>Rp. {{ keranjang.product.harga * keranjang.jumlah_pemesanan }}</strong>
                  </td>
                  <td class="text-danger" align="center">
                    <b-icon-trash @click="delKeranjang(keranjang.id)" style="cursor: pointer;"></b-icon-trash>
                  </td>
                </tr>
                <tr>
                  <td colspan="6" align="right">
                    <strong>Total Harga :</strong>
                  </td>
                  <td colspan="2" align="center">
                    <strong>Rp. {{ totalHarga }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-3" v-on:submit.prevent>
            <div class="form-group">
              <label for="nama">Nama :</label>
              <input type="text" class="form-control" id="nama" required v-model="pesan.nama" />
            </div>
            <div class="form-group">
              <label for="noMeja">Nomor Meja :</label>
              <input type="text" class="form-control" id="noMeja" required v-model="pesan.noMeja" />
            </div>
            <button type="submit" class="btn btn-success float-right" @click="checkout">
              <b-icon-cart></b-icon-cart>Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import axios from "axios";
const apiUrl = "http://127.0.0.1:8001";

export default {
  name: "KeranjangView",
  components: {
    NavbarView
  },
  data() {
    return {
      keranjangs: [],
      pesan: {}
    };
  },
  methods: {
    loadData() {
      axios
        .get(apiUrl + "/keranjangs")
        .then(response => {
          console.log(response.data);
          this.setKeranjangs(response.data);
        })
        .catch(error => {
          console.log("Error: " + error);
        });
    },
    setKeranjangs(data) {
      this.keranjangs = data;
    },
    delKeranjang(id) {
      axios
        .delete(apiUrl + "/keranjangs/" + id)
        .then(response => {
          console.log(response.data);
          this.toast("success", "Sukses Hapus Pesanan.");
          this.loadData();
        })
        .catch(error => {
          console.log("Error: " + error);
        });
    },
    checkout() {
      if (!this.pesan.nama || !this.pesan.noMeja) {
        this.toast("error", "Nama / Nomor  Meja tidak boleh kosong.");
        return;
      }

      this.pesan.keranjangs = this.keranjangs;
      axios
        .post(apiUrl + "/pesanans", this.pesan)
        .then(response => {
          console.log(response);
          this.$router.push({ path: "/pesanan-saya" });
          this.toast("success", "Sukses Di Pesan.");

          this.keranjangs.map(item => {
            axios.delete(apiUrl + "/keranjangs/" + item.id).catch(error => {
              console.log("Error: " + error);
            });
          });
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
    this.loadData();
  },
  computed: {
    totalHarga() {
      return this.keranjangs.reduce((items, data) => {
        return items + data.product.harga * data.jumlah_pemesanan;
      }, 0);
    }
  }
};
</script>

<style>
</style>