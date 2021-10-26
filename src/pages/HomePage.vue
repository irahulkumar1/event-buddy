<template>
  <div>
    <div class="homePage">
      <MainJumbotron />
      <div class="container">
        <div class="container my-4 FeautedEvent-box">
          <div>
            <h1 class="d-inline">Featured Events in "Location"</h1>
            <div class="d-inline float-right">
              <md-button class="md-primary md-dense md-raised" to="/find"
                >All</md-button
              >
              <md-button class="md-primary md-dense md-raised"
                >Change view</md-button
              >
            </div>
          </div>
        </div>

        <!-- ......event.....  -->
        <div class="container">
          <AppSpinner v-if="status === 'LOADING'" />
          <div>
            <div>
              <EventItem
                v-for="event in events"
                :key="event.id"
                :event="event"
              />
            </div>
          </div>

          <!-- .....categories.....  -->
          <div class="categories">
            <div class="container my-4 FeautedEvent-box">
              <h1 class="d-inline">Categories</h1>
            </div>
            <div class="row mr-auto d-flex justify-content-around">
              <AppSpinner v-if="status === 'LOADING'" />
              <CategoyItem
                v-for="category in categories"
                :key="category._id"
                :category="category"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import CategoyItem from "@/components/CategoyItem.vue";
import EventItem from "@/components/EventItem.vue";
import MainJumbotron from "@/components/shared/MainJumbotron.vue";

import { mapActions, mapState } from "vuex";

export default {
  components: {
    CategoyItem,
    EventItem,
    MainJumbotron,
  },
  data() {
    return {
      status: "LOADING",
    };
  },
  computed: {
    ...mapState({
      events: (state) => state.events.items,
      categories: (state) => state.categories.items,
    }),
  },
  created() {
    this.fetchEvents()
      .then(() => {
        return this.fetchCategories();
      })
      .then(() => {
        this.status = "LOADED";
      });
  },
  methods: {
    ...mapActions("events", ["fetchEvents"]),
    ...mapActions("categories", ["fetchCategories"]),
  },
};
</script>

<style  >
.eventItem {
  width: 345px;
  /* height: 200px; */
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
.card-expansion {
  height: 480px;
}
.md-categories {
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
.homePage {
  background-color: #e4e0e0;
}
</style>