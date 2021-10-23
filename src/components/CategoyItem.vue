<template>
  <div>
    <!--  -->
    <md-card class="">
      <md-card-media-cover md-solid>
        <md-card-media md-ratio="4:3">
          <img :src="category.image" />
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">{{ category.name | capitalize }}</span>
          </md-card-header>
        </md-card-area>
      </md-card-media-cover>
    </md-card>

    <!-- ..........  -->
  </div>
</template>

<script>
export default {
  props: {
    category: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style scoped>
.md-card {
  width: 260px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
.md-card:hover {
  /* background: #e1e1e1; */
  /* border: 1px solid; */
  box-shadow: 0px 0px 0px 3px #b8b5ff;
  cursor: pointer;
}
.FeautedEvent-box {
  /* border: 1px solid black; */
  box-shadow: 0px 0px 1px 0px black;
}
</style>