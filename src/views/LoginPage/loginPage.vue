<template>
  <!-- eslint-disable object-shorthand -->
  <!-- eslint-disable max-len -->
  <!-- eslint-disable prefer-const -->
  <!-- eslint-disable no-unused-vars -->
  <div>
    <navigation-frame></navigation-frame>
    <div class="loginPage-container">
      <div class="center-wrapper">
        <div class="middle-wrapper">
          <div class="login-form-wrapper">
            <h1 class="title">SIGN IN</h1>
            <form class="login-form" @submit.prevent="handleLogin">
              <input
                class="userinput email"
                type="text"
                placeholder="Your email"
                v-model="userEmail"
                required
              />
              <input
                class="userinput password"
                type="password"
                placeholder="Your password"
                v-model="userPassword"
                required
              />
              <button class="button-login" type="submit">Sign in with Jobsnap email</button>
            </form>
            <span class="otherwise-label">otherwise</span>
            <button class="button-login btn-with-google" @click="handleLoginWithGoogle">
              <img class="button-icon" src="../../assets/img/google-logo-button.png" alt />Sign in with Google
            </button>
          </div>

          <div class="dont-have-account">
            <span>Don't have an account?</span>
            <a href @click="this.handleCreateAccountRoute">Create an account.</a>
          </div>

          <div class="policy">
            <span>By continuing, you've agreed to Jobsnap's</span>
            <span class="bold">terms of Service, Privacy Policy.</span>
          </div>
        </div>
        <div class="right-wrapper"></div>
      </div>
      <div class="rgb-bar"></div>
    </div>
    <footer-page-component></footer-page-component>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import NavigationFrame from '../../components/NavigationFrame/NavigationFrame.vue';
import FooterPageComponent from '../../components/FooterPageComponent/FooterPageComponent.vue';

export default {
  name: 'LoginPage',
  components: {
    'navigation-frame': NavigationFrame,
    'footer-page-component': FooterPageComponent,
  },
  data() {
    return {
      userEmail: '',
      userPassword: '',
    };
  },
  computed: {
    ...mapState('LoginPage', ['bearerLoginToken']),
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    ...mapActions('LoginPage', ['login', 'getLoginWithFireBase']),
    handleLogin() {
      const vue = this;
      this.login({
        email: this.userEmail,
        password: this.userPassword,
      })
        .then(() => {
          localStorage.setItem(
            'LOGIN_TOKEN',
            this.bearerLoginToken.accessToken,
          );
          this.$router.push({ name: 'account' });
          window.scrollTo(0, 0);
        })
        .catch(() => {
          vue.$message({
            message: 'Login failed, incorrect username or password',
            type: 'error',
          });
        });
    },
    handleLoginWithGoogle() {
      const vue = this;
      this.getLoginWithFireBase().then(() => {
        localStorage.setItem(
          'LOGIN_TOKEN',
          this.bearerLoginToken.accessToken,
        );
        this.$router.push({ name: 'account' });
        window.scrollTo(0, 0);
      })
        .catch(() => {
          vue.$message({
            message: 'Login failed, incorrect username or password',
            type: 'error',
          });
        });
    },
    handleCreateAccountRoute(event) {
      event.preventDefault();
      this.$router.push({ name: 'create-account' });
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/LoginPage/LoginPage.scss';
</style>
