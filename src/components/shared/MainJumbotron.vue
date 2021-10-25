<template>
  <div>
    <div class="jumbotron jumbotron-fluid container my-4">
      <div class="container mx-4" style="color: white">
        <h2 class="">Welcome to Event-Buddy</h2>
        <p>Plan your Events anytime anywhere</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    MainJumbotron: {
      required: true,
      type: Object,
    },
  },
  name: "MainJumbotron",
};
</script>

<style >
.jumbotron {
  background-image: url("https://media.istockphoto.com/photos/stage-for-live-concert-online-transmission-business-concept-for-a-picture-id1227545096?b=1&k=20&m=1227545096&s=170667a&w=0&h=uPtYntUECS0_MgLY8rfhTkN1tM8vMsmbyhGQI7Q1ITQ=");
  background-size: cover;
}
</style>