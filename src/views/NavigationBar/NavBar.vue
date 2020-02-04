<template>
  <!-- eslint-disable max-len -->
  <div class="nav-bar">
    <div class="wrapper">
      <div class="search-bar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23.06"
          height="23.06"
          viewBox="0 0 23.06 23.06"
        >
          <g id="search" transform="translate(0 1)">
            <path
              id="Path_318"
              data-name="Path 318"
              class="cls-1"
              d="M22.919,22.24,15.9,15.223a9.163,9.163,0,1,0-.679.679l7.016,7.016a.48.48,0,1,0,.679-.679ZM9.128,17.3A8.167,8.167,0,1,1,17.3,9.128,8.177,8.177,0,0,1,9.128,17.3Z"
              transform="translate(0 -1)"
            />
          </g>
        </svg>
        <div class="input-container">
          <input class="effect-1" type="text" placeholder="ENTER YOUR JOB" />
          <span class="focus-border"></span>
        </div>
      </div>

      <h2 class="logo">JOBSNAP.</h2>

      <svg
        class="menu-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="30"
        viewBox="0 0 42 30"
      >
        <g id="menu_icon" data-name="menu icon" transform="translate(42) rotate(90)">
          <rect id="Rectangle_22" data-name="Rectangle 22" class="cls-1" width="5" height="42" />
          <rect
            id="Rectangle_23"
            data-name="Rectangle 23"
            class="cls-1"
            width="5"
            height="20"
            transform="translate(12)"
          />
          <rect
            id="Rectangle_24"
            data-name="Rectangle 24"
            class="cls-1"
            width="5"
            height="10"
            transform="translate(25)"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navigation-bar',
  mounted() {
    const observer = new IntersectionObserver(() => {
      this.loadingPercent += 2;
    }, { threshold: 0.7 });

    observer.observe(document.querySelector('section'));
  },
  data() {
    return {
      loadingPercent: 0,
    };
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/NavigationBar/navigationBar.scss";
</style>
