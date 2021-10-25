<template>
  <!-- <router-link :to="{ name: 'EventDetail', params: { id: event._id } }"> -->
  <router-link :to="'/events/' + event._id">
    <md-card class="my-3">
      <md-card-media>
        <!-- event image -->
        <img :src="event.image" />
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{ event.title }}</div>

        <div class="md-subhead">{{ event.category }}</div>
        <div class="md-subhead">Location {{ event.location }}</div>
        <p>
          Date: {{ event.startDate | formatDate("MMM") }}
          {{ event.startDate | formatDate("D") }}
        </p>
        <md-card-expand-trigger class="float-right">
          <md-button class="md-icon-button">
            <i class="fas fa-caret-down"></i>
          </md-button>
        </md-card-expand-trigger>
      </md-card-header>
      <md-card-expand>
        <md-card-expand-content>
          <md-card-content>
            {{ event.description }}
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>
  </router-link>
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

<style scoped>
</style>