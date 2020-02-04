<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->

    <welcome-page></welcome-page>
  </div>
</template>

<script>
import WelcomePage from './views/Welcome/Welcome.vue';

export default {
  name: 'mainApp',
  components: {
    'welcome-page': WelcomePage,
  },
};
</script>

<style lang="scss">
@import './assets/scss/_globalVariable.scss';

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden;
  background-color: $backgroundColor;
}

html {
  scroll-behavior: smooth;
}
</style>
