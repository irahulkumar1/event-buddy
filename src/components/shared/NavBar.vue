<template>
  <div class="navBar-box">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container color">
        <div class="navbar-brand">
          <router-link class="navbar-item text-decoration-none" to="/">
            <h3>Event-buddy</h3>
          </router-link>

          <router-link
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            to=""
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </router-link>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <router-link class="navbar-item text-decoration-none" to="/">
              Home
            </router-link>

            <router-link class="navbar-item text-decoration-none" to="/find">
              find
            </router-link>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link text-decoration-none"> More </a>

              <div class="navbar-dropdown">
                <router-link class="navbar-item" to="/"> About </router-link>
                <router-link class="navbar-item" to="/"> Jobs </router-link>
                <router-link class="navbar-item" to="/"> Contact </router-link>
                <hr class="navbar-divider" />
                <router-link class="navbar-item" to="/">
                  Report an issue
                </router-link>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div v-if="user">
                <span> Welcome {{ user.name }}</span>
              </div>
            </div>
            <div v-if="user" class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link"> Account </a>
              <div class="navbar-dropdown">
                <a href="#" class="navbar-item">
                  <i class="far fa-user"></i> &nbsp; Profile
                </a>
                <hr class="navbar-divider" />
                <a @click.prevent="logout" class="navbar-item">
                  <i class="fas fa-sign-out-alt"></i> &nbsp; Logout
                </a>
              </div>
            </div>
            <div v-else class="navbar-item has-dropdown">
              <div class="buttons">
                <router-link to="/signup">
                  <md-button class="md-dense">
                    <strong>Sign up</strong>
                  </md-button>
                </router-link>
                <router-link to="/login">
                  <md-button class="md-raised md-dense"> Log in </md-button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- ................ -->

    <!-- .......  -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  computed: {
    ...mapGetters({
      user: "auth/authUser",
    }),
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    },
  },
};
</script>

<style>
.color {
  background-color: #faf9f9;
}
router-link a {
  text-decoration: none;
  color: black;
}
</style>