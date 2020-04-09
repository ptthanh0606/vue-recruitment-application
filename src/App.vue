<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'main-component',
};
</script>

<style lang="scss">
@import "../src/assets/scss/_globalVariable.scss";

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
  font-family: "Roboto", sans-serif;
  background-color: $backgroundColor;
}

// router transition animation
.view-enter-active,
.view-leave-active {
  transition: opacity 1s ease-in-out, transform 1s ease;
}

.view-enter-active,
.view-leave-active {
  transition-delay: 0s;
}

.view-enter,
.view-leave.to {
  transform: translateX(-100rem);
  opacity: 0;
}

.view-enter-to,
.view-leave {
  transform: translateX(0);
  opacity: 1;
}
</style>
