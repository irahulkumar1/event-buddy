<template>
  <div>
    <section class="hero">
      <div class="hero-body jumbotron">
        <div class="container">
          <h1 class="title text">Welcome To Event-buddy</h1>
          <h2 class="subtitle text">plan your event any where anytime</h2>
          <article class="media v-center">
            <figure class="media-left"></figure>
            <div class="media-content"></div>
          </article>
        </div>
        <div class="is-pulled-right">
          <!-- We will handle this later (: -->
          <md-button class="md-dense md-raised md-accent"
            >Leave Group</md-button
          >
        </div>
      </div>
    </section>
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
.text {
  color: white;
}
</style>