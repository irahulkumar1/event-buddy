<template>
  <div>
    <nav
      class="navbar navbar-light bg-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
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

            <router-link class="navbar-item text-decoration-none" to="#">
              Documentation
            </router-link>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link text-decoration-none"> More </a>

              <div class="navbar-dropdown">
                <router-link class="navbar-item" to="#"> About </router-link>
                <router-link class="navbar-item" to="#"> Jobs </router-link>
                <router-link class="navbar-item" to="#"> Contact </router-link>
                <hr class="navbar-divider" />
                <router-link class="navbar-item" to="#">
                  Report an issue
                </router-link>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div>
                <md-button class="md-dense md-raised md-primary"
                  >sing up</md-button
                >
                <md-button class="md-dense md-raised md-primary"
                  >Login</md-button
                >
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
export default {
  name: "NavBar",
};
</script>

<style  >
.navbar {
  background-color: #2393a7;
}
</style>