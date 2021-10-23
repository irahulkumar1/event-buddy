<template>
  <div>
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

    <!-- ...........  -->
    <div class="container">
      <section class="event">
        <md-card>
          <md-card-media>
            <img
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
              alt="People"
            />
          </md-card-media>

          <md-card-header>
            <div class="md-title">Title goes here</div>
            <div class="md-subhead">Subtitle here</div>
          </md-card-header>

          <md-card-expand>
            <md-card-actions md-alignment="space-between">
              <div>
                <md-button>Action</md-button>
                <md-button>Action</md-button>
              </div>

              <md-card-expand-trigger>
                <md-button class="md-icon-button">
                  <i class="fas fa-caret-down"></i>
                </md-button>
              </md-card-expand-trigger>
            </md-card-actions>

            <md-card-expand-content>
              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                itaque ea, nostrum odio. Dolores, sed accusantium quasi non,
                voluptas eius illo quas, saepe voluptate pariatur in deleniti
                minus sint. Excepturi.
              </md-card-content>
            </md-card-expand-content>
          </md-card-expand>
        </md-card>
      </section>
      <!-- .....categories.....  -->
      <div class="categories">
        <div class="container my-4 FeautedEvent-box">
          <h1 class="d-inline">Categories</h1>
        </div>
        <div class="row mr-auto d-flex justify-content-around my-3">
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
export default {
  components: {
    CategoyItem,
  },
  data() {
    return {
      categories: [],
      event: [],
    };
  },
  created() {
    axios.get("/api/v1/events").then((res) => {
      this.event = res.data;
      console.log(this.events);
    });

    axios.get("/api/v1/categories").then((res) => {
      this.categories = res.data;
      // console.log(this.categories);
    });
  },
};
</script>

<style scoped>
.md-card {
  width: 320px;
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