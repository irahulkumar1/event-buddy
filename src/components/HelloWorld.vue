<template>
  <div class="container">
    <h1>hi</h1>
    <md-field>
      <label for="first-name">First Name</label>
      <md-input name="first-name" id="first-name" :disabled="sending" />
    </md-field>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style  scoped>
.card-expansion {
  height: 480px;
}

.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>