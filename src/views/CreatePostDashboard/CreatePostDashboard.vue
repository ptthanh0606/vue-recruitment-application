<template>
  <!-- eslint-disable object-shorthand -->
  <!-- eslint-disable max-len -->
  <!-- eslint-disable prefer-const -->
  <!-- eslint-disable no-unused-vars -->
  <div class="post-job-dashboard-container">
    <div class="header">
      <h1 class="screen-title">Post your job</h1>
      <span class="welcome-label">It's time to recruit somebody for your team</span>
    </div>
    <div class="content">
      <div class="main-col">
        <form class="create-form" @submit="handleCreatePost">
          <input
            class="userinput createTitle"
            type="text"
            placeholder="New post title"
            v-model="createPostTitle"
            required
          />
          <select name="address-dropdown" class="userinput address-dropdown" v-model="selectedCity">
            <option value disabled selected>Select a city</option>
            <option v-for="(address, index) in addresses" :key="index" :value="address.addressBranchID">{{address.address}}</option>
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
            class="userinput createSalary"
            type="number"
            placeholder="Monthly salary"
            v-model="createSalaryValue"
            required
          />
          <input
            class="userinput createSkills"
            type="text"
            placeholder="Skills (seperate skill by a comma)"
            v-model="createSkillStringList"
            required
          />
          <date-picker
            name="create-post-date-picker"
            type="date"
            placeholder="Valid until"
            v-model="createValidUntil"
            clearable
          ></date-picker>
          <textarea
            name="create-desc"
            class="userinput input-create-desc"
            cols="30"
            rows="10"
            placeholder="Give this post a more detail"
            v-model="createPostDesc"
          ></textarea>
          <button type="submit" class="create-button">Confirm edit post</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { DatePicker } from 'element-ui';

export default {
  name: 'post-job-dashboard',
  components: {
    'date-picker': DatePicker,
  },
  computed: {
    ...mapState('DropdownDataStore', ['addresses', 'jobTypes']),
    ...mapState('UserAuthorization', ['userCompany']),
  },
  async mounted() {
    await this.getUserCompanyInfo();
    await this.initAddress(this.userCompany.compID);
    await this.initJobTypes();
  },
  methods: {
    ...mapActions('PostJobDashboard', ['createPost']),
    ...mapActions('DropdownDataStore', ['initAddress', 'initCompanyTypes', 'initJobTypes']),
    ...mapActions('UserAuthorization', ['getUserCompanyInfo']),
    handleCreatePost(event) {
      event.preventDefault();
      const skills = this.createSkillStringList
        .trim()
        .split(',')
        .map(skill => skill.trim());
      let selectedMonth = this.createValidUntil.getMonth() + 1;
      selectedMonth = selectedMonth < 10 ? `0${selectedMonth}` : `${selectedMonth}`;
      const stringDate = `${this.createValidUntil.getFullYear()}${selectedMonth}${this.createValidUntil.getDate()}`;

      this.createPost({
        postTitle: this.createPostTitle,
        monthlySalary: this.createSalaryValue,
        skills,
        expiryDateTime: stringDate,
        addressBranchID: this.selectedCity,
        jobTypeID: this.selectedJobType,
        postDesc: this.createPostDesc,
      });
    },
  },
  data() {
    return {
      createPostTitle: '',
      createSalaryValue: '',
      createSkillStringList: '',
      createValidUntil: '',
      selectedCity: '',
      selectedJobType: '',
      createPostDesc: '',
    };
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/CreatePostDashboard/CreatePostDashboard.scss';
</style>
