<template>
  <!-- eslint-disable object-shorthand -->
  <!-- eslint-disable max-len -->
  <!-- eslint-disable prefer-const -->
  <!-- eslint-disable no-unused-vars -->
  <div class="job-post">
    <div class="row job-container-title">
      <h3>{{jobInfo.postTitle}}</h3>
      <span class="until-date">Until {{jobInfo.expiryDateTime | filterDateTime}}</span>
    </div>
    <div class="row address-n-type-container">
      <div class="address-wrapper-detail">
        <svg class="location-pin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.99 19.315">
          <path
            class="cls-1"
            d="M54.687,0a7,7,0,0,0-7,7c0,4.787,6.26,11.814,6.526,12.111a.63.63,0,0,0,.937,0c.267-.3,6.526-7.324,6.526-12.111A7,7,0,0,0,54.687,0Zm0,10.514A3.519,3.519,0,1,1,58.206,7,3.523,3.523,0,0,1,54.687,10.514Z"
            transform="translate(-47.692 0)"
          />
        </svg>
        <span class="address-detail">{{jobInfo.address}}</span>
      </div>
      <span class="job-type">{{jobInfo.jobType}}</span>
    </div>
    <div class="row skills-n-salary-wrapper">
      <div class="skills-wrapper-detail">
        <div v-for="(skill, index) in jobInfo.skills" :key="index" class="skill-detail">{{skill.skillName}}</div>
      </div>
      <span class="salary">${{jobInfo.monthlySalary}}</span>
    </div>
    <div v-if="isCandidate" class="row candidate-interview-date-wrapper">
      <span class="inteview-date">Interview on</span>
      <span v-if="jobInfo.interviewDateTime" class="interview-label">{{jobInfo.interviewDateTime | filterDateTime}}</span>
      <span v-else class="interview-label">Waiting</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'job-post',
  props: ['isCandidate', 'jobInfo'],
  filters: {
    filterDateTime(stringDate) {
      return moment(stringDate.substring(0, 8)).format('MMMM Do YYYY');
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/JobPost/JobPost.scss';
</style>
