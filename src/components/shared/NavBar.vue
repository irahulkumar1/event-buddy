<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light text-decoration-none">
      <div class="container">
        <router-link class="navbar-brand" href="#">Event-Buddy</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Find</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                More
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">About</a>
                <a class="dropdown-item" href="#">Jobs</a>
                <a class="dropdown-item" href="#">Contact</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Report an issue</a>
              </div>
            </li>
          </ul>

          <md-button class="btn my-2 my-sm-0" type="submit"> SingUp</md-button>
          <md-button class="btn my-2 my-sm-0" type="submit">
            <i class="fas fa-sign-in-alt"></i> Login
          </md-button>
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
  background-color: #e4fbff;
}
</style>