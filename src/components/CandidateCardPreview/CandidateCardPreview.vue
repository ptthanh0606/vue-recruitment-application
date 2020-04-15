<template>
  <!-- eslint-disable object-shorthand -->
  <!-- eslint-disable max-len -->
  <!-- eslint-disable prefer-const -->
  <!-- eslint-disable no-unused-vars -->
  <div class="candidate-card-preview">
    <div class="row candidates-container-header">
      <div class="user-info-container">
        <img src="https://i.imgur.com/nb30rLD.jpg" alt class="userImage" />
        <h4 class="candidateFullName">{{candidateInfo.fullName}}</h4>
      </div>
      <span class="apply-time-label">Applied on {{candidateInfo.uploadDate | filterDateTime}}</span>
    </div>
    <div class="row candidates-container-title">
      <div class="apply-for-job-label-pair">
        <span class="apply-label">Apply for</span>
        <h3 class="job-title">{{candidateInfo.postTitle}}</h3>
      </div>
      <span class="job-type-label">{{candidateInfo.pojobTypestTitle}}</span>
    </div>
    <div class="row candidates-container-email">
      <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.212 12.349">
        <path
          d="M14.787,61H1.425A1.427,1.427,0,0,0,0,62.425v9.5a1.427,1.427,0,0,0,1.425,1.425H14.787a1.427,1.427,0,0,0,1.425-1.425v-9.5A1.427,1.427,0,0,0,14.787,61Zm-.2.95L8.136,68.4,1.626,61.95ZM.95,71.728v-9.11l4.575,4.536Zm.672.672L6.2,67.821l1.6,1.59a.475.475,0,0,0,.67,0l1.564-1.564L14.591,72.4Zm13.641-.672-4.553-4.553,4.553-4.553Z"
          transform="translate(0 -61)"
        />
      </svg>
      <span class="candidate-email">{{candidateInfo.email}}</span>
    </div>
    <div class="row candidates-container-phone-date-apply">
      <div class="phone-container">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.038 14.038">
          <path
            d="M12.912,9.214a7.97,7.97,0,0,1-2.5-.4A1.1,1.1,0,0,0,9.3,9.05L7.717,10.242A8.723,8.723,0,0,1,3.8,6.321L4.952,4.783a1.135,1.135,0,0,0,.279-1.15,7.983,7.983,0,0,1-.4-2.507A1.128,1.128,0,0,0,3.7,0H1.126A1.128,1.128,0,0,0,0,1.126,12.926,12.926,0,0,0,12.912,14.038a1.128,1.128,0,0,0,1.126-1.126V10.341A1.128,1.128,0,0,0,12.912,9.214Zm.347,3.7a.347.347,0,0,1-.347.347A12.145,12.145,0,0,1,.78,1.126.347.347,0,0,1,1.126.78H3.7a.347.347,0,0,1,.347.347,8.745,8.745,0,0,0,.438,2.746.388.388,0,0,1-.123.4L3.025,6.048a.39.39,0,0,0-.037.412,9.681,9.681,0,0,0,4.589,4.59.388.388,0,0,0,.413-.036L9.807,9.637a.344.344,0,0,1,.353-.082,8.757,8.757,0,0,0,2.752.439.347.347,0,0,1,.347.347Z"
            transform="translate(0, 0)"
          />
        </svg>
        <span class="phone-number">{{candidateInfo.phoneNumber}}</span>
      </div>
      <span class="date-apply-state">{{candidateInfo.status | convertStatus}}</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'candidate-card-preview',
  props: ['candidateInfo'],
  filters: {
    convertStatus(statusCode) {
      switch (statusCode) {
        case -1:
          return 'Failed';
        case 1:
          return 'Being interviewed';
        case 2:
          return 'Passed';
        case 3:
          return 'Not Passed';
        default:
          return 'Waiting to be interviewed';
      }
    },
    filterDateTime(stringDate) {
      return moment(stringDate.slice(0, 8)).format('MMMM Do YYYY');
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/_globalVariable.scss";

.candidate-card-preview {
  border-radius: 15px;
  box-shadow: 4px 4px 8px #0000003b, -4px -4px 10px #ffffffbb;
  padding: 2rem;
  transition: all ease-in-out 500ms;
  margin-top: 3rem;
  width: 100%;
  animation: rgbPostBorder infinite 15s;

  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    box-shadow: 4px 4px 20px #00000021, -4px -4px 20px #ffffff;
  }

  &:first-child {
    margin-top: 0;
  }

  .row {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .candidates-container-header {
    height: 40px;
    .user-info-container {
      display: flex;

      .userImage {
        width: 70px;
        height: 70px;
        border-radius: 1000px;
        transform: translateY(-50px);
        margin-right: 30px;
      }
    }

    .apply-time-label {
      font-size: 14px;
      font-weight: bold;
      color: $subfontColor;
    }
  }

  .candidates-container-title {
    .apply-for-job-label-pair {
      display: flex;
      align-items: center;

      .apply-label {
        margin-right: 44px;
        font-size: 14px;
      }

      .job-title {
        color: $pColorYellow;
        animation: rgb-label infinite 15s;
      }
    }

    .job-type-label {
      font-size: 18px;
      font-weight: bold;
      color: $iconColor;
    }
  }

  .icon {
    width: 20px;
    height: 20px;
    margin-right: 16px;
    fill: $subfontColor;
  }

  .candidates-container-email {
    display: flex;
    justify-content: initial;
    align-items: center;
    margin-top: 2rem;
    color: $subfontColor;
    font-weight: bold;
  }

  .candidates-container-phone-date-apply {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    color: $subfontColor;
    font-weight: bold;

    .phone-container {
      display: flex;
      justify-content: initial;
      align-items: center;
    }
  }

  .date-apply-state {
    animation: rgb-label infinite 15s;
  }
}
</style>
