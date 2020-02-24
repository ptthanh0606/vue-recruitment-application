<template>
  <!-- eslint-disable max-len -->
  <div class="testScreen-container">
    <job-card></job-card>
    <!-- <job-card></job-card>
    <job-card></job-card>
    <job-card></job-card> -->
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
/* eslint linebreak-style: [2, "windows"] */
</script>

<style lang="scss">
@import '../../assets/scss/TestComponents/TestScreen.scss';
</style>
