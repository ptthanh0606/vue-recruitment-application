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
            <div class="job-column" v-for="(postCol, index) in this.jobResultCol" :key="index">
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
          :class="[{'done-load' : detailLoadFlg}, {'loading': loadingDisplayFlg}]"
        >
          <div class="loading-icon"></div>
        </div>
      </div>
    </div>
    <div class="lazy-load-mark"></div>
    <span class="eor-label">Not found what you want? Try searching for another job.</span>

    <footer-page-component></footer-page-component>
  </div>
</template>
<script>
import moment from 'moment';
import { mapState, mapActions } from 'vuex';
import JobPreviewCard from '../../components/JobPreviewCard/JobPreviewCard.vue';
import NavigationFrame from '../../components/NavigationFrame/NavigationFrame.vue';
import FooterPageComponent from '../../components/FooterPageComponent/FooterPageComponent.vue';

export default {
  name: 'jobs-search-result',
  components: {
    'job-card': JobPreviewCard,
    'navigation-frame': NavigationFrame,
    'footer-page-component': FooterPageComponent,
  },
  computed: {
    ...mapState('JobSearchResult', ['jobsList', 'postCount', 'jobDetail']),
    ...mapState('DropdownDataStore', ['cityList', 'companyTypes']),
    ...mapState('UserAuthorization', ['userInfo']),
  },
  filters: {
    filterDateTime(stringDate) {
      return moment(stringDate.slice(0, 8)).format('MMMM Do YYYY');
    },
  },
  methods: {
    ...mapActions('DropdownDataStore', ['initCity', 'initCompanyTypes']),
    ...mapActions('UserAuthorization', ['getUserInfo']),
    ...mapActions('JobSearchResult', [
      'initAllJobs',
      'searchJobByName',
      'searchJobByFullInfo',
      'getJobDetail',
      'getNumberOfAllPost',
      'getNumberOfSearchPostByName',
      'getNumberOfSearchPostByFullInfo',
      'applyForJob',
    ]),
    handleDropdownchange(event) {
      this.selectedCityID = event.target.value;
    },
    async handleSearchFullInfo(event) {
      this.pageLoadCount = 1;
      this.observerInstance.unobserve(document.querySelector('.lazy-load-mark'));

      window.scrollTo(0, 0);
      event.preventDefault();

      await this.searchJobByFullInfo({
        limit: 5,
        page: 0,
        jobName: this.searchJobNameValue,
        searchCompName: this.searchCompanyNameValue,
        cityID: this.selectedCityID,
      });
      this.searchJobInput = this.searchJobNameValue;
      this.jobResultCol.length = 0;
      const colleft = this.jobsList.slice(0, this.jobsList.length / 2);
      const colright = this.jobsList.slice(
        this.jobsList.length / 2,
        this.jobsList.length,
      );
      if (colleft.length) {
        this.jobResultCol.push(colleft);
      }
      if (colright.length) {
        this.jobResultCol.push(colright);
      }
      this.getNumberOfSearchPostByFullInfo({
        jobName: this.searchJobNameValue,
        searchCompName: this.searchCompanyNameValue,
        cityID: this.selectedCityID,
      });

      setTimeout(() => {
        this.observerInstance = new IntersectionObserver(
          () => {
            this.searchJobByFullInfo({
              limit: 5,
              page: this.pageLoadCount,
              jobName: this.searchJobNameValue,
              searchCompName: this.searchCompanyNameValue,
              cityID: this.selectedCityID,
            }).then(() => {
              if (this.jobsList.length) {
                this.pageLoadCount += 1;
                let colleftlocal = [];
                let colrightlocal = [];
                if (this.jobResultCol[0].length < this.jobResultCol[1].length) {
                  colleftlocal = this.jobsList.slice(
                    this.jobsList.length / 2,
                    this.jobsList.length,
                  );
                  colrightlocal = this.jobsList.slice(0, this.jobsList.length / 2);
                } else {
                  colleftlocal = this.jobsList.slice(0, this.jobsList.length / 2);
                  colrightlocal = this.jobsList.slice(
                    this.jobsList.length / 2,
                    this.jobsList.length,
                  );
                }

                const left = [...this.jobResultCol[0], ...colleftlocal];
                const right = [...this.jobResultCol[1], ...colrightlocal];

                this.jobResultCol.length = 0;
                this.jobResultCol.push(left);
                this.jobResultCol.push(right);
              }
            });
          },
          {
            threshold: 0.1,
          },
        );
        this.observerInstance.observe(document.querySelector('.lazy-load-mark'));
      }, 1000);
    },
    handleLogout(event) {
      event.preventDefault();
      localStorage.removeItem('LOGIN_TOKEN');
      this.$router.push({ name: 'welcome' });
    },
    handleViewPostDetail(postID) {
      this.selectedPostID = postID;
      if (!this.detailDisplayFlg) {
        this.loadingDisplayFlg = true;
        this.getJobDetail({ postID }).then(() => {
          this.jobDetailLocal = this.jobDetail;
          setTimeout(() => {
            this.detailDisplayFlg = true;
            this.loadingDisplayFlg = false;
            this.detailLoadFlg = true;
            setTimeout(() => {
              this.detailLoadFlg = false;
            }, 100);
          }, 2000);
        });
      } else {
        this.loadingDisplayFlg = true;
        setTimeout(() => {
          this.detailDisplayFlg = false;
          this.getJobDetail({ postID }).then(() => {
            this.jobDetailLocal = this.jobDetail;
            setTimeout(() => {
              this.detailDisplayFlg = true;
              this.loadingDisplayFlg = false;
              this.detailLoadFlg = true;
              setTimeout(() => {
                this.detailLoadFlg = false;
              }, 100);
            }, 2000);
          });
        }, 1000);
      }
    },
    handleApplyButton() {
      this.applyForJob(this.selectedPostID).then(() => {
        this.$message({
          type: 'success',
          message: 'You info is sent to the recruiter. Good luck!',
          customClass: 'custom-confirm-button',
        });
      }).catch(() => {
        this.$alert('You have applied for this job!', {
          type: 'warning',
          showClose: true,
          showConfirmButton: false,
        });
      });
    },
    handleCancelButton() {
      this.detailDisplayFlg = false;
      this.detailLoadFlg = false;
    },
  },
  async mounted() {
    window.scrollTo(0, 0);

    await this.initCity();
    this.cityListLocal = this.cityList;

    try {
      await this.getUserInfo();
      if (this.userInfo) {
        this.loginFlg = true;
      }
    } catch (error) {
      this.loginFlg = false;
    }

    if (this.$route.query.jobName) {
      this.searchJobInput = this.$route.query.jobName;
      await this.searchJobByName({
        limit: 5,
        page: 0,
        jobName: this.$route.query.jobName,
      });
      this.jobResultCol.length = 0;
      const colleft = this.jobsList.slice(0, this.jobsList.length / 2);
      const colright = this.jobsList.slice(
        this.jobsList.length / 2,
        this.jobsList.length,
      );
      this.jobResultCol.push(colleft);
      this.jobResultCol.push(colright);
      await this.getNumberOfSearchPostByName(this.$route.query.jobName);
      this.isLoaded = true;
      this.pageLoadType = 'byName';
    } else {
      await this.initAllJobs({
        limit: 5,
        page: 0,
      });
      this.jobResultCol.length = 0;
      const colleft = this.jobsList.slice(0, this.jobsList.length / 2);
      const colright = this.jobsList.slice(
        this.jobsList.length / 2,
        this.jobsList.length,
      );
      this.jobResultCol.push(colleft);
      this.jobResultCol.push(colright);
      await this.getNumberOfAllPost();
      this.isLoaded = true;
      this.pageLoadType = 'init';
    }

    switch (this.pageLoadType) {
      case 'init':
        setTimeout(() => {
          this.observerInstance = new IntersectionObserver(
            () => {
              this.initAllJobs({
                limit: 5,
                page: this.pageLoadCount,
                // eslint-disable-next-line no-loop-func
              }).then(() => {
                if (this.jobsList.length) {
                  this.pageLoadCount += 1;
                  let colleft = [];
                  let colright = [];
                  if (
                    this.jobResultCol[0].length < this.jobResultCol[1].length
                  ) {
                    colleft = this.jobsList.slice(
                      this.jobsList.length / 2,
                      this.jobsList.length,
                    );
                    colright = this.jobsList.slice(0, this.jobsList.length / 2);
                  } else {
                    colleft = this.jobsList.slice(0, this.jobsList.length / 2);
                    colright = this.jobsList.slice(
                      this.jobsList.length / 2,
                      this.jobsList.length,
                    );
                  }

                  const left = [...this.jobResultCol[0], ...colleft];
                  const right = [...this.jobResultCol[1], ...colright];

                  this.jobResultCol.length = 0;
                  this.jobResultCol.push(left);
                  this.jobResultCol.push(right);
                }
              });
            },
            {
              threshold: 0.1,
            },
          );
          this.observerInstance.observe(document.querySelector('.lazy-load-mark'));
        }, 500);
        break;

      case 'byName':
        setTimeout(() => {
          this.observerInstance = new IntersectionObserver(
            () => {
              this.searchJobByName({
                limit: 5,
                page: this.pageLoadCount,
                jobName: this.$route.query.jobName,
              }).then(() => {
                if (this.jobsList.length) {
                  this.pageLoadCount += 1;

                  const colleft = this.jobsList.slice(
                    0,
                    this.jobsList.length / 2,
                  );
                  const colright = this.jobsList.slice(
                    this.jobsList.length / 2,
                    this.jobsList.length,
                  );
                  const left = [...this.jobResultCol[0], ...colleft];
                  const right = [...this.jobResultCol[1], ...colright];

                  this.jobResultCol.length = 0;
                  this.jobResultCol.push(left);
                  this.jobResultCol.push(right);
                }
              });
            },
            {
              threshold: 0.1,
            },
          );
          this.observerInstance.observe(document.querySelector('.lazy-load-mark'));
        }, 500);
        break;

      default:
        break;
    }
  },
  data() {
    return {
      selectedPostID: '',
      jobResultCol: [],
      searchJobInput: '',
      userInfoLocal: {},
      cityListLocal: [],
      selectedCityID: '',
      searchJobNameValue: '',
      searchCompanyNameValue: '',
      loginFlg: false,
      isLoaded: false,
      detailDisplayFlg: false,
      loadingDisplayFlg: false,
      detailLoadFlg: false,
      pageLoadCount: 1,
      pageLoadType: '',
      observerInstance: {},
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
