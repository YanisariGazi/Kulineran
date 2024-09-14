<template>
  <div id="app">
    <div class="container">
      <!-- <NavbarView /> -->
      <router-view />
      <FooterView />
    </div>
  </div>
</template>

<script>
// import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView.vue";
export default {
  name: "App",
  components: {
    // NavbarView,
    FooterView
  }
};
</script>
<style>
</style>
