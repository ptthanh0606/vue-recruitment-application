<template>
  <!-- eslint-disable object-shorthand -->
  <!-- eslint-disable max-len -->
  <!-- eslint-disable prefer-const -->
  <!-- eslint-disable no-unused-vars -->
  <div>
    <navigation-frame></navigation-frame>
    <div class="edit-info-container">
      <div class="center-wrapper">
        <div class="left-col">
          <div class="user-info-wrapper">
            <div class="user-avatar">
              <a href="#">
                <img src="https://i.imgur.com/nb30rLD.jpg" height="50px" width="80px" alt />
              </a>
            </div>
            <a href="#" class="user-name">{{userInfo.fullName}}</a>
            <span class="user-email">{{userInfo.email}}</span>
          </div>
          <a
            href
            @click.prevent="handleGoBack"
            class="edit-info-label"
          >Back to your account</a>
          <div class="log-out-wrapper">
            <svg id="log-out-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19">
              <path
                data-name="Path 2"
                class="cls-1"
                d="M9.024,17.395H2.256a.752.752,0,0,1-.752-.752V3.106a.752.752,0,0,1,.752-.752H9.024a.752.752,0,0,0,0-1.5H2.256A2.259,2.259,0,0,0,0,3.106V16.643A2.259,2.259,0,0,0,2.256,18.9H9.024a.752.752,0,1,0,0-1.5Z"
              />
              <path
                data-name="Path 1"
                class="cls-1"
                d="M181.969,111.893l-4.572-4.512a.752.752,0,1,0-1.056,1.071l3.268,3.225h-8.756a.752.752,0,0,0,0,1.5h8.756l-3.268,3.225a.752.752,0,1,0,1.056,1.071l4.572-4.512a.752.752,0,0,0,0-1.071Z"
                transform="translate(-164.084 -102.554)"
              />
            </svg>
            <a href @click.prevent="handleLogout">Log out</a>
          </div>
        </div>
        <div class="middle-col">
          <h1 class="change-info-title">Change your profile</h1>
          <form @submit.prevent="handleUpdateInfo">
            <div class="desc-title">
              <h3 class="section-label basic-info-label">Basic info</h3>
              <span class="required-label">(required)</span>
              <tool-tip content="Required for every user" placement="right">
                <svg
                  class="icon warning"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19.193 19.193"
                >
                  <path
                    id="Path_525"
                    data-name="Path 525"
                    d="M9.6,0a9.6,9.6,0,1,0,9.6,9.6A9.591,9.591,0,0,0,9.6,0Zm0,17.693a8.1,8.1,0,1,1,8.1-8.1A8.092,8.092,0,0,1,9.6,17.693Z"
                  />
                  <path
                    id="Path_526"
                    data-name="Path 526"
                    d="M236.75,128.877a.75.75,0,0,0-.75.75v4.828a.75.75,0,0,0,1.5,0v-4.828A.75.75,0,0,0,236.75,128.877Z"
                    transform="translate(-227.153 -124.046)"
                  />
                  <circle
                    id="Ellipse_63"
                    data-name="Ellipse 63"
                    cx="1.012"
                    cy="1.012"
                    r="1.012"
                    transform="translate(8.584 12.077)"
                  />
                </svg>
              </tool-tip>
            </div>
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
              class="userinput password-confirm"
              type="password"
              placeholder="Confirm Password"
              v-model="userConfirmPassword"
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
            <div class="desc-title">
              <h3 class="section-label career-profile-label">Career profile</h3>
              <span class="required-label">(not required)</span>
              <tool-tip
                content="These informations will be used by employers, you dont need to fill in if you are not planned to apply for jobs"
                placement="right"
              >
                <svg
                  class="icon warning"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19.193 19.193"
                >
                  <path
                    id="Path_525"
                    data-name="Path 525"
                    d="M9.6,0a9.6,9.6,0,1,0,9.6,9.6A9.591,9.591,0,0,0,9.6,0Zm0,17.693a8.1,8.1,0,1,1,8.1-8.1A8.092,8.092,0,0,1,9.6,17.693Z"
                  />
                  <path
                    id="Path_526"
                    data-name="Path 526"
                    d="M236.75,128.877a.75.75,0,0,0-.75.75v4.828a.75.75,0,0,0,1.5,0v-4.828A.75.75,0,0,0,236.75,128.877Z"
                    transform="translate(-227.153 -124.046)"
                  />
                  <circle
                    id="Ellipse_63"
                    data-name="Ellipse 63"
                    cx="1.012"
                    cy="1.012"
                    r="1.012"
                    transform="translate(8.584 12.077)"
                  />
                </svg>
              </tool-tip>
            </div>
            <input
              class="userinput academic"
              type="text"
              placeholder="What is your academic level?"
              v-model="userAcademic"
            />
            <input
              class="userinput skills"
              type="text"
              placeholder="Any interesting skill you have? (seperated by a comma)"
              v-model="userSkills"
            />
            <textarea
              class="userinput bio"
              placeholder="Describe yourself to the recruiter"
              v-model="userBio"
            />
            <div class="buttons-wrapper">
              <button type="submit" class="apply-button">Confirm update info</button>
              <button type="submit" class="clear-button">Clear all</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <footer-page-component></footer-page-component>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { DatePicker, Tooltip } from 'element-ui';
import moment from 'moment';
import NavigationFrame from '../../components/NavigationFrame/NavigationFrame.vue';
import FooterPageComponent from '../../components/FooterPageComponent/FooterPageComponent.vue';

export default {
  name: 'edit-info-container',
  components: {
    'date-picker': DatePicker,
    'tool-tip': Tooltip,
    'navigation-frame': NavigationFrame,
    'footer-page-component': FooterPageComponent,
  },
  computed: {
    ...mapState('UserAuthorization', ['userFullInfo', 'userInfo']),
    fullName() {
      return `${this.userLastName} ${this.userFirstName}`;
    },
  },
  async mounted() {
    window.scrollTo(0, 0);
    document.querySelector('.firstName').focus();
    await this.getUserInfo();
    await this.getUserFullInfo();

    this.userLastName = `${this.userFullInfo.fullName.split(' ')[0].trim()}`;
    this.userFirstName = this.userFullInfo.fullName.substring(this.userFullInfo.fullName.indexOf(' '), this.userFullInfo.fullName.length).trim();
    this.userName = this.userFullInfo.userName;
    this.userEmail = this.userFullInfo.email;
    this.phoneNumber = this.userFullInfo.phoneNumber;
    if (!this.userFullInfo.dateOfBirth) {
      this.inputDate = '';
    } else {
      this.inputDate = moment(this.userFullInfo.dateOfBirth).format('YYYY-MM-DD');
    }
    this.userAcademic = this.userFullInfo.academic;

    let skillString = '';
    const skillArr = [];
    this.userFullInfo.skills.forEach((skill) => {
      skillArr.push(skill.skillName);
    });
    skillString = skillArr.join(', ');

    this.userSkills = skillString;
    this.userBio = this.userFullInfo.bio;
  },
  methods: {
    ...mapActions('EditInfoPage', ['updateUserInfo', 'getUserFullInfo']),
    ...mapActions('UserAuthorization', ['getUserFullInfo', 'getUserInfo']),
    handleGoBack() {
      this.$router.push({ name: 'account' });
      window.scrollTo(0, 0);
    },
    handleLogout() {
      localStorage.removeItem('LOGIN_TOKEN');
      this.$router.push({ name: 'login' });
      window.scrollTo(0, 0);
    },
    handleUpdateInfo() {
      if (this.userPassword !== this.userConfirmPassword) {
        this.$message({
          message: 'Password does not match',
          type: 'warning',
        });
        this.userPassword = '';
        this.userConfirmPassword = '';
        document.querySelector('.password').focus();
      } else {
        let month;
        let date;
        let dateString;
        if (this.inputDate instanceof Date) {
          month = this.inputDate.getMonth() + 1;
          date = this.inputDate.getDate();
          month = month < 10 ? `0${month}` : `${month}`;
          date = date < 10 ? `0${date}` : `${date}`;

          dateString = this.inputDate.getFullYear().toString() + month + date;
        } else {
          dateString = this.inputDate.split('-').join('');
        }

        let skills = [];
        if (this.userSkills) {
          skills = this.userSkills
            .trim()
            .split(',')
            .map(skill => skill.trim());
        } else {
          this.userSkills = null;
        }

        this.updateUserInfo({
          userName: this.userName,
          email: this.userEmail,
          fullName: this.fullName,
          password: this.userPassword,
          phoneNumber: this.phoneNumber,
          dateOfBirth: dateString,
          imageUrl: 'https://i.imgur.com/nb30rLD.jpg',
          bio: this.userBio,
          academic: this.userAcademic,
          skills,
        }).then(() => {
          this.$message({
            message: 'Update successfully!',
            type: 'info',
          });
          window.scrollTo(0, 0);
          this.userPassword = '';
          this.userConfirmPassword = '';
        }).catch(() => {
          this.$message({
            message: 'Update failed!',
            type: 'error',
          });
          window.scrollTo(0, 0);
          this.userPassword = '';
          this.userConfirmPassword = '';
        });
      }
    },
  },
  data() {
    return {
      userFirstName: '',
      userLastName: '',
      userName: '',
      userEmail: '',
      userPassword: '',
      userConfirmPassword: '',
      phoneNumber: '',
      inputDate: '',
      userAcademic: '',
      userSkills: '',
      userBio: '',
    };
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/EditInfoPage/EditInfoPage.scss';
</style>
