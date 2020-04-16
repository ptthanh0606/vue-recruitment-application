<template>
  <!-- eslint-disable object-shorthand -->
  <!-- eslint-disable max-len -->
  <!-- eslint-disable prefer-const -->
  <!-- eslint-disable no-unused-vars -->
  <div>
    <navigation-frame></navigation-frame>
    <div class="create-account-container">
      <div class="center-wrapper">
        <div class="middle-wrapper">
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
      </div>
      <div class="rgb-bar"></div>
    </div>
    <footer-page-component></footer-page-component>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { DatePicker } from 'element-ui';
import NavigationFrame from '../../components/NavigationFrame/NavigationFrame.vue';
import FooterPageComponent from '../../components/FooterPageComponent/FooterPageComponent.vue';

export default {
  name: 'create-account',
  components: {
    'date-picker': DatePicker,
    'navigation-frame': NavigationFrame,
    'footer-page-component': FooterPageComponent,
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
            window.scrollTo(0, 0);
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
@import '../../assets/scss/CreateAccount/CreateAccount.scss';
</style>
