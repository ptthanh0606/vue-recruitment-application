<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'main-component',
};
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
