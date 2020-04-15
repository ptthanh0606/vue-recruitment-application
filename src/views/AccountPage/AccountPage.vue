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
    },
    handleEditInfoRoute() {
      this.$router.push({ name: 'editInfo' });
    },
    handleFindJob() {
      this.$router.push({ name: 'jobs' });
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
@import "../../assets/scss/_globalVariable.scss";

.account-page-container {
  padding: 5rem 0;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;

  .center-wrapper {
    width: 100%;
    max-width: 1350px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

    .left-col {
      position: sticky;
      top: 5rem;
      width: 240px;
      height: 80vh;

      @media only screen and (max-width: 769px) {
        width: 100%;
      }

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .user-info-wrapper {
        margin-top: 3rem;
        height: 130px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .user-avatar {
          width: 3.5rem;
          height: 3.5rem;
          overflow: hidden;
          border-radius: 30px;
          margin-bottom: 2rem;
        }

        .user-name {
          width: fit-content;
          color: $fontColor;
          font-size: 18px;
          font-weight: bolder;
        }

        .user-email {
          color: $subfontColor;
          font-weight: normal;
          font-size: 14px;
        }
      }

      .edit-info-label {
        display: block;
        font-size: 14px;
        font-weight: bold;
        margin-top: 1rem;
        color: $pColorPink;
      }

      .log-out-wrapper {
        margin-top: auto;
        display: flex;
        align-items: center;

        #log-out-icon {
          width: 14px;
          margin-right: 10px;
          fill: $pColorBlue;
        }

        a {
          color: $pColorBlue;
        }
      }
    }

    .middle-col {
      padding: 3rem 32px;
      width: 900px;

      @media only screen and (max-width: 769px) {
        padding: 0;
      }

      .job-post {
        margin-bottom: 2rem;
      }

      .application-title {
        margin-bottom: 3rem;
        color: $titleFontColor;
      }

      .no-result-wrapper {
        display: flex;
        align-items: center;

        .icon {
          width: 16px;
          height: 16px;
          fill: $subfontColor;
          margin-right: 10px;
        }

        .no-result-label {
          display: block;
          color: $subfontColor;
          margin-right: 5px;
        }

        .find-job-button {
          color: $pColorPink;
          font-weight: bold;
          display: block;
        }
      }
    }

    .loading-overlay {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .loading-icon {
      width: 50px;
      height: 50px;
      background-color: $backgroundColor;
      border-radius: 1000px;
      position: relative;

      &:before,
      &:after {
        content: "";
        position: absolute;
        display: block;
        width: 50px;
        height: 50px;
        border-radius: 1000px;
        z-index: -1;
      }

      &:before {
        background-color: $pColorYellow;
        animation: selection-cw-animate infinite 1s;
      }

      &:after {
        background-color: $pColorPink;
        animation: selection-ccw-animate infinite 1.5s;
      }
    }

    @keyframes selection-cw-animate {
      0% {
        top: -5%;
        left: 0;
      }

      25% {
        top: 0;
        left: 5%;
      }

      50% {
        top: 5%;
        left: 0;
      }

      75% {
        top: 0;
        left: -5%;
      }

      100% {
        top: -5%;
        left: 0;
      }
    }

    @keyframes selection-ccw-animate {
      0% {
        top: -5%;
        left: 0;
      }

      25% {
        top: 0;
        left: -5%;
      }

      50% {
        top: 5%;
        left: 0;
      }

      75% {
        top: 0;
        left: 5%;
      }

      100% {
        top: -5%;
        left: 0;
      }
    }
  }
}
</style>
