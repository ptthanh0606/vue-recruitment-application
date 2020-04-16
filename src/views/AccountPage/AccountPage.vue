<template>
  <!-- eslint-disable object-shorthand -->
  <!-- eslint-disable max-len -->
  <!-- eslint-disable prefer-const -->
  <!-- eslint-disable no-unused-vars -->
  <div>
    <navigation-frame></navigation-frame>
    <div class="account-page-container">
      <div class="center-wrapper">
        <div class="left-col">
          <div class="user-info-wrapper">
            <div class="user-avatar">
              <a href="#">
                <img src="https://i.imgur.com/nb30rLD.jpg" height="50px" width="80px" alt />
              </a>
            </div>
            <a href="#" class="user-name">{{ this.userInfoLocal.fullName }}</a>
            <span class="user-email">{{this.userInfoLocal.email}}</span>
          </div>
          <a href @click.prevent="handleEditInfoRoute" class="edit-info-label">Edit your info</a>
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

        <div class="middle-col" v-if="isLoaded">
          <h1 class="application-title">Your applications</h1>
          <div class="no-result-wrapper" v-if="!this.appliedPosts.length">
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

            <span class="no-result-label">You have not applied to any company.</span>
            <a href class="find-job-button" @click.prevent="handleFindJob">Find your job now.</a>
          </div>
          <job-post
            v-for="(post, index) in appliedPosts"
            :jobInfo="post"
            :key="index"
            :isCandidate="true"
          ></job-post>
        </div>

        <div v-else class="loading-overlay">
          <div class="loading-icon"></div>
        </div>
      </div>
    </div>
    <footer-page-component></footer-page-component>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import NavigationFrame from '../../components/NavigationFrame/NavigationFrame.vue';
import JobPost from '../../components/JobPost/JobPost.vue';
import FooterPageComponent from '../../components/FooterPageComponent/FooterPageComponent.vue';

export default {
  name: 'account-page',
  components: {
    'navigation-frame': NavigationFrame,
    'job-post': JobPost,
    'footer-page-component': FooterPageComponent,
  },
  computed: {
    ...mapState('UserAuthorization', ['userInfo']),
    ...mapState('AccountPage', ['appliedPosts']),
  },
  async mounted() {
    window.scrollTo(0, 0);
    try {
      await this.getUserInfo();
      this.userInfoLocal = this.userInfo;
    } catch (error) {
      this.$message('No session');
      setTimeout(() => {
        this.$router.push({ name: 'login' });
        window.scrollTo(0, 0);
      }, 2000);
    }

    try {
      await this.getAllAppliedPosts({ page: 0, limit: 10 });
      this.isLoaded = true;
    } catch (error) {
      this.$message('Server error');
    }
  },
  methods: {
    ...mapActions('UserAuthorization', ['getUserInfo']),
    ...mapActions('AccountPage', ['getAllAppliedPosts']),
    handleLogout() {
      localStorage.removeItem('LOGIN_TOKEN');
      this.$router.push({ name: 'login' });
      window.scrollTo(0, 0);
    },
    handleEditInfoRoute() {
      this.$router.push({ name: 'editInfo' });
      window.scrollTo(0, 0);
    },
    handleFindJob() {
      this.$router.push({ name: 'jobs' });
      window.scrollTo(0, 0);
    },
  },
  data() {
    return {
      userInfoLocal: {},
      isLoaded: false,
    };
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/AccountPage/AccountPage.scss';
</style>
