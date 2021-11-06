<template>
  <div class="event-create-page">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">You are creating an event</h1>
          <h2 class="subtitle">Please fill all the details</h2>
          <article class="media v-center">
            <figure class="media-left"></figure>
            <div class="media-content"></div>
          </article>
        </div>
        <div class="is-pulled-right">
          <!-- We will handle this later (: -->
          <!-- <md-button class="md-dense md-raised md-accent"
            >Leave Group</md-button -->
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <EventCreateWizard @eventConfirmed="createEvent" />
      </div>
    </section>
  </div>
</template>

<script>
import EventCreateWizard from "@/components/EventCreate/EventCreateWizard";
export default {
  components: {
    EventCreateWizard,
  },
  computed: {
    categories() {
      return this.$store.state.categories.items;
    },
  },
  // created() {
  //   if (this.categories.length === 0) {
  //     this.$store.dispatch("categories/fetchCategories");
  //   }
  // },
  created() {
    this.$store.dispatch("categories/fetchCategories");
  },
  methods: {
    createEvent(eventToCreate) {
      this.$store
        .dispatch("events/createEvent", eventToCreate)
        // console
        //   .log("gffghgfgh", eventToCreate)
        .then((createdEvent) => {
          this.$router.push(`/events/${createdEvent._id}`);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped lang="scss">
.event-create-page {
  min-height: 100vh;
}

.hero-body {
  background-color: white;
  border: 1px solid rgba(46, 62, 72, 0.12);
  color: white;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("https://www.wikihow.com/images/thumb/1/18/Take-Better-Notes-Step-1-Version-2.jpg/v4-460px-Take-Better-Notes-Step-1-Version-2.jpg.webp");
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
</style>