<template>
  <!-- eslint-disable max-len -->
  <div class="job-preview-card-container">

    <div class="card-header">
      <div class="pair job-location">
        <svg class="icon location-pin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.99 19.315">
          <path class="cls-1" d="M54.687,0a7,7,0,0,0-7,7c0,4.787,6.26,11.814,6.526,12.111a.63.63,0,0,0,.937,0c.267-.3,6.526-7.324,6.526-12.111A7,7,0,0,0,54.687,0Zm0,10.514A3.519,3.519,0,1,1,58.206,7,3.523,3.523,0,0,1,54.687,10.514Z" transform="translate(-47.692 0)"/>
        </svg>
        <span class="label">Ho Chi Minh City</span>
      </div>

      <div class="pair job-alt">
        <svg class="icon clock-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.182 17.182">
          <g transform="translate(0 -1.861)">
            <path data-name="Path 320" class="cls-1" d="M8.591,0a8.591,8.591,0,1,0,8.591,8.591A8.6,8.6,0,0,0,8.591,0Zm0,15.354a6.763,6.763,0,1,1,6.763-6.763A6.771,6.771,0,0,1,8.591,15.354Z" transform="translate(0 1.861)"/>
            <path data-name="Path 321" class="cls-1" d="M162.2,65.283H158.34V60.641a.707.707,0,1,0-1.415,0v5.35a.707.707,0,0,0,.707.707H162.2a.707.707,0,1,0,0-1.415Z" transform="translate(-149.132 -55.096)"/>
          </g>
        </svg>
        <span class="label">Now</span>
      </div>
    </div>
    <!--  -->
    <div class="card-body">
      <div class="company-info-wrapper">
        <img class="company-logo" src="https://i.imgur.com/iVtNw0H.png" alt="">
        <h3 class="company-name">Facebook Inc.</h3>
        <h4 class="job-name">Senior Front-End Developer</h4>
      </div>

      <div class="skill-wrapper">
        <div class="skill-box">ReactJS</div>
        <div class="skill-box">HTML5</div>
        <div class="skill-box">CSS</div>
        <div class="skill-box">Javascript</div>
      </div>
    </div>
    <!--  -->
    <div class="card-footer">
      <span class="job-expiration-date">Until 26 Feb 2020</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'JobPreviewCard',
};
</script>

<style lang="scss">
@import '../../assets/scss/JobPreviewCard/JobPreviewCard.scss';
@import '../../../node_modules/hamburgers/_sass/hamburgers/hamburgers.scss';
</style>
