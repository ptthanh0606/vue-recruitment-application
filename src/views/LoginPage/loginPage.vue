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
            <span class="fail-message" :class="{ 'displayError' : isLoginFailed }">{{ failMessage }}</span>
            <form class="login-form" @submit="this.handleLogin">
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
              <button class="btnLogin" type="submit">Sign in to your account</button>
            </form>
            <span class="otherwise-label">otherwise</span>
          </div>

          <div class="dont-have-account">
            <span>Don't have an account?</span>
            <a href @click="this.handleCreateAccountRoute">Create an account.</a>
          </div>

          <div class="policy">
            <span>By continuing, you've agreed to JobSnap's</span>
            <span class="bold">terms of Service, Privacy Policy.</span>
          </div>
        </div>
        <div class="right-wrapper"></div>
      </div>
      <div class="rgb-bar"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import NavigationFrame from '../../components/NavigationFrame/NavigationFrame.vue';

export default {
  name: 'LoginPage',
  components: {
    'navigation-frame': NavigationFrame,
  },
  data() {
    return {
      userEmail: '',
      userPassword: '',
      failMessage: 'Incorrect email or password',
      isLoginFailed: false,
    };
  },
  computed: {
    ...mapState('LoginPage', ['bearerLoginToken']),
  },
  methods: {
    ...mapActions('LoginPage', ['login']),
    handleLogin(event) {
      event.preventDefault();
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
        })
        .catch(() => {
          this.isLoginFailed = true;
        });
    },
    handleCreateAccountRoute(event) {
      event.preventDefault();
      this.$router.push({ name: 'create-account' });
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/_globalVariable.scss";

.loginPage-container {
  height: 100vh;
  padding-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;

  .center-wrapper {
    width: 100%;
    max-width: 1350px;
    margin: 0 auto;

    .middle-wrapper {
      width: 35%;
      margin: 0 auto;
      height: 100%;

      @media only screen and (max-width: 969px) {
        width: 60%;
      }

      @media only screen and (max-width: 769px) {
        width: 100%;
      }

      padding: 1rem;
      display: flex;
      flex-direction: column;

      .login-form-wrapper {
        margin-top: 3rem;
        width: 100%;

        .title {
          text-align: center;
          color: $darkBlueGray;
          margin-bottom: 2rem;
          font-size: 3rem;
        }

        .fail-message {
          display: block;
          width: 100%;
          color: #d33333;
          text-align: center;
          margin-bottom: 2rem;
          transition: all ease-in-out 1s;
          opacity: 0;
        }

        .displayError {
          opacity: 1;
        }

        .login-form {
          margin-bottom: 2rem;

          .userinput {
            width: 100%;
            background-color: transparent;
            border-radius: 10px;
            border: 1.5px solid #adadad;
            outline: none;
            padding: 0.6rem;
            margin-bottom: 1rem;

            &:focus {
              animation: rgb-border infinite 6s;
            }
          }

          .btnLogin {
            margin-top: 2rem;
            width: 100%;
            height: 2.8rem;
            background-color: $darkBlueGray;
            border: none;
            border-radius: 10px;
            color: $backgroundColor;
            font-weight: bolder;
            box-shadow: 3px 3px 7px #00000060, -3px -3px 7px #ffffffab;

            &:focus {
              outline: none;
            }

            &:hover {
              cursor: pointer;
            }
          }
        }

        .otherwise-label {
          font-size: 12px;
          display: flex;
          justify-content: space-between;
          width: 100%;
          text-align: center;
          position: relative;
          color: $fontColor;

          &:before,
          &:after {
            content: "";
            display: block;
            width: 40%;
            height: 100%;
            border-bottom: 1px solid $iconColor;
            transform: translateY(8px);
          }
        }
      }

      .dont-have-account {
        margin-top: 2rem;
        width: 100%;
        display: flex;
        text-align: center;
        flex-direction: column;
        font-size: 16px;
        color: $fontColor;

        a {
          color: #009fa5;
          font-weight: bolder;
        }
      }

      .policy {
        margin-top: 2rem;
        text-align: center;
        font-size: 13px;

        .bold {
          color: #02a9af;
          font-weight: bolder;
        }
      }
    }
  }

  .rgb-bar {
    width: 100%;
    height: 6px;
    animation: 10s rgb-bar infinite;
  }
}
</style>
