<template>
  <!-- eslint-disable object-shorthand -->
  <!-- eslint-disable max-len -->
  <!-- eslint-disable prefer-const -->
  <!-- eslint-disable no-unused-vars -->
  <div class="JobSearchResult-container">
    <div class="JobSearchResult-wrapper">
      <div class="left-col">
        <div class="user-info-wrapper">
          <div class="user-avatar">
            <a href="#">
              <img src="https://i.imgur.com/nb30rLD.jpg" height="50px" width="80px" alt="">
            </a>
          </div>
          <a href="#" class="user-name">Thanh Phan</a>
          <span class="user-email">phanthongthanh0606@gmail.com</span>
          <div class="log-out-wrapper">
            <svg id="log-out-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19">
              <path data-name="Path 2" class="cls-1" d="M9.024,17.395H2.256a.752.752,0,0,1-.752-.752V3.106a.752.752,0,0,1,.752-.752H9.024a.752.752,0,0,0,0-1.5H2.256A2.259,2.259,0,0,0,0,3.106V16.643A2.259,2.259,0,0,0,2.256,18.9H9.024a.752.752,0,1,0,0-1.5Z"/>
              <path data-name="Path 1" class="cls-1" d="M181.969,111.893l-4.572-4.512a.752.752,0,1,0-1.056,1.071l3.268,3.225h-8.756a.752.752,0,0,0,0,1.5h8.756l-3.268,3.225a.752.752,0,1,0,1.056,1.071l4.572-4.512a.752.752,0,0,0,0-1.071Z" transform="translate(-164.084 -102.554)"/>
            </svg>
            <a href="">
              Log out
            </a>
          </div>
        </div>

        <form class="search-wrapper">
          <h3 class="search-label">Search for jobs</h3>
          <div class="input-box">
            <input class="search-box" type="text" placeholder="Your dream job?">
          </div>
          <div class="input-box">
            <input class="search-box" type="text" placeholder="Desired company?">
          </div>
          <div class="input-box">
            <select name="selectedCity" id="city-select-box">
              <option value="" disabled selected>Your city?</option>
              <option value="companyID">Ho Chi minh City</option>
              <option value="hcm">Ho Chi minh City</option>
              <option value="hcm">Ho Chi minh City</option>
              <option value="hcm">Ho Chi minh City</option>
            </select>
          </div>
          <button type="submit" class="input-box button-box">
            <span class="button-label">Discover</span>
            <svg
              class="search-icon"
              viewBox="0 0 512 500"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z"/>
            </svg>
          </button>
        </form>
      </div>

      <div class="middle-col">
        <div class="search-result-number">
          <span class="found-label">Found</span>
          <h1 class="number-of-results">683</h1>
          <h3 class="desired-job-name">Front-end jobs</h3>
        </div>
        <div class="job-list-result">
          <div class="job-column" v-for="postCol in jobResult" :key="postCol">
            <job-card v-for="postInfo in postCol" :key="postInfo"  :postInfo="postInfo"></job-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JobPreviewCard from '../../components/JobPreviewCard/JobPreviewCard.vue';

export default {
  name: 'jobs-search-result',
  components: {
    'job-card': JobPreviewCard,
  },
  data() {
    return {
      jobResult: [
        [
          {
            location: 'Ha Noi City',
            jobType: 'Full-time',
            logoUrl: 'https://i.imgur.com/iVtNw0H.png',
            companyName: 'Knorex Inc.',
            jobTitle: 'Back-end Developer',
            jobSkills: [
              'Java',
              'Spring Boot',
              'Spring Boot',
              'Spring Boot',
              'MySql',
              'MySql',
              'MySql',
              'MySql',
            ],
            expDate: 'June 6 2020',
          },
          {
            location: 'Ha Noi City',
            jobType: 'Full-time',
            logoUrl: 'https://i.imgur.com/iVtNw0H.png',
            companyName: 'Knorex Inc.',
            jobTitle: 'Back-end Developer',
            jobSkills: [
              'Java',
              'Spring Boot',
              'Spring Boot',
              'Spring Boot',
              'MySql',
              'MySql',
              'MySql',
              'MySql',
            ],
            expDate: 'June 6 2020',
          },
          {
            location: 'Ha Noi City',
            jobType: 'Full-time',
            logoUrl: 'https://i.imgur.com/iVtNw0H.png',
            companyName: 'Knorex Inc.',
            jobTitle: 'Back-end Developer',
            jobSkills: [
              'Java',
              'Spring Boot',
              'Spring Boot',
              'Spring Boot',
              'MySql',
              'MySql',
              'MySql',
              'MySql',
            ],
            expDate: 'June 6 2020',
          },
        ],
        [
          {
            location: 'Da Nang City',
            jobType: 'Full-time',
            logoUrl: 'https://i.imgur.com/iVtNw0H.png',
            companyName: 'FPT Software Inc.',
            jobTitle: 'Data Scientist',
            jobSkills: [
              'Python',
              'Excel',
            ],
            expDate: 'June 6 2020',
          },
          {
            location: 'Da Nang City',
            jobType: 'Full-time',
            logoUrl: 'https://i.imgur.com/iVtNw0H.png',
            companyName: 'FPT Software Inc.',
            jobTitle: 'Data Scientist',
            jobSkills: [
              'Python',
              'Excel',
            ],
            expDate: 'June 6 2020',
          },
          {
            location: 'Da Nang City',
            jobType: 'Full-time',
            logoUrl: 'https://i.imgur.com/iVtNw0H.png',
            companyName: 'FPT Software Inc.',
            jobTitle: 'Data Scientist',
            jobSkills: [
              'Python',
              'Excel',
            ],
            expDate: 'June 6 2020',
          },
        ],
      ],
    };
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/JobSearchResults/JobSearchResult.scss';
</style>
