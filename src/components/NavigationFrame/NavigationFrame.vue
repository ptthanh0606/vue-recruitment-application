<template>
  <!-- eslint-disable max-len -->
  <header class="nav-bar">
    <div class="header-container">
      <a href class="logo">JOBSNAP.</a>
      <button
        class="hamburger hamburger--arrow"
        type="button"
        @click="() => { this.menuActiveFlg = !this.menuActiveFlg }"
        :class="{ 'is-active' : menuActiveFlg }"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>

    <div class="menu-overlay">
      <div class="menu-container">
        <ul class="menu">
          <li class="menu-item">
            <a @click="handleMenuRoute($event, 'welcome')" href item="home">HOME</a>
          </li>
          <li class="menu-item">
            <a @click="handleMenuRoute($event, 'jobs')" href item="jobs">JOBS</a>
          </li>
          <li class="menu-item">
            <a @click="handleMenuRoute($event, 'employers')" href item="employers">EMPLOYERS</a>
          </li>
          <li class="menu-item" v-if="isLogin">
            <a @click="handleMenuRoute($event, 'account')" href item="account">ACCOUNT</a>
          </li>
          <li class="menu-item">
            <a href item="about">ABOUT</a>
          </li>
          <li class="menu-item" v-if="!isLogin">
            <a @click="handleMenuRoute($event, 'login')" href item="login">LOG IN</a>
          </li>
          <li class="menu-item" v-if="isLogin">
            <a @click="handleMenuRoute($event, 'log-out')" href item="log-out">LOG OUT</a>
          </li>
        </ul>
      </div>
      <span class="big-item-name">{{ menuItemDesc }}</span>
    </div>
  </header>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Anime from 'animejs';

export default {
  name: 'navigation-bar',

  computed: {
    ...mapState('UserAuthorization', ['userCompany', 'userInfo']),
  },

  updated() {
    this.addHoverListener(
      ".menu-item > a[item='home']",
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
      },
    );

    this.addHoverListener(
      ".menu-item > a[item='jobs']",
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
      },
    );

    this.addHoverListener(
      ".menu-item > a[item='employers']",
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
      },
    );

    this.addHoverListener(
      ".menu-item > a[item='about']",
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
      },
    );

    if (this.isLogin) {
      this.addHoverListener(
        ".menu-item > a[item='account']",
        () => {
          Anime({
            targets: ".menu-item > a[item='account']",
            fontSize: '64px',
          });
          Anime({
            targets: '.big-item-name',
            opacity: 1,
          });
          this.menuItemDesc = 'YOUR INFO';
        },
        () => {
          Anime({
            targets: ".menu-item > a[item='account']",
            fontSize: '48px',
          });
          Anime({
            targets: '.big-item-name',
            opacity: 0,
          });
        },
      );

      this.addHoverListener(
        ".menu-item > a[item='log-out']",
        () => {
          Anime({
            targets: ".menu-item > a[item='log-out']",
            fontSize: '64px',
          });
          Anime({
            targets: '.big-item-name',
            opacity: 1,
          });
          this.menuItemDesc = 'LOG OUT OF YOUR ACCOUNT';
        },
        () => {
          Anime({
            targets: ".menu-item > a[item='log-out']",
            fontSize: '48px',
          });
          Anime({
            targets: '.big-item-name',
            opacity: 0,
          });
        },
      );
    } else {
      this.addHoverListener(
        ".menu-item > a[item='login']",
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
        },
      );
    }
  },

  watch: {
    menuActiveFlg(newVal) {
      if (newVal) {
        Anime({
          targets: '.menu-overlay',
          height: '100vh',
        });
        this.isLogin = !!localStorage.getItem('LOGIN_TOKEN');
      } else {
        Anime({
          targets: '.menu-overlay',
          easing: 'easeInOutQuad',
          duration: '400',
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
      searchValue: '',
      isLogin: false,
    };
  },

  methods: {
    ...mapActions('UserAuthorization', ['getUserCompanyInfo', 'getUserInfo']),

    addHoverListener(elementQuery, mouseOverFunction, mouseOutFunction) {
      document
        .querySelector(elementQuery)
        .addEventListener('mouseover', mouseOverFunction);
      document
        .querySelector(elementQuery)
        .addEventListener('mouseout', mouseOutFunction);
    },

    async handleMenuRoute(event, routeName) {
      event.preventDefault();
      let finalRoute = routeName;

      if (routeName === 'log-out') {
        localStorage.removeItem('LOGIN_TOKEN');
        finalRoute = 'login';
        this.menuActiveFlg = false;
      }

      if (routeName === 'employers') {
        try {
          await this.getUserInfo();
          try {
            this.menuActiveFlg = false;
            await this.getUserCompanyInfo();
            finalRoute = 'employers';
          } catch (error) {
            finalRoute = 'createCompany';
            this.menuActiveFlg = false;
          }
        } catch (error) {
          finalRoute = 'login';
          this.menuActiveFlg = false;
        }
      }

      if (routeName === this.$route.name) {
        window.location.reload();
      }

      this.menuActiveFlg = false;
      setTimeout(() => {
        this.$router.push({ name: finalRoute });
      }, 500);
    },
  },
};
</script>

<style lang="scss">
@import "../../../src/assets/scss/NavigationFrame/NavigationFrame.scss";
@import "../../../node_modules/hamburgers/_sass/hamburgers/hamburgers.scss";
</style>
