<template>
  <div class="container d-flex justify-content-center">
    <div class="notFound d-flex align-items-center">
      <div class="">
        <h1 class="d-inline">Page Not Found 404 😑</h1>
        <div class="">
          <md-button
            class="md-dense md-raised md-primary my-4 mx-4 text-decoration-none"
            to="/"
            >back to home</md-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style lang="scss" scoped>
.notFound {
  width: 100%;
  height: 62vh;
}
</style>