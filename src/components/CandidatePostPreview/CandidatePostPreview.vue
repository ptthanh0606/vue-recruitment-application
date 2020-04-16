<template>
  <div class="candidate-post-preview">
    <div class="header-title">
      <span class="candidate-id-label">#{{candidate.applicationID}}</span>
      <span class="candidate-date-uploaded">on {{candidate.uploadDate | filterDateTime}}</span>
    </div>
    <div class="post-content">
      <h3 class="post-title">{{candidate.postTitle}}</h3>
    </div>
    <div class="footer-desc">
      <div class="candidate-wrapper">
        <img src="https://i.imgur.com/nb30rLD.jpg" class="candidate-image" />
        <span class="candidate-name">{{candidate.fullName}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'candidate-post-preview',
  props: ['candidate'],
  filters: {
    filterDateTime(stringDate) {
      return moment(stringDate.substring(0, 8)).format('MMMM Do YYYY');
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/CandidatePostPreview/CandidatePostPreview.scss';
</style>
