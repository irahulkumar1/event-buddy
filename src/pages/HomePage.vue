<template>
  <div class="container">
    <MainJumbotron />
    <div class="container my-4 FeautedEvent-box">
      <div>
        <h1 class="d-inline">Featured Events in "Location"</h1>
        <div class="d-inline float-right">
          <md-button class="md-primary md-dense md-raised">All</md-button>
          <md-button class="md-primary md-dense md-raised"
            >Change view</md-button
          >
        </div>
      </div>
    </div>

    <!-- ......event.....  -->
    <div class="container">
      <div class="event row mr-auto d-flex justify-content-around my-1">
        <EventItem v-for="event in events" :key="event._id" :event="event" />
      </div>

      <!-- .....categories.....  -->
      <div class="categories">
        <div class="container my-4 FeautedEvent-box">
          <h1 class="d-inline">Categories</h1>
        </div>
        <div class="row mr-auto d-flex justify-content-around">
          <CategoyItem
            v-for="category in categories"
            :key="category._id"
            :category="category"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CategoyItem from "@/components/CategoyItem.vue";
import EventItem from "@/components/EventItem.vue";
import MainJumbotron from "@/components/shared/MainJumbotron.vue";
export default {
  components: {
    CategoyItem,
    EventItem,
    MainJumbotron,
  },
  data() {
    return {
      categories: [],
      events: [],
    };
  },
  created() {
    axios.get("/api/v1/events").then((res) => {
      this.events = res.data;
      console.log(this.events);
    });

    axios.get("/api/v1/categories").then((res) => {
      this.categories = res.data;
      // console.log(this.categories);
    });
  },
};
</script>

<style  >
.md-card {
  width: 320px;
  /* height: 400px; */
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
.md-card:hover {
  /* background: #e1e1e1; */
  /* border: 1px solid; */
  box-shadow: 0px 0px 0px 3px #b8b5ff;
  cursor: pointer;
}
.FeautedEvent-box {
  /* border: 1px solid black; */
  box-shadow: 0px 0px 1px 0px black;
}
</style>