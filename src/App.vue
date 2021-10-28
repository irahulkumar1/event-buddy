<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/shared/NavBar.vue";
import Footer from "@/components/shared/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
  created() {
    this.$store.dispatch("auth/getAuthUser");
  },
};
</script>

<style lang="scss">
@import "assets/css/normalise.css";
@import "~bulma/bulma.sass";

routerlink {
  color: black;
}
</style>
