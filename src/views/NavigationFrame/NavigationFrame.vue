<template>
  <!-- eslint-disable max-len -->
  <header class="nav-bar">
    <div class="search-overlay-box">
      <div class="search-wrapper">
        <div class="input-container">
          <form action="#">
            <input class="effect-1" type="text" placeholder="ENTER YOUR JOB" />
            <span class="focus-border"></span>
          </form>
        </div>
        <svg @click="showSearchOverlay" id="search-box-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.06 30.059">
          <path data-name="Path 525" d="M17.689,15.031,29.509,3.21A1.88,1.88,0,1,0,26.851.552L15.03,12.373,3.209.552A1.88,1.88,0,0,0,.551,3.21L12.372,15.031.551,26.852a1.879,1.879,0,1,0,2.658,2.658L15.03,17.688,26.851,29.509a1.88,1.88,0,0,0,2.658-2.658Z" transform="translate(0 -0.001)"/>
        </svg>
      </div>
    </div>

    <div class="header-container">
      <div class="search-bar">
        <svg @click="showSearchOverlay"
          id="search-icon"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z"/>
          </g>
        </svg>
        <div class="input-container">
          <form action="#">
            <input class="effect-1" type="text" placeholder="ENTER YOUR JOB" />
            <span class="focus-border"></span>
          </form>
        </div>
      </div>

      <a href="#firstSection" class="logo">JOBSNAP.</a>

      <button class="hamburger hamburger--arrow" type="button" @click="() => { this.menuActiveFlg = !this.menuActiveFlg }" :class="{ 'is-active' : menuActiveFlg }">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>

    <div class="menu-overlay">
      <div class="menu-container">
        <ul class="menu">
          <li class="menu-item">
            <a href="" item="home">HOME</a>
          </li>
          <li class="menu-item">
            <a href="" item="login">LOG IN</a>
          </li>
          <li class="menu-item">
            <a href="" item="jobs">JOBS</a>
          </li>
          <li class="menu-item">
            <a href="" item="employers">EMPLOYERS</a>
          </li>
          <li class="menu-item">
            <a href="" item="about">ABOUT</a>
          </li>
        </ul>
      </div>
      <span class="big-item-name">{{ menuItemDesc }}</span>
    </div>
  </header>
</template>

<script>
import Anime from 'animejs';

export default {
  name: 'navigation-bar',

  mounted() {
    this.addHoverListener(".menu-item > a[item='home']",
      () => {
        Anime({
          targets: '.menu-item:nth-of-type(1)',
          translateX: 10,
          fontSize: '55px',
        });
        Anime({
          targets: '.big-item-name',
          opacity: 1,
        });

        this.menuItemDesc = 'BACK TO HOME';
      },
      () => {
        Anime({
          targets: '.menu-item:nth-of-type(1)',
          translateX: 0,
          fontSize: '48px',
        });
        Anime({
          targets: '.big-item-name',
          opacity: 0,
        });
      });

    this.addHoverListener(".menu-item > a[item='login']",
      () => {
        Anime({
          targets: ".menu-item > a[item='login']",
          fontSize: '64px',
        });
        Anime({
          targets: '.big-item-name',
          opacity: 1,
        });
        this.menuItemDesc = 'ACCESS OUR FEATURE';
      },
      () => {
        Anime({
          targets: ".menu-item > a[item='login']",
          fontSize: '48px',
        });
        Anime({
          targets: '.big-item-name',
          opacity: 0,
        });
      });

    this.addHoverListener(".menu-item > a[item='jobs']",
      () => {
        Anime({
          targets: ".menu-item > a[item='jobs']",
          fontSize: '64px',
        });
        Anime({
          targets: '.big-item-name',
          opacity: 1,
        });
        this.menuItemDesc = 'VIEW ALL JOBS';
      },
      () => {
        Anime({
          targets: ".menu-item > a[item='jobs']",
          fontSize: '48px',
        });
        Anime({
          targets: '.big-item-name',
          opacity: 0,
        });
      });

    this.addHoverListener(".menu-item > a[item='employers']",
      () => {
        Anime({
          targets: ".menu-item > a[item='employers']",
          fontSize: '64px',
        });
        Anime({
          targets: '.big-item-name',
          opacity: 1,
        });
        this.menuItemDesc = 'HR FOR YOUR TEAM';
      },
      () => {
        Anime({
          targets: ".menu-item > a[item='employers']",
          fontSize: '48px',
        });
        Anime({
          targets: '.big-item-name',
          opacity: 0,
        });
      });

    this.addHoverListener(".menu-item > a[item='about']",
      () => {
        Anime({
          targets: ".menu-item > a[item='about']",
          fontSize: '64px',
        });
        Anime({
          targets: '.big-item-name',
          opacity: 1,
        });
        this.menuItemDesc = 'MORE INFO ABOUT US';
      },
      () => {
        Anime({
          targets: ".menu-item > a[item='about']",
          fontSize: '48px',
        });
        Anime({
          targets: '.big-item-name',
          opacity: 0,
        });
      });
  },

  watch: {
    menuActiveFlg(newVal) {
      if (newVal) {
        Anime({
          targets: '.menu-overlay',
          height: '100vh',
        });
      } else {
        Anime({
          targets: '.menu-overlay',
          easing: 'easeOutBounce',
          duration: '1000',
          height: '0',
        });
      }
    },
  },

  data() {
    return {
      searchOverlayShowFlg: false,
      menuActiveFlg: false,
      menuItemDesc: '',
    };
  },

  methods: {
    showSearchOverlay() {
      if (this.searchOverlayShowFlg) {
        document.querySelector('.search-overlay-box').style.width = '0%';
      } else document.querySelector('.search-overlay-box').style.width = '100%';

      this.searchOverlayShowFlg = !this.searchOverlayShowFlg;
    },

    addHoverListener(elementQuery, mouseOverFunction, mouseOutFunction) {
      document.querySelector(elementQuery).addEventListener('mouseover', mouseOverFunction);
      document.querySelector(elementQuery).addEventListener('mouseout', mouseOutFunction);
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/NavigationFrame/NavigationFrame.scss";
@import '../../../node_modules/hamburgers/_sass/hamburgers/hamburgers.scss';
</style>
