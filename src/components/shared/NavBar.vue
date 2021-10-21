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
    <div class="jumbotron jumbotron-fluid container my-4">
      <div class="container mx-4" style="color: white">
        <h2 class="">Welcome to Event-Buddy</h2>
        <p>Plan your Events anytime anywhere</p>
      </div>
    </div>
    <!-- .......  -->
    <div class="container">
      <md-card>
        <md-card-media-cover md-solid>
          <md-card-media md-ratio="4:3">
            <img
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            />
          </md-card-media>

          <md-card-area>
            <md-card-header>
              <span class="md-title">Solid background</span>
              <md-button class="btn my-2 my-sm-0" type="submit">
                <i class="fas fa-sign-in-alt"></i> Login
              </md-button>
            </md-card-header>
          </md-card-area>
        </md-card-media-cover>
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style  scoped>
.navbar {
  background-color: #e4fbff;
}
.jumbotron {
  background-image: url("https://images.unsplash.com/photo-1489513691500-41ef4acdb665?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80");
  background-size: cover;
}

.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>