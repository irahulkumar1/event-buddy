<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Welcome To Event-buddy</h1>
          <h2 class="subtitle">plan your event any where anytime</h2>
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
    <!-- ............  -->
    <div class="card container lookup-body my-4">
      <!-- <div class="card-body">This is some text within a card body.</div> -->
      <div class="lookup-prebody">
        <div class="event-lookup-wrap">
          <div class="event-lookup centered">
            <div class="level">
              <div class="level-left">
                <div class="level-item">
                  <input type="text" class="input" placeholder="Mumbai" />
                </div>
                <div class="level-item">
                  <span>Events in Mumbai, IN</span>
                </div>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <md-button class="md-dense md-raised md-primary"
                    >Events</md-button
                  >
                  <md-button class="md-dense md-raised md-primary"
                    >calender</md-button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- .........  -->
    <div class="container">
      <div class="row my-3">
        <div
          v-for="event in events"
          :key="event._id"
          class="card text-left mx-3 my-3"
        >
          <router-link :to="'/events/' + event._id">
            <md-card>
              <md-card-media-cover md-solid>
                <md-card-media md-ratio="1:1">
                  <img :src="event.image" />
                </md-card-media>

                <md-card-area>
                  <md-card-header>
                    <span class="md-title">{{ event.title }}</span>
                    <span class="md-subhead">{{ event.location }}</span>
                    <span class="month"
                      >{{ event.startDate | formatDate("D") }}-{{
                        event.startDate | formatDate("MMM")
                      }}</span
                    >
                  </md-card-header>

                  <md-card-actions>
                    <md-button class="md-icon-button">
                      <md-icon
                        ><p>
                          {{ event.joinedPeopleCount }}
                        </p></md-icon
                      >
                    </md-button>

                    <!-- <md-button class="md-icon-button">
                    <md-icon>share</md-icon>
                  </md-button> -->
                  </md-card-actions>
                </md-card-area>
              </md-card-media-cover>
            </md-card>
          </router-link>
        </div>
      </div>
      <div>
        <span class="tag is-warning is-large my-3"
          >No events found :( You might try to change search criteria (:</span
        >
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  computed: {
    events() {
      return this.$store.state.events.items;
    },
  },
  created() {
    this.$store.dispatch("events/fetchEvents");
  },
};
</script>

<style lang="scss" scoped>
.hero-body {
  background-color: white;
  border: 1px solid rgba(46, 62, 72, 0.12);
  color: white;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  > p,
  h1,
  h2,
  strong {
    color: white;
  }
}
img {
  width: 340px;
  height: 240px;
}
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
.lookup-body {
  background-color: #b8b5ff;
}
</style>