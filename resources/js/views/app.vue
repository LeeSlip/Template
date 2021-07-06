<template>
  <div>
    <div class="title">
      <h6>
        {{message}}
    </h6>
    <h5>
        {{message}}
    </h5>
    </div>
  </div>
</template>
<script>
const default_layout = "default";

export default {
  computed: {},
  data() {
      return {
          message:"Leon's App"
      }
  }
};
</script>

<style lang="scss">
@import "./resources/sass/app.scss";
</style>