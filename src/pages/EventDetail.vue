<template>
  <div class="event-detail-page">
    <div>
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h2 class="subtitle">
              {{ event.startDate | formatDate }}
            </h2>
            <h1 class="title">
              {{ event.title }}
            </h1>
            <article class="media v-center">
              <figure class="media-left">
                <p class="image is-64x64">
                  <img class="is-rounded" :src="eventCreator.avatar" />
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    Created by <strong>{{ eventCreator.name }}</strong>
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div class="is-pulled-right">
            <!-- will handle later (: -->
            <button
              v-if="isMember"
              @click="leaveEvent"
              class="button is-danger"
            >
              Leave Event
            </button>
          </div>
        </div>
      </section>
    </div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-3">
            <aside class="is-medium menu">
              <div class="event-side-box">
                <div class="event-side-box-date m-b-sm">
                  <p><b>Date</b></p>
                  <p>{{ event.startDate | formatDate }}</p>
                </div>
                <div class="event-side-box-date m-b-sm">
                  <p><b>Time</b></p>
                  <span>{{ event.timeFrom }}</span> -
                  <span>{{ event.timeTo }}</span>
                </div>
                <div class="event-side-box-place m-b-sm">
                  <p><b>How to find us</b></p>
                  <p>{{ event.location }}</p>
                </div>
                <div class="event-side-box-more-info">
                  <p><b>Additional Info</b></p>
                  <p>{{ event.shortInfo }}</p>
                </div>
              </div>
              <div class="event-side-box-map">
                <img
                  src="https://cdn.wccftech.com/wp-content/uploads/2017/03/Google-Maps.jpg"
                  class="venueMap-mapImg span--100"
                  alt="Location image of event venue"
                />
              </div>
              <!-- Threads Start -->
              <p class="menu-label">Threads</p>
              <ul>
                <li v-for="thread in threads" :key="thread._id">
                  {{ thread.title }}
                </li>
              </ul>
              <p class="menu-label">Who is Going</p>
              <div class="columns is-multiline is-mobile">
                <!-- Joined People Images Here -->
                <div
                  v-for="person in event.joinedPeople"
                  :key="person._id"
                  class="column is-3"
                >
                  <figure class="image is-64x64">
                    <img class="is-rounded" :src="person.avatar" alt="Image" />
                  </figure>
                </div>
              </div>
              <!-- Threads Ends -->
            </aside>
          </div>
          <div class="column is-7 is-offset-1">
            <div class="content is-medium">
              <h3 class="title is-3">About the Meetup</h3>
              <p>{{ event.description }}</p>

              <button
                v-if="canJoin"
                @click="joinEvent"
                class="button is-primary"
              >
                Join In
              </button>

              <button
                v-if="!isAuthenticated"
                :disabled="true"
                class="button is-warning"
              >
                You need to login to join
              </button>
            </div>
            <ThreadCreateModal
              class="my-2"
              @threadSubmitted="createThread"
              :btnTitle="`Welcome ${authUser.name}, Start a new thread`"
              :title="'Create Thread'"
            />
            <!-- Thread List START -->
            <div class="content is-medium">
              <h3 class="title is-3">Threads</h3>
              <div v-for="thread in threads" :key="thread._id" class="box">
                <!-- Thread title -->
                <h4 id="const" class="title is-3">
                  {{ thread.title }}
                </h4>
                <!-- Create new post, handle later -->
                <form class="post-create">
                  <div class="field">
                    <textarea
                      class="textarea textarea-post"
                      placeholder="Write a post"
                      rows="1"
                    ></textarea>
                    <button :disabled="true" class="button is-primary m-t-sm">
                      Send
                    </button>
                  </div>
                </form>
                <!-- Create new post END, handle later -->
                <!-- Posts START -->
                <article
                  v-for="post in thread.post"
                  :key="post._id"
                  class="media post-item"
                >
                  <figure class="media-left is-rounded user-image">
                    <p class="image is-32x32">
                      <img class="is-rounded" />
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="content is-medium">
                      <div class="post-content">
                        <!-- Post User Name -->
                        <strong class="author">{{ post.user.name }}</strong>
                        {{ " " }}
                        <!-- Post Updated at -->
                        <small class="post-time">{{
                          post.updateAt | formatDate("LLL")
                        }}</small>
                        <br />
                        <p class="post-content-message">{{ post.text }} (:</p>
                      </div>
                    </div>
                  </div>
                </article>
                <!-- Posts END -->
              </div>
            </div>
            <!-- Thread List END -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import axios from "axios";
import { mapActions, mapState } from "vuex";
import ThreadCreateModal from "@/components/ThreadCreateModal.vue";
export default {
  name: "EventDetail",
  components: {
    ThreadCreateModal,
  },

  computed: {
    ...mapState({
      event: (state) => state.events.item,
      threads: (state) => state.threads.items,
      authUser: (state) => state.auth.user,
    }),
    eventCreator() {
      console.log("some data", this.event.eventCreator);
      return this.event.eventCreator || {};
    },
    isAuthenticated() {
      return this.$store.getters[`auth/isAuthenticated`];
    },
    isEventOwner() {
      return this.$store.getters[`auth/isEventOwner`](this.eventCreator._id);
    },
    isMember() {
      return this.$store.getters[`auth/isMember`](this.event._id);
    },
    canJoin() {
      return !this.isEventOwner && this.isAuthenticated && !this.isMember;
    },
  },
  created() {
    const eventId = this.$route.params.id;
    this.fetchEventById(eventId);
    // this.fetchEvents(eventId);
    this.fetchThreads(eventId);
  },
  methods: {
    ...mapActions("events", ["fetchEventById"]),
    // ...mapActions("event", ["fetchEvents"]),
    ...mapActions("threads", ["fetchThreads", "postThread"]),

    joinEvent() {
      this.$store.dispatch("events/joinEvent", this.event._id);
    },
    leaveEvent() {
      this.$store.dispatch("events/leaveEvent", this.event._id);
    },
    createThread({ title, done }) {
      this.postThread(title, title);
      // console.log( title);

      done();
    },
  },
};
</script>

<style lang="scss">
.tag.is-warning {
  opacity: 0.5;
}
.event-detail-page {
  background-color: #f5f5f5;
  .mapouter {
    text-align: right;
    height: 500px;
    width: 600px;
  }
  .gmap_canvas {
    overflow: hidden;
    background: none !important;
    height: 500px;
    width: 600px;
  }
  .hero-body {
    background-color: white;
    border: 1px solid rgba(46, 62, 72, 0.12);
    color: white;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url("https://media.istockphoto.com/photos/table-setting-for-an-event-party-or-wedding-reception-picture-id479977238?b=1&k=20&m=479977238&s=170667a&w=0&h=V5aoTjfquc3a-qNBz9hyKJ9bX48XuJW0DVzCaO77U1c=");
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
  .event-side-box {
    background-color: white;
    border-radius: 10px;
    font-size: 16px;
    padding: 15px;
  }
}
pre,
.message {
  max-width: 960px;
}
.v-center {
  align-items: center;
}
li {
  margin: 10px;
}
.hero.is-primary {
  background: linear-gradient(to top right, #524ad0 10%, #d099fa);
}
.box {
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
}
.box span.icon {
  float: right;
  font-size: 1.7em;
  padding: 2rem 2rem 0 0;
}
.is-large.fab {
  font-size: 7em;
}
.is-large.fas {
  font-size: 5em;
  margin-left: 0.2em;
}
.media-content {
  overflow: hidden;
}
.menu-list li a:hover {
  background: #d9d9d9;
}
.token.number {
  display: inline;
  padding: inherit;
  font-size: inherit;
  line-height: inherit;
  text-align: inherit;
  vertical-align: inherit;
  border-radius: inherit;
  font-weight: inherit;
  white-space: inherit;
  background: inherit;
  margin: inherit;
}
.footer {
  background-color: white;
}
// Post Create Input START
.textarea-post {
  padding-bottom: 30px;
}
.post-create {
  margin-bottom: 15px;
}
// Post Create END
// Thread List START
.content {
  figure {
    margin-bottom: 0;
  }
}
.media-content-threads {
  background-color: #f1f1f1;
  padding: 3px 20px;
  border-radius: 10px;
  margin-right: 40px;
  width: 100px;
}
.media-left.user-image {
  margin: 0;
  margin-right: 15px;
}
.post-item {
}
.media + .media {
  border: none;
  margin-top: 0;
}
.post-content {
  margin: 0;
  &-message {
    font-size: 16px;
  }
  .author {
    font-size: 18px;
  }
  .post-time {
    font-size: 16px;
  }
}
// Thread List END
</style>