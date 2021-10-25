<template>
  <div>
    <footer class="footer footerBox">
      <div class="container">
        <span class="text-muted d-flex justify-content-center"
          >© 2021 Event-Buddy inc.</span
        >
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footerBox {
  /* position: absolute; */
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */

  line-height: 10px; /* Vertically center the text there */
  background-color: #d6dafa;
}

body > .container {
  padding: 60px 15px 0;
}

.footer > .container {
  padding-right: 15px;
  padding-left: 15px;
}

code {
  font-size: 80%;
}
</style>