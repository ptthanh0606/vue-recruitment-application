<template>
  <!-- eslint-disable object-shorthand -->
  <!-- eslint-disable max-len -->
  <!-- eslint-disable prefer-const -->
  <!-- eslint-disable no-unused-vars -->
  <div>
    <navigation-frame></navigation-frame>
    <div class="create-account-container">
      <div class="center-wrapper">
        <div class="create-form-wrapper">
          <h1 class="title">JOIN US</h1>
          <h3 class="sub-title">It's free to use.</h3>
          <form @submit.prevent="handleCreateAccount">
            <div class="full-name-input-container">
              <input
                class="userinput firstName"
                type="text"
                placeholder="First name"
                v-model="userFirstName"
                required
              />
              <input
                class="userinput lastName"
                type="text"
                placeholder="Last name"
                v-model="userLastName"
                required
              />
            </div>
            <input
              class="userinput userName"
              type="text"
              placeholder="Choose a username"
              v-model="userName"
              required
            />
            <input
              class="userinput email"
              type="email"
              placeholder="Email"
              v-model="userEmail"
              required
            />
            <input
              class="userinput password"
              type="password"
              placeholder="New Password"
              v-model="userPassword"
              required
            />
            <input
              class="userinput phoneNumber"
              type="tel"
              pattern="[0-9]{10}"
              title="Example: 0765413668"
              placeholder="Phone number"
              v-model="phoneNumber"
              required
            />
            <div class="birthday-input-container">
              <span class="birthday-label">Your birthday</span>
              <date-picker type="date" placeholder="Pick a day" v-model="inputDate" clearable></date-picker>
            </div>

            <button type="submit" class="apply-button">Create your account</button>
          </form>
        </div>
      </div>
      <div class="rgb-bar"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { DatePicker } from 'element-ui';
import NavigationFrame from '../../components/NavigationFrame/NavigationFrame.vue';

export default {
  name: 'create-account',
  components: {
    'date-picker': DatePicker,
    'navigation-frame': NavigationFrame,
  },
  computed: {
    ...mapState('CreateAccountPage', ['bearerLoginToken']),
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      userName: '',
      userPassword: '',
      userEmail: '',
      userFirstName: '',
      userLastName: '',
      phoneNumber: '',
      inputDate: '',
    };
  },
  methods: {
    ...mapActions('CreateAccountPage', ['createAccount']),
    ...mapActions('LoginPage', ['login']),
    handleCreateAccount() {
      let month = this.inputDate.getMonth() + 1;
      let date = this.inputDate.getDate();
      month = month < 10 ? `0${month}` : `${month}`;
      date = date < 10 ? `0${date}` : `${date}`;

      this.createAccount({
        userName: this.userName,
        password: this.userPassword,
        email: this.userEmail,
        fullName: `${this.userLastName} ${this.userFirstName}`,
        phoneNumber: this.phoneNumber,
        dateOfBirth: this.inputDate.getFullYear().toString() + month + date,
      }).then(() => {
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
      });
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/_globalVariable.scss";

.create-account-container {
  height: 100vh;
  padding-top: 8rem;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;

  .center-wrapper {
    width: 100%;
    max-width: 1350px;
    margin: 0 auto;

    .create-form-wrapper {
      padding: 0 1rem;
      width: 40%;
      height: 100%;

      @media only screen and (max-width: 969px) {
        width: 60%;
      }

      @media only screen and (max-width: 769px) {
        width: 100%;
      }

      .title {
        color: $titleFontColor;
        font-size: 3rem;
      }

      .sub-title {
        font-weight: lighter;
      }

      .userinput {
        width: 100%;
        border: none;
        background-color: transparent;
        border-radius: 10px;
        border: 1.5px solid #adadad;
        outline: none;
        padding: 0.6rem;
        margin-top: 1.5rem;
        transition: border-bottom ease-in-out 0.2s;

        &:focus {
          animation: rgb-border infinite 6s;
        }
      }

      .full-name-input-container {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .userinput {
          width: 48%;
        }
      }

      .birthday-input-container {
        width: 100%;
        margin-top: 3rem;
        display: flex;
        align-items: center;

        .birthday-label {
          display: block;
          font-weight: bold;
          color: $fontColor;
          margin-right: 2rem;
        }

        ::placeholder {
          color: $fontColor;
        }

        .el-input {
          flex: 1;
        }

        .el-input__inner {
          border-radius: 10px;
          background-color: $backgroundColor;
          box-shadow: inset 8px 8px 8px rgba(0, 0, 0, 0.137),
            inset -8px -8px 8px rgba(255, 255, 255, 0.596);
        }

        .el-input__prefix {
          color: $iconColor;
        }
      }

      .apply-button {
        margin-top: 2rem;
        width: 100%;
        height: 2.5rem;
        background-color: #43a2a7;
        border: none;
        border-radius: 10px;
        color: $backgroundColor;
        font-weight: bolder;
        box-shadow: 5px 5px 10px #00000046,
            -5px -5px 10px #ffffff;

        &:focus {
          outline: none;
        }

        &:hover {
          cursor: pointer;
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
