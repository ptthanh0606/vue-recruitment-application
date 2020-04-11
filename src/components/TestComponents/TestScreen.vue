<template>
  <!-- eslint-disable max-len -->
  <div class="testScreen-container">
    <job-card></job-card>
    <!-- <job-card></job-card>
    <job-card></job-card>
    <job-card></job-card>-->
    test more
  </div>
</template>

<script>
import JobPreviewCard from '../JobPreviewCard/JobPreviewCard.vue';

export default {
  name: 'TestScreen',
  components: {
    'job-card': JobPreviewCard,
  },
};
</script>

<style lang="scss">
@import "../../../src/assets/scss/TestComponents/TestScreen.scss";
</style>
