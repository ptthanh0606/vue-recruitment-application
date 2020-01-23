<template>
  <div class="welcome-container">
    <welcome-frame></welcome-frame>
    <section class="firstSection">
      <div class="section-container">
        <h1>YOUR NEXT DREAM JOB</h1>
      </div>
    </section>
  </div>
</template>

<script>
import WelcomeFrame from './WelcomeFrame/WelcomeFrame.vue';

export default {
  name: 'welcome',
  components: {
    'welcome-frame': WelcomeFrame,
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/Welcome/welcome.scss";
</style>
