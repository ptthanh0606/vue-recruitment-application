<template>
  <div id="app">
    <navigation-frame></navigation-frame>
    <router-view/>
  </div>
</template>

<script>
import NavigationFrame from './views/NavigationFrame/NavigationFrame.vue';

export default {
  name: 'main-component',
  components: {
    'navigation-frame': NavigationFrame,

  },
};
/* eslint linebreak-style: [2, "windows"] */
</script>

<style lang="scss">
@import './assets/scss/_globalVariable.scss';

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
  color: $fontColor;
}

body {
  overflow-x: hidden;
  font-family: 'Roboto', sans-serif;
  background-color: $backgroundColor;
}

</style>
