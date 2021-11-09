<template>
  <div class="container d-flex justify-content-center">
    <div class="section">
      <h1 class="title">user is getting activated...</h1>
      <md-progress-spinner
        class="md-accent d-flex justify-content-center"
        :md-stroke="3"
        md-mode="indeterminate"
      ></md-progress-spinner>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.activateUser();
  },
  methods: {
    activateUser() {
      const { hash } = this.$route.params;
      this.$store
        .dispatch(`auth/activateUser`, hash)
        .then(() => this.$router.push("/login"))
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.md-progress-spinner {
  margin: 24px;
}
</style>