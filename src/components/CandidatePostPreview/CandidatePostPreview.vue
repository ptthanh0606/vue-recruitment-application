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
@import "../../assets/scss/_globalVariable.scss";

.candidate-post-preview {
  border-radius: 15px;
  box-shadow: 4px 4px 8px #0000003b, -4px -4px 10px #ffffffbb;
  padding: 1.7rem;
  transition: all ease-in-out 500ms;
  width: 100%;

  .header-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: $subfontColor;

    .candidate-id-label {
      font-weight: bold;
    }

    .candidate-date-uploaded {
      font-weight: bold;
      font-size: 14px;
    }
  }

  .post-content {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .footer-desc {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    font-size: 14px;

    .candidate-wrapper {
      display: flex;
      align-items: center;
      color: $fontColor;

      .candidate-image {
        margin-right: 10px;
        height: 25px;
        width: 25px;
        border-radius: 30px;
      }

      .candidate-name {
        font-weight: bolder;
        animation: rgb-label infinite 15s;
      }
    }

    .view-cv-button {
      font-weight: bold;
      animation: rgb-label infinite 15s;
      color: #009fa5;
    }
  }
}
</style>
