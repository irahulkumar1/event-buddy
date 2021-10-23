<template>
  <div id="app">
    <NavBar />
    <MainJumbotron />
    <HomePage />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import NavBar from "@/components/shared/NavBar.vue";
import MainJumbotron from "@/components/shared/MainJumbotron.vue";
import HomePage from "@/pages/HomePage.vue";
// import Footer from "@/components/shared/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    MainJumbotron,
    HomePage,
    // Footer,
  },
};
</script>

<style>
</style>
