<template>
  <!-- eslint-disable object-shorthand -->
  <!-- eslint-disable max-len -->
  <!-- eslint-disable prefer-const -->
  <!-- eslint-disable no-unused-vars -->
  <div class="main-dashboard-container">
    <div class="header">
      <h1 class="screen-title">Dashboard</h1>
      <span class="welcome-label">Welcome, {{userInfo.fullName}}</span>
    </div>
    <div class="content">
      <div class="main-col">
        <h3 class="instant-start-label">Instant start with these suggestions</h3>
        <div class="marginT start-wrapper">
          <div
            class="container-box post-job-container"
            @click="() => {
              if (this.$route.name !== 'postJob') {
                this.$router.push({name: 'postJob'})
              }
            }"
          >
            <svg
              class="icon post-job"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 79.586 79.582"
            >
              <g transform="translate(0 0)">
                <path
                  id="Path_136"
                  data-name="Path 136"
                  d="M275.985.629a1.815,1.815,0,0,0-1.3-.532,1.891,1.891,0,0,0-1.3.532L247.109,26.9l-.073.074L247,27.01c-.036.055-.091.11-.128.165,0,.018-.018.018-.018.037-.037.055-.056.092-.092.146-.019.018-.019.037-.037.055-.018.055-.036.092-.055.147,0,.018-.018.018-.018.036L241.973,41.7a1.807,1.807,0,0,0,.441,1.871,1.847,1.847,0,0,0,1.3.532,2.186,2.186,0,0,0,.588-.092l14.071-4.7c.018,0,.018,0,.036-.018a.653.653,0,0,0,.165-.073.065.065,0,0,0,.037-.019c.055-.036.128-.073.183-.11s.11-.092.165-.128c.019-.018.037-.018.037-.037.018-.018.055-.037.074-.073l26.288-26.289a1.826,1.826,0,0,0,0-2.587ZM249.2,31.6l5.192,5.192-7.779,2.586Zm8.586,3.394L251,28.2,274.682,4.518l6.787,6.787Zm0,0"
                  transform="translate(-206.31 -0.097)"
                />
                <path
                  id="Path_137"
                  data-name="Path 137"
                  d="M65.345,106.32a1.84,1.84,0,0,0-1.835,1.835v34.288a5.52,5.52,0,0,1-5.5,5.5H9.173a5.521,5.521,0,0,1-5.5-5.5V93.607a5.52,5.52,0,0,1,5.5-5.5H43.459a1.835,1.835,0,1,0,0-3.669H9.173A9.177,9.177,0,0,0,0,93.607v48.836a9.176,9.176,0,0,0,9.173,9.172H58.007a9.176,9.176,0,0,0,9.173-9.172V108.154a1.84,1.84,0,0,0-1.835-1.835Zm0,0"
                  transform="translate(0 -72.033)"
                />
              </g>
            </svg>
            <h2 class="container-title">Post jobs</h2>
            <span class="description">Find the best people for your team.</span>
          </div>
          <div
            class="container-box manage-post-container"
            @click="() => {this.$router.push({name: 'posts'})}"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon manage-post"
              viewBox="0 0 76.366 76.368"
            >
              <g id="portfolio" transform="translate(0 0)">
                <path
                  id="Path_138"
                  data-name="Path 138"
                  d="M61.758,22.187A1.492,1.492,0,0,0,63.25,20.7V4.475A4.48,4.48,0,0,0,58.775,0H4.482A4.48,4.48,0,0,0,.007,4.475V71.894a4.48,4.48,0,0,0,4.475,4.475H58.775a4.48,4.48,0,0,0,4.475-4.475V60.9a1.492,1.492,0,1,0-2.983,0V71.894a1.493,1.493,0,0,1-1.492,1.492H4.482A1.493,1.493,0,0,1,2.99,71.894V4.475A1.493,1.493,0,0,1,4.482,2.983H58.775a1.493,1.493,0,0,1,1.492,1.492V20.7A1.492,1.492,0,0,0,61.758,22.187Z"
                  transform="translate(-0.007)"
                />
                <path
                  id="Path_139"
                  data-name="Path 139"
                  d="M133.729,54a13.716,13.716,0,0,0-9.414,23.7,1.474,1.474,0,0,0,.16.149,13.7,13.7,0,0,0,18.508,0,1.492,1.492,0,0,0,.16-.149A13.715,13.715,0,0,0,133.729,54Zm0,24.462a10.682,10.682,0,0,1-6.487-2.188,7.458,7.458,0,0,1,12.974,0A10.682,10.682,0,0,1,133.729,78.462Zm-2.387-11.336v-.97a2.387,2.387,0,1,1,4.773,0v.97a2.387,2.387,0,1,1-4.773,0Zm11.029,6.963a10.348,10.348,0,0,0-4.395-3.684,5.341,5.341,0,0,0,1.122-3.279v-.97a5.37,5.37,0,1,0-10.739,0v.97a5.342,5.342,0,0,0,1.122,3.279,10.348,10.348,0,0,0-4.395,3.684,10.739,10.739,0,1,1,17.284,0Z"
                  transform="translate(-102.108 -45.946)"
                />
                <path
                  id="Path_141"
                  data-name="Path 141"
                  d="M136.679,382H115.5a1.492,1.492,0,0,0,0,2.983h21.18a1.492,1.492,0,1,0,0-2.983Z"
                  transform="translate(-97.003 -325.022)"
                />
                <path
                  id="Path_142"
                  data-name="Path 142"
                  d="M136.679,326H115.5a1.492,1.492,0,0,0,0,2.983h21.18a1.492,1.492,0,1,0,0-2.983Z"
                  transform="translate(-97.003 -277.375)"
                />
                <path
                  id="Path_146"
                  data-name="Path 146"
                  d="M136.679,270H115.5a1.492,1.492,0,1,0,0,2.983h21.18a1.492,1.492,0,1,0,0-2.983Z"
                  transform="translate(-97.003 -229.728)"
                />
                <path
                  id="Path_147"
                  data-name="Path 147"
                  d="M326.438,125.517a6.265,6.265,0,0,0-8.558,2.293l-18.77,32.511a1.494,1.494,0,0,0-.191.58L297.6,172.736a1.492,1.492,0,0,0,2.367,1.367l9.588-7.062a1.488,1.488,0,0,0,.407-.455l18.77-32.511A6.272,6.272,0,0,0,326.438,125.517Zm-25.5,44.161.69-6.18,4.317,2.492Zm7.182-5.876-5.684-3.281L317.5,134.432l5.684,3.281Zm18.024-31.219-1.47,2.547-5.684-3.281,1.47-2.547a3.281,3.281,0,0,1,5.684,3.281Z"
                  transform="translate(-253.203 -106.079)"
                />
              </g>
            </svg>
            <h2 class="container-title">Manage post</h2>
            <span class="description">View all hiring jobs.</span>
          </div>
        </div>
        <h3 class="statistic-label">Statistic</h3>
        <div class="marginT container-box statistic-wrapper">
          <div class="statistic-item">
            <h3 class="statictic-title">We have</h3>
            <span class="statistic-value">{{numberOfCurrentJob}}</span>
            <span class="statistic-desc">Jobs currently</span>
          </div>
          <div class="statistic-item">
            <h3 class="statictic-title">Outdated</h3>
            <span class="statistic-value">{{numberOfOutdatedJob}}</span>
            <span class="statistic-desc">Job(s)</span>
          </div>
          <div class="statistic-item">
            <h3 class="statictic-title">Achived</h3>
            <span class="statistic-value">{{numberOfAppliedCandidate}}</span>
            <span class="statistic-desc">Applied candidates</span>
          </div>
        </div>
      </div>

      <div class="candidates-col">
        <div class="candidates-title">
          <h2 class="title-label">Latest candidates</h2>
          <a
            href
            class="view-all-button"
            @click="(event) => {event.preventDefault(); this.$router.push({name: 'candidates'})}"
          >view all</a>
        </div>
        <div class="post-candidates-list">
          <candidate-post-preview :candidate="cand" v-for="(cand, index) in latestCandidates" :key="index"></candidate-post-preview>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import CandidatePostPreview from '../../components/CandidatePostPreview/CandidatePostPreview.vue';

export default {
  name: 'main-dashboard',
  components: {
    'candidate-post-preview': CandidatePostPreview,
  },
  computed: {
    ...mapState('MainDashboard', [
      'numberOfCurrentJob',
      'numberOfOutdatedJob',
      'numberOfAppliedCandidate',
      'latestCandidates',
    ]),
    ...mapState('UserAuthorization', [
      'userCompany',
      'userInfo',
    ]),
  },
  methods: {
    ...mapActions('MainDashboard', [
      'getNumberOfCurrentJob',
      'getNumberOfOutdatedJob',
      'getNumberOfAppliedCandidate',
      'getLatestCandidates',
    ]),
    ...mapActions('UserAuthorization', [
      'getUserCompanyInfo',
      'getUserInfo',
    ]),
  },
  async mounted() {
    await this.getUserInfo();
    await this.getUserCompanyInfo();
    await this.getNumberOfCurrentJob(this.userCompany.compID);
    await this.getNumberOfOutdatedJob(this.userCompany.compID);
    await this.getNumberOfAppliedCandidate(this.userCompany.compID);
    await this.getLatestCandidates(this.userCompany.compID);
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/_globalVariable.scss";

.main-dashboard-container {
  width: 100%;
  height: 100%;
  padding: 2rem 2rem 0 2rem;
  color: $fontColor;

  .header {
    width: 100%;
    color: $darkBlueGray;

    .welcome-label {
      color: $subfontColor;
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 2.5rem;

    .main-col {
      flex-basis: 50%;
      display: flex;
      flex-direction: column;

      .icon {
        fill: $iconColor;
        width: 50px;
        height: 50px;
      }

      .marginT {
        margin-top: 2rem;
      }

      .start-wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .container-title {
          margin-top: 1rem;
        }

        .description {
          display: block;
          margin-top: 0.5rem;
          color: $subfontColor;
        }

        .post-job-container {
          flex-basis: 48%;
          &:hover {
            cursor: pointer;
          }
        }

        .manage-post-container {
          flex-basis: 48%;
          &:hover {
            cursor: pointer;
          }
        }
      }

      .statistic-label {
        margin-top: 3rem;
      }

      .statistic-wrapper {
        display: flex;
        justify-content: space-between;

        .statistic-value {
          display: block;
          margin-top: 1rem;
          font-size: 2rem;
          font-weight: bolder;
          color: #adadad;
          animation: rgb-label infinite 15s;
        }

        .statistic-desc {
          display: block;
          margin-top: 1rem;
        }
      }
    }

    .candidates-col {
      flex-basis: 25%;

      .candidates-title {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        .title-label {
          font-size: 28px;
        }
        .view-all-button {
          color: #009fa5;
          font-weight: bold;
          animation: rgb-label infinite 15s;
        }
      }

      .post-candidates-list {
        margin-top: 1.5rem;
      }

      .candidate-post-preview {
        margin-bottom: 16px;
      }
    }
  }

  .container-box {
    border-radius: 15px;
    box-shadow: 4px 4px 8px #0000003b, -4px -4px 10px #ffffffbb;
    padding: 2rem;
    transition: all ease-in-out 500ms;
  }
}
</style>
