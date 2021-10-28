<template>
  <div>
    <md-empty-state
      class=""
      md-icon="401 🤨"
      md-label="You are not authenticted to visit this page"
      md-description="Please login"
      ><div class="">
        <md-button class="md-primary md-dense md-raised m-2" to="/login"
          >Back to login page</md-button
        >
      </div>
    </md-empty-state>
  </div>
</template>

<script>
export default {
  name: "PageNotAuth",
};
</script>