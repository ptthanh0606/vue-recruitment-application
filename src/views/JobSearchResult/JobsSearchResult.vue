<template>
  <!-- eslint-disable object-shorthand -->
  <!-- eslint-disable max-len -->
  <!-- eslint-disable prefer-const -->
  <!-- eslint-disable no-unused-vars -->
  <div>
    <navigation-frame></navigation-frame>
    <div class="JobSearchResult-container">
      <div class="JobSearchResult-wrapper">
        <div class="left-col">
          <div class="user-info-wrapper">
            <div class="user-avatar">
              <a href="#">
                <img :src="this.userInfoLocal.imageUrl" height="50px" width="80px" alt />
              </a>
            </div>
            <a href="#" class="user-name">{{ this.userInfoLocal.fullName }}</a>
            <span class="user-email">{{ this.userInfoLocal.email }}</span>
            <div class="log-out-wrapper" v-if="this.loginFlg">
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
              <a href @click="handleLogout">Log out</a>
            </div>
          </div>

          <form class="search-wrapper" @submit="this.handleSearchFullInfo">
            <h3 class="search-label">Search for jobs</h3>
            <div class="input-box">
              <input
                class="search-box"
                type="text"
                placeholder="Your dream job?"
                v-model="searchJobNameValue"
              />
            </div>
            <div class="input-box">
              <input
                class="search-box"
                type="text"
                placeholder="Desired company?"
                v-model="searchCompanyNameValue"
              />
            </div>
            <div class="input-box">
              <select name="selectedCity" id="city-select-box" @change="this.handleDropdownchange">
                <option value disabled selected>Your city?</option>
                <option
                  :value="city.id"
                  v-for="(city, index) in cityListLocal"
                  :key="index"
                >{{city.name}}</option>
              </select>
            </div>
            <button type="submit" class="input-box button-box">
              <span class="button-label">Discover</span>
              <svg class="search-icon" viewBox="0 0 512 500" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z"
                />
              </svg>
            </button>
          </form>
        </div>

        <div class="middle-col" v-if="isLoaded">
          <div class="search-result-number">
            <span class="found-label">Found</span>
            <h1 class="number-of-results">{{ this.postCount }}</h1>
            <h3 class="desired-job-name">{{ this.searchJobInput }} Jobs</h3>
          </div>
          <div class="job-list-result">
            <div class="job-column" v-for="(postCol, index) in jobResultCol" :key="index">
              <job-card
                @click.native="handleViewPostDetail(postInfo.postID)"
                v-for="(postInfo, index) in postCol"
                :key="index"
                :postInfo="postInfo"
              ></job-card>
            </div>
          </div>
        </div>
        <div v-else class="loading-overlay">
          <div class="loading-icon"></div>
        </div>

        <div class="right-col" :class="{'display': detailDisplayFlg}">
          <div class="company-image-detail-wrapper">
            <img :src="this.jobDetailLocal.imageUrl" class="company-logo-detail" />
          </div>
          <h3 class="company-title-detail">{{ this.jobDetailLocal.compName }}</h3>
          <span class="company-type-detail">{{ this.jobDetailLocal.compType }}</span>
          <div class="post-title-wrapper-detail">
            <h3 class="post-title-detail">{{ this.jobDetailLocal.postTitle }}</h3>
            <span
              class="post-until-detail"
            >until {{ this.jobDetailLocal.expiryDateTime | filterDateTime }}</span>
          </div>
          <div class="address-wrapper-detail">
            <svg
              class="location-pin"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 13.99 19.315"
            >
              <path
                class="cls-1"
                d="M54.687,0a7,7,0,0,0-7,7c0,4.787,6.26,11.814,6.526,12.111a.63.63,0,0,0,.937,0c.267-.3,6.526-7.324,6.526-12.111A7,7,0,0,0,54.687,0Zm0,10.514A3.519,3.519,0,1,1,58.206,7,3.523,3.523,0,0,1,54.687,10.514Z"
                transform="translate(-47.692 0)"
              />
            </svg>
            <span class="address-detail">{{ this.jobDetailLocal.address }}</span>
          </div>
          <div class="skills-wrapper-detail">
            <div
              class="skill-detail"
              v-for="(skill, index) in this.jobDetailLocal.skills"
              :key="index"
            >{{ skill.skillName }}</div>
          </div>
          <h4 class="post-type-detail">{{ this.jobDetailLocal.jobType }}</h4>
          <span class="monthly-salary-detail">${{ this.jobDetailLocal.monthlySalary }}</span>
          <h3 class="description-label-detail">Description</h3>
          <div class="description-detail">{{ this.jobDetailLocal.postDesc }}</div>
          <div class="button-wrapper">
            <button v-if="loginFlg" class="button apply" @click="handleApplyButton">Apply now</button>
            <span v-else class="login-alert">Please login to apply for this job</span>
            <button class="button cancel" @click="handleCancelButton">Cancel</button>
          </div>
        </div>

        <div
          class="detail-loading-overlay"
          :class="[{'done-load' : detailLoadFlg}, {'loading': detailDisplayFlg}]"
        >
          <div class="loading-icon"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
import { mapState, mapActions } from 'vuex';
import JobPreviewCard from '../../components/JobPreviewCard/JobPreviewCard.vue';
import NavigationFrame from '../../components/NavigationFrame/NavigationFrame.vue';

export default {
  name: 'jobs-search-result',
  components: {
    'job-card': JobPreviewCard,
    'navigation-frame': NavigationFrame,
  },
  computed: {
    ...mapState('JobSearchResult', [
      'jobsList',
      'allPostCount',
      'userInfo',
      'cityList',
      'jobDetail',
    ]),
  },
  filters: {
    filterDateTime(stringDate) {
      return moment(stringDate.slice(0, 7)).format('MMMM Do YYYY');
    },
  },
  methods: {
    ...mapActions('JobSearchResult', [
      'initAllJobs',
      'initAllPostCount',
      'initDropdownCity',
      'authorizationBearer',
      'searchJobByName',
      'searchJobByFullInfo',
      'getJobDetail',
    ]),
    handleDropdownchange(event) {
      this.selectedCityName = event.target.value;
    },
    handleSearchFullInfo(event) {
      window.scrollTo(0, 0);
      event.preventDefault();

      this.searchJobByFullInfo({
        limit: 10,
        page: 0,
        jobName: this.searchJobNameValue,
        searchCompName: this.searchCompanyNameValue,
        searchAddress: this.selectedCityName,
      }).then(() => {
        this.searchJobInput = this.searchJobNameValue;
        this.jobResultCol.length = 0;
        const colleft = this.jobsList.slice(0, this.jobsList.length / 2);
        const colright = this.jobsList.slice(
          this.jobsList.length / 2,
          this.jobsList.length,
        );
        this.jobResultCol.push(colleft);
        this.jobResultCol.push(colright);
        this.postCount = this.jobsList.length;
      });
    },
    handleLogout(event) {
      event.preventDefault();
      localStorage.removeItem('LOGIN_TOKEN');
      this.$router.push({ name: 'welcome' });
    },
    handleViewPostDetail(postID) {
      if (!this.detailDisplayFlg) {
        this.detailDisplayFlg = true;
        this.getJobDetail({ postID }).then(() => {
          this.jobDetailLocal = this.jobDetail;
          setTimeout(() => {
            this.detailLoadFlg = true;
          }, 2000);
        });
      } else {
        this.detailDisplayFlg = false;
        this.detailLoadFlg = false;
        setTimeout(() => {
          this.detailDisplayFlg = true;
        }, 800);
        this.getJobDetail({ postID }).then(() => {
          this.jobDetailLocal = this.jobDetail;
          setTimeout(() => {
            this.detailLoadFlg = true;
          }, 2000);
        });
      }
    },
    handleApplyButton() {},
    handleCancelButton() {
      this.detailDisplayFlg = false;
      this.detailLoadFlg = false;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.authorizationBearer()
      .then(() => {
        this.userInfoLocal = this.userInfo;
        this.loginFlg = true;
      })
      .catch(() => {
        this.userInfoLocal = {
          email: '',
          fullName: 'Guest',
          imageUrl: 'https://i.imgur.com/nb30rLD.jpg',
        };
        this.loginFlg = false;
      });

    this.initDropdownCity().then(() => {
      this.cityListLocal = this.cityList;
    });

    if (this.$route.query.jobName) {
      this.searchJobInput = this.$route.query.jobName;
      this.searchJobByName(this.$route.query).then(() => {
        this.jobResultCol.length = 0;
        const colleft = this.jobsList.slice(0, this.jobsList.length / 2);
        const colright = this.jobsList.slice(
          this.jobsList.length / 2,
          this.jobsList.length,
        );
        this.jobResultCol.push(colleft);
        this.jobResultCol.push(colright);
        this.postCount = this.jobsList.length;
        this.isLoaded = true;
      });
    } else {
      this.initAllJobs({
        limit: 10,
        page: 0,
      }).then(() => {
        this.jobResultCol.length = 0;
        const colleft = this.jobsList.slice(0, this.jobsList.length / 2);
        const colright = this.jobsList.slice(
          this.jobsList.length / 2,
          this.jobsList.length,
        );
        this.jobResultCol.push(colleft);
        this.jobResultCol.push(colright);
        this.postCount = this.jobsList.length;
        this.isLoaded = true;
      });
    }
  },
  data() {
    return {
      jobResultCol: [],
      postCount: 0,
      searchJobInput: '',
      userInfoLocal: {},
      cityListLocal: [],
      selectedCityName: '',
      searchJobNameValue: '',
      searchCompanyNameValue: '',
      loginFlg: false,
      isLoaded: false,
      detailDisplayFlg: false,
      detailLoadFlg: false,
      jobDetailLocal: {
        postID: '120200327175012',
        imageUrl: 'https://i.imgur.com/iVtNw0H.png',
        compName: 'FACEBOOK',
        compType: 'OUTSOURCE',
        postTitle: 'dasdds',
        expiryDateTime: '20201221111111',
        address: 'Ho Chi Minh',
        jobType: 'Full-time',
        monthlySalary: 10000,
        postDesc: 'dasd as dasd sad asdasdasdasd asd asdsa dasdas',
        skills: [
          {
            skill_ID: '1',
            skillName: 'JAVA',
          },
          {
            skill_ID: '2',
            skillName: 'GAF',
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
@import "../../../src/assets/scss/JobSearchResults/JobSearchResult.scss";
</style>
