<template>
  <!-- <router-link :to="{ name: 'EventDetail', params: { id: event._id } }"> -->

  <div class="eventItem my-2">
    <md-card class="md-card-example">
      <md-card-area md-inset>
        <router-link :to="'/events/' + event._id" class="text-decoration-none">
          <md-card-media md-ratio="16:9">
            <img :src="event.image" />
          </md-card-media>

          <md-card-header>
            <h2 class="md-title">{{ event.title }}</h2>
            <div class="md-subhead"></div>
            <div class="md-subhead my-2">
              <md-icon><i class="fas fa-map-marker-alt"></i></md-icon>
              <span class=""> {{ event.location }} </span>
            </div>
          </md-card-header>
        </router-link>

        <md-card-content>
          {{ event.description }}
        </md-card-content>
      </md-card-area>

      <md-card-content>
        <h3 class="md-subheading">Today's availability</h3>
        <div class="card-reservation">
          <md-icon><i class="far fa-clock"></i></md-icon>
          <div class="md-button-group">
            <md-button>{{ event.startDate | formatDate("D-MMM") }} </md-button>
            <md-button> {{ event.timeFrom }} </md-button>
            <md-button>{{ event.timeTo }}</md-button>
          </div>
        </div>
      </md-card-content>

      <md-card-actions>
        <router-link :to="'/events/' + event._id">
          <md-button class="md-primary">Detail</md-button>
        </router-link>
      </md-card-actions>
    </md-card>
  </div>
</template>


<script>
export default {
  props: {
    event: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style>
</style>