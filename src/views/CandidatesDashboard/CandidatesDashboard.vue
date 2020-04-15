<template>
  <!-- eslint-disable object-shorthand -->
  <!-- eslint-disable max-len -->
  <!-- eslint-disable prefer-const -->
  <!-- eslint-disable no-unused-vars -->
  <div>
    <div class="candidates-dashboard-container">
      <div class="header">
        <h1 class="screen-title">Candidates</h1>
        <span class="desc-label">See who is suitable for your business</span>
      </div>
      <div class="content">
        <div class="main-col">
          <h3 class="instant-start-label">Requested candidates</h3>
          <div class="candidates-wrapper">
            <div class="container-box candidates-container" @click="handleCandidateClick">
              <div class="row candidates-container-header">
                <div class="user-info-container">
                  <img src="https://i.imgur.com/nb30rLD.jpg" alt class="userImage" />
                  <h4 class="candidateFullName">Phan Thong Thanh</h4>
                </div>
                <span class="apply-time-label">10:34 PM</span>
              </div>
              <div class="row candidates-container-title">
                <div class="apply-for-job-label-pair">
                  <span class="apply-label">Apply for</span>
                  <h3 class="job-title">Senior ReactJS Developer</h3>
                </div>
                <span class="job-type-label">Full-time</span>
              </div>
              <div class="row candidates-container-email">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.212 12.349">
                  <path
                    d="M14.787,61H1.425A1.427,1.427,0,0,0,0,62.425v9.5a1.427,1.427,0,0,0,1.425,1.425H14.787a1.427,1.427,0,0,0,1.425-1.425v-9.5A1.427,1.427,0,0,0,14.787,61Zm-.2.95L8.136,68.4,1.626,61.95ZM.95,71.728v-9.11l4.575,4.536Zm.672.672L6.2,67.821l1.6,1.59a.475.475,0,0,0,.67,0l1.564-1.564L14.591,72.4Zm13.641-.672-4.553-4.553,4.553-4.553Z"
                    transform="translate(0 -61)"
                  />
                </svg>
                <span class="candidate-email">phanthongthanh0606@gmail.com</span>
              </div>
              <div class="row candidates-container-phone-date-apply">
                <div class="phone-container">
                  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.038 14.038">
                    <path
                      d="M12.912,9.214a7.97,7.97,0,0,1-2.5-.4A1.1,1.1,0,0,0,9.3,9.05L7.717,10.242A8.723,8.723,0,0,1,3.8,6.321L4.952,4.783a1.135,1.135,0,0,0,.279-1.15,7.983,7.983,0,0,1-.4-2.507A1.128,1.128,0,0,0,3.7,0H1.126A1.128,1.128,0,0,0,0,1.126,12.926,12.926,0,0,0,12.912,14.038a1.128,1.128,0,0,0,1.126-1.126V10.341A1.128,1.128,0,0,0,12.912,9.214Zm.347,3.7a.347.347,0,0,1-.347.347A12.145,12.145,0,0,1,.78,1.126.347.347,0,0,1,1.126.78H3.7a.347.347,0,0,1,.347.347,8.745,8.745,0,0,0,.438,2.746.388.388,0,0,1-.123.4L3.025,6.048a.39.39,0,0,0-.037.412,9.681,9.681,0,0,0,4.589,4.59.388.388,0,0,0,.413-.036L9.807,9.637a.344.344,0,0,1,.353-.082,8.757,8.757,0,0,0,2.752.439.347.347,0,0,1,.347.347Z"
                      transform="translate(0, 0)"
                    />
                  </svg>
                  <span class="phone-number">0765413668</span>
                </div>
                <span class="date-apply-state">Waiting</span>
              </div>
            </div>
            <div class="container-box candidates-container" @click="handleCandidateClick">
              <div class="row candidates-container-header">
                <div class="user-info-container">
                  <img src="https://i.imgur.com/nb30rLD.jpg" alt class="userImage" />
                  <h4 class="candidateFullName">Phan Thong Thanh</h4>
                </div>
                <span class="apply-time-label">10:34 PM</span>
              </div>
              <div class="row candidates-container-title">
                <div class="apply-for-job-label-pair">
                  <span class="apply-label">Apply for</span>
                  <h3 class="job-title">Senior ReactJS Developer</h3>
                </div>
                <span class="job-type-label">Full-time</span>
              </div>
              <div class="row candidates-container-email">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.212 12.349">
                  <path
                    d="M14.787,61H1.425A1.427,1.427,0,0,0,0,62.425v9.5a1.427,1.427,0,0,0,1.425,1.425H14.787a1.427,1.427,0,0,0,1.425-1.425v-9.5A1.427,1.427,0,0,0,14.787,61Zm-.2.95L8.136,68.4,1.626,61.95ZM.95,71.728v-9.11l4.575,4.536Zm.672.672L6.2,67.821l1.6,1.59a.475.475,0,0,0,.67,0l1.564-1.564L14.591,72.4Zm13.641-.672-4.553-4.553,4.553-4.553Z"
                    transform="translate(0 -61)"
                  />
                </svg>
                <span class="candidate-email">phanthongthanh0606@gmail.com</span>
              </div>
              <div class="row candidates-container-phone-date-apply">
                <div class="phone-container">
                  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.038 14.038">
                    <path
                      d="M12.912,9.214a7.97,7.97,0,0,1-2.5-.4A1.1,1.1,0,0,0,9.3,9.05L7.717,10.242A8.723,8.723,0,0,1,3.8,6.321L4.952,4.783a1.135,1.135,0,0,0,.279-1.15,7.983,7.983,0,0,1-.4-2.507A1.128,1.128,0,0,0,3.7,0H1.126A1.128,1.128,0,0,0,0,1.126,12.926,12.926,0,0,0,12.912,14.038a1.128,1.128,0,0,0,1.126-1.126V10.341A1.128,1.128,0,0,0,12.912,9.214Zm.347,3.7a.347.347,0,0,1-.347.347A12.145,12.145,0,0,1,.78,1.126.347.347,0,0,1,1.126.78H3.7a.347.347,0,0,1,.347.347,8.745,8.745,0,0,0,.438,2.746.388.388,0,0,1-.123.4L3.025,6.048a.39.39,0,0,0-.037.412,9.681,9.681,0,0,0,4.589,4.59.388.388,0,0,0,.413-.036L9.807,9.637a.344.344,0,0,1,.353-.082,8.757,8.757,0,0,0,2.752.439.347.347,0,0,1,.347.347Z"
                      transform="translate(0, 0)"
                    />
                  </svg>
                  <span class="phone-number">0765413668</span>
                </div>
                <span class="date-apply-state">Interview on 12 June 2020</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-wrapper" :class="{'display-detail-container': detailClickedFlg}">
      <div class="detail-container">
        <div class="row detail-container-top-row">
          <svg
            class="icon close-detail"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28.416 23.64"
            @click="handleCloseDetailBox"
          >
            <path
              data-name="Path 322"
              d="M27.961,52.737,17.7,42.475a1.56,1.56,0,0,0-2.2,0l-.932.932a1.544,1.544,0,0,0-.454,1.1,1.574,1.574,0,0,0,.454,1.113l5.987,6H1.535A1.518,1.518,0,0,0,0,53.148v1.317a1.576,1.576,0,0,0,1.535,1.6H20.623L14.568,62.1a1.54,1.54,0,0,0,0,2.184l.932.929a1.56,1.56,0,0,0,2.2,0L27.961,54.945a1.568,1.568,0,0,0,0-2.207Z"
              transform="translate(0 -42.021)"
            />
          </svg>
          <a href class="delete-candidate-button">Remove candidate request</a>
        </div>
        <div class="candidate-info-wrapper">
          <img src="https://i.imgur.com/nb30rLD.jpg" alt class="candidate-detail-image" />
          <h3 class="candidate-name">Phan Thong Thanh</h3>
          <span class="candidate-bio">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
        </div>
        <div class="candidate-academic">
          <h4 class="academic-title">Academic level</h4>
          <span class="candidate-level">Third Graded student</span>
        </div>
        <div class="candidate-skills-wrapper">
          <h4 class="candidate-skill-title">Specialized in</h4>
          <div class="candidate-skills-wrapper-detail">
            <div class="skill-detail">ReactJS</div>
            <div class="skill-detail">ReactJS</div>
            <div class="skill-detail">ReactJS</div>
            <div class="skill-detail">ReactJS</div>
          </div>
        </div>
        <date-picker
          class="userinput date-picker"
          type="date"
          placeholder="Pick a date to be interviewed"
          v-model="candidateInterviewDate"
        ></date-picker>
        <button class="book-interview-button" @click="handleBookInterview">Book interview date</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { DatePicker } from 'element-ui';

export default {
  name: 'candidates-dashboard',
  components: {
    'date-picker': DatePicker,
  },
  computed: {
    ...mapState('CandidateDashboard', ['candidateList']),
    ...mapState('UserAuthorization', ['userCompany']),
  },
  data() {
    return {
      detailClickedFlg: false,
      candidateInterviewDate: '',
    };
  },
  async mounted() {
    await this.getUserCompanyInfo();
    await this.initCandidateList({
      compID: this.userCompany.compID,
      limit: 10,
      page: 0,
    });
  },
  methods: {
    ...mapActions('UserAuthorization', ['getUserCompanyInfo']),
    ...mapActions('CandidateDashboard', ['initCandidateList']),
    handleCandidateClick() {
      if (!this.detailClickedFlg) {
        this.detailClickedFlg = true;
      } else {
        this.detailClickedFlg = false;
        setTimeout(() => {
          this.detailClickedFlg = true;
        }, 800);
      }
    },
    handleCloseDetailBox() {
      this.detailClickedFlg = false;
    },
    handleBookInterview() {},
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/_globalVariable.scss";

.candidates-dashboard-container {
  width: 100%;
  height: 100%;
  padding: 2rem 2rem 0 2rem;
  color: $fontColor;

  .header {
    width: 100%;
    color: $darkBlueGray;

    .desc-label {
      color: $subfontColor;
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 2.5rem;

    .main-col {
      flex-basis: 50%;
      display: flex;
      flex-direction: column;

      .candidates-wrapper {
        width: 100%;
        margin-top: 4rem;
        display: flex;
        flex-direction: column;

        .candidates-container {
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
        }
      }
    }
  }

  .container-box {
    border-radius: 15px;
    box-shadow: 4px 4px 8px #0000003b, -4px -4px 10px #ffffffbb;
    padding: 2rem;
    transition: all ease-in-out 500ms;
  }
}

.detail-wrapper {
  box-shadow: 4px 4px 8px #0000003b, -4px -4px 10px #ffffffbb;
  transition: all ease-in-out 500ms;
  position: fixed;
  width: 0%;
  height: 100vh;
  right: 0;
  top: 0;
  overflow: hidden;

  .detail-container {
    width: 85%;
    margin: 2rem auto;
    color: $fontColor;

    h3,
    h4,
    span {
      white-space: nowrap;
    }

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .detail-container-top-row {
      .close-detail {
        width: 28px;
        fill: $iconColor;

        &:hover {
          cursor: pointer;
        }
      }

      .delete-candidate-button {
        display: block;
        text-align: right;
        width: 100%;
        color: #d66b6b;
        font-weight: bold;
        white-space: nowrap;
      }
    }

    .candidate-info-wrapper {
      text-align: center;
      margin-top: 2rem;

      .candidate-detail-image {
        width: 70px;
        height: 70px;
        border-radius: 1000px;
      }

      .candidate-name {
        margin-top: 1rem;
      }

      .candidate-bio {
        display: block;
        font-size: 14px;
        color: $subfontColor;
        margin-top: 0.5rem;
        white-space: nowrap;
      }
    }

    .candidate-academic {
      text-align: center;
      margin-top: 3rem;
    }

    .candidate-skills-wrapper {
      margin-top: 3rem;
      text-align: center;

      .candidate-skills-wrapper-detail {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;

        .skill-detail {
          color: $iconColor;
          font-size: 14px;
          border-radius: 20px;
          padding: 10px 16px 10px 16px;
          margin-right: 16px;
          background-color: $backgroundColor;
          box-shadow: 2px 2px 5px #0000003d, -2px -2px 5px #ffffff;
        }
      }
    }

    .book-interview-button {
      white-space: nowrap;
      margin-top: 1rem;
      width: 100%;
      height: 2.8rem;
      background-color: $darkBlueGray;
      border: none;
      border-radius: 10px;
      color: $backgroundColor;
      font-weight: bolder;
      box-shadow: 3px 3px 7px #00000060, -3px -3px 7px #ffffffab;

      &:focus {
        outline: none;
      }

      &:hover {
        cursor: pointer;
      }

      animation: rgb-button-color infinite 15s;
    }

    .date-picker {
      margin-top: 3rem;
    }

    .el-input {
      width: 100%;
      margin-bottom: 1rem;

      ::placeholder {
        color: $subfontColor;
      }
    }

    .el-input__inner {
      padding-left: 3rem;
      border-radius: 10px;
      background-color: $backgroundColor;
      box-shadow: inset 8px 8px 8px rgba(0, 0, 0, 0.137),
        inset -8px -8px 8px rgba(255, 255, 255, 0.596);
    }

    .el-input__prefix {
      padding-left: 0.5rem;
      color: $iconColor;
    }
  }
}

.display-detail-container {
  width: 500px;
}
</style>
