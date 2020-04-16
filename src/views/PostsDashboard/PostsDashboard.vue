<template>
  <!-- eslint-disable object-shorthand -->
  <!-- eslint-disable max-len -->
  <!-- eslint-disable prefer-const -->
  <!-- eslint-disable no-unused-vars -->
  <div>
    <div class="posts-dashboard-container">
      <div class="header">
        <h1 class="screen-title">Jobs</h1>
        <span class="desc-label">All of your posts are stored here</span>
      </div>
      <div class="content">
        <div class="main-col">
          <h3 class="instant-start-label">Available jobs</h3>
          <div class="marginT jobs-wrapper">
            <job-post
              v-for="(job, index) in jobList"
              :jobInfo="job"
              :key="index"
              @click.native="handlePostClick(job)"
            ></job-post>
          </div>
          <h3 class="marginT instant-start-label">Outdated jobs</h3>
          <div class="marginT jobs-wrapper">
            <job-post
              v-for="(job, index) in outdatedJobList"
              :jobInfo="job"
              :key="index"
              @click.native="handlePostClick(job)"
            ></job-post>
          </div>
        </div>
      </div>
    </div>
    <div class="update-wrapper" :class="{'display-update-container': updateClickedFlg}">
      <div class="update-container">
        <div class="row update-container-top-row">
          <svg
            class="icon close-update"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28.416 23.64"
            @click="handleCloseUpdateBox"
          >
            <path
              data-name="Path 322"
              d="M27.961,52.737,17.7,42.475a1.56,1.56,0,0,0-2.2,0l-.932.932a1.544,1.544,0,0,0-.454,1.1,1.574,1.574,0,0,0,.454,1.113l5.987,6H1.535A1.518,1.518,0,0,0,0,53.148v1.317a1.576,1.576,0,0,0,1.535,1.6H20.623L14.568,62.1a1.54,1.54,0,0,0,0,2.184l.932.929a1.56,1.56,0,0,0,2.2,0L27.961,54.945a1.568,1.568,0,0,0,0-2.207Z"
              transform="translate(0 -42.021)"
            />
          </svg>
          <a href class="delete-post-button" @click.prevent="handleDeletePost(updatePostID)">Delete this post</a>
        </div>
        <span class="postID-label">ID: #{{updatePostID}}</span>
        <form class="update-form" @submit.prevent="handleUpdatePost">
          <input
            class="userinput updateTitle"
            type="text"
            placeholder="New post title"
            v-model="updatePostTitle"
            required
          />
          <select
            name="address-dropdown"
            class="userinput address-dropdown"
            v-model="selectedBranchID"
          >
            <option value disabled selected>Select a city</option>
            <option
              v-for="(address, index) in addresses"
              :key="index"
              :value="address.addressBranchID"
            >{{address.address}}</option>
          </select>
          <select
            name="job-type-dropdown"
            class="userinput job-type-dropdown"
            v-model="selectedJobType"
          >
            <option value disabled selected>Specify job type</option>
            <option
              v-for="(type, index) in jobTypes"
              :key="index"
              :value="type.jobTypeID"
            >{{type.jobTypeName}}</option>
          </select>
          <input
            class="userinput updateSalary"
            type="number"
            placeholder="Monthly salary"
            v-model="updateSalaryValue"
            required
          />
          <input
            class="userinput updateSkills"
            type="text"
            placeholder="Skills (seperate skill by a comma)"
            v-model="updateSkillStringList"
            required
          />
          <date-picker type="date" placeholder="Valid until" v-model="updateValidUntil" clearable></date-picker>
          <textarea
            name="update-desc"
            class="userinput input-update-desc"
            cols="30"
            rows="10"
            placeholder="Give this post a more detail"
            v-model="updatePostDesc"
          ></textarea>
          <button type="submit" class="update-button">Confirm edit post</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { DatePicker } from 'element-ui';
import moment from 'moment';
import JobPost from '../../components/JobPost/JobPost.vue';

export default {
  name: 'post-dashboard',
  components: {
    'date-picker': DatePicker,
    'job-post': JobPost,
  },
  computed: {
    ...mapState('DropdownDataStore', ['addresses', 'jobTypes']),
    ...mapState('JobsDashboard', ['jobList', 'outdatedJobList']),
    ...mapState('UserAuthorization', ['userCompany']),
  },
  async mounted() {
    await this.getUserCompanyInfo();
    await this.initAddress(this.userCompany.compID);
    await this.initJobTypes();
    await this.initJobListByCompID(this.userCompany.compID);
    await this.initOutdatedJobListByCompID(this.userCompany.compID);
  },
  data() {
    return {
      updateClickedFlg: false,
      updatePostID: '',
      updatePostTitle: '',
      updateSalaryValue: '',
      updateSkillStringList: '',
      updateValidUntil: '',
      updatePostDesc: '',
      selectedBranchID: '',
      selectedJobType: '',
    };
  },
  methods: {
    ...mapActions('DropdownDataStore', ['initAddress', 'initJobTypes']),
    ...mapActions('JobsDashboard', [
      'initJobListByCompID',
      'initOutdatedJobListByCompID',
      'updateJobPost',
      'deletePost',
    ]),
    ...mapActions('UserAuthorization', ['getUserCompanyInfo']),

    handlePostClick(postInfo) {
      if (!this.updateClickedFlg) {
        this.updateClickedFlg = true;
        this.updatePostID = postInfo.postID;
        this.updatePostTitle = postInfo.postTitle;
        this.updateSalaryValue = postInfo.monthlySalary;

        const skills = [];
        postInfo.skills.forEach((el) => {
          skills.push(el.skillName);
        });
        const skillStringlist = skills.join(', ');
        this.updateSkillStringList = skillStringlist;
        this.updateValidUntil = moment(postInfo.expiryDateTime.substring(0, 8)).format(
          'YYYY-MM-DD',
        );

        this.updatePostDesc = postInfo.postDesc;
      } else {
        this.updateClickedFlg = false;
        setTimeout(() => {
          this.updateClickedFlg = true;
          this.updatePostID = postInfo.postID;
          this.updatePostTitle = postInfo.postTitle;
          this.updateSalaryValue = postInfo.monthlySalary;

          const skills = [];
          postInfo.skills.forEach((el) => {
            skills.push(el.skillName);
          });
          const skillStringlist = skills.join(', ');
          this.updateSkillStringList = skillStringlist;
          this.updateValidUntil = moment(postInfo.expiryDateTime.substring(0, 8)).format(
            'YYYY-MM-DD',
          );

          this.updatePostDesc = postInfo.postDesc;
        }, 800);
      }
    },
    handleCloseUpdateBox() {
      this.updateClickedFlg = false;
    },
    handleUpdatePost() {
      let month = '';
      let date = '';
      let stringDate = '';
      if (this.updateValidUntil instanceof Date) {
        month = this.updateValidUntil.getMonth() + 1;
        date = this.updateValidUntil.getDate();
        month = month < 10 ? `0${month}` : `${month}`;
        date = date < 10 ? `0${date}` : `${date}`;
        stringDate = this.updateValidUntil.getFullYear().toString() + month + date;
      } else {
        stringDate = this.updateValidUntil.split('-').join('');
      }

      const skills = this.updateSkillStringList
        .trim()
        .split(',')
        .map(skill => skill.trim());

      if (this.selectedBranchID && this.selectedJobType) {
        this.updateJobPost({
          postID: this.updatePostID,
          postInfo: {
            postTitle: this.updatePostTitle,
            postDesc: this.updatePostDesc,
            expiryDateTime: stringDate,
            monthlySalary: this.updateSalaryValue,
            skills,
            addressBranchID: this.selectedBranchID,
            jobTypeID: this.selectedJobType,
          },
        }).then(() => {
          this.initJobListByCompID(this.userCompany.compID).then(() => {
            this.initOutdatedJobListByCompID(this.userCompany.compID).then(() => {
              this.updateClickedFlg = false;
            });
          });
        });
      } else {
        this.$message({
          type: 'warning',
          message: 'Please select your address branch and type of the job',
        });
      }
    },
    handleDeletePost(postID) {
      this.$confirm('Are you sure you want to delete this post?', 'Delete post').then((msgdata) => {
        if (msgdata === 'confirm') {
          this.deletePost(postID).then(() => {
            this.initJobListByCompID(this.userCompany.compID);
            this.initOutdatedJobListByCompID(this.userCompany.compID);
          });
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/PostsDashboard/PostsDashboard.scss';
</style>
