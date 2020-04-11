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
          <h3 class="instant-start-label">Instant start with these suggestions</h3>
          <div class="marginT jobs-wrapper">
            <div class="container-box job-container" @click="handlePostClick">
              <div class="row job-container-title">
                <h3>Senior ReactJS developer</h3>
                <span class="until-date">Until 16 Oct 2020</span>
              </div>
              <div class="row address-n-type-container">
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
                  <span class="address-detail">Ho Chi Minh</span>
                </div>
                <span class="job-type">Full-time</span>
              </div>
              <div class="row skills-n-salary-wrapper">
                <div class="skills-wrapper-detail">
                  <div class="skill-detail">ReactJS</div>
                  <div class="skill-detail">ReactJS</div>
                  <div class="skill-detail">ReactJS</div>
                  <div class="skill-detail">ReactJS</div>
                </div>
                <span class="salary">$1000</span>
              </div>
            </div>
            <div class="container-box job-container" @click="handlePostClick">
              <div class="row job-container-title">
                <h3>Senior ReactJS developer</h3>
                <span class="until-date">Until 16 Oct 2020</span>
              </div>
              <div class="row address-n-type-container">
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
                  <span class="address-detail">Ho Chi Minh</span>
                </div>
                <span class="job-type">Full-time</span>
              </div>
              <div class="row skills-n-salary-wrapper">
                <div class="skills-wrapper-detail">
                  <div class="skill-detail">ReactJS</div>
                  <div class="skill-detail">ReactJS</div>
                  <div class="skill-detail">ReactJS</div>
                  <div class="skill-detail">ReactJS</div>
                </div>
                <span class="salary">$1000</span>
              </div>
            </div>
            <div class="container-box job-container">
              <div class="row job-container-title">
                <h3>Senior ReactJS developer</h3>
                <span class="until-date">Until 16 Oct 2020</span>
              </div>
              <div class="row address-n-type-container">
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
                  <span class="address-detail">Ho Chi Minh</span>
                </div>
                <span class="job-type">Full-time</span>
              </div>
              <div class="row skills-n-salary-wrapper">
                <div class="skills-wrapper-detail">
                  <div class="skill-detail">ReactJS</div>
                  <div class="skill-detail">ReactJS</div>
                  <div class="skill-detail">ReactJS</div>
                  <div class="skill-detail">ReactJS</div>
                </div>
                <span class="salary">$1000</span>
              </div>
            </div>
            <div class="container-box job-container">
              <div class="row job-container-title">
                <h3>Senior ReactJS developer</h3>
                <span class="until-date">Until 16 Oct 2020</span>
              </div>
              <div class="row address-n-type-container">
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
                  <span class="address-detail">Ho Chi Minh</span>
                </div>
                <span class="job-type">Full-time</span>
              </div>
              <div class="row skills-n-salary-wrapper">
                <div class="skills-wrapper-detail">
                  <div class="skill-detail">ReactJS</div>
                  <div class="skill-detail">ReactJS</div>
                  <div class="skill-detail">ReactJS</div>
                  <div class="skill-detail">ReactJS</div>
                </div>
                <span class="salary">$1000</span>
              </div>
            </div>
            <div class="container-box job-container">
              <div class="row job-container-title">
                <h3>Senior ReactJS developer</h3>
                <span class="until-date">Until 16 Oct 2020</span>
              </div>
              <div class="row address-n-type-container">
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
                  <span class="address-detail">Ho Chi Minh</span>
                </div>
                <span class="job-type">Full-time</span>
              </div>
              <div class="row skills-n-salary-wrapper">
                <div class="skills-wrapper-detail">
                  <div class="skill-detail">ReactJS</div>
                  <div class="skill-detail">ReactJS</div>
                  <div class="skill-detail">ReactJS</div>
                  <div class="skill-detail">ReactJS</div>
                </div>
                <span class="salary">$1000</span>
              </div>
            </div>
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
          <a href class="delete-post-button">Delete this post</a>
        </div>
        <span class="postID-label">ID: #123123</span>
        <form class="update-form" @submit="handleUpdatePost">
          <input
            class="userinput updateTitle"
            type="text"
            placeholder="New post title"
            v-model="updatePostTitle"
            required
          />
          <select name="address-dropdown" class="userinput address-dropdown" v-model="selectedCity">
            <option value disabled selected>Select a city</option>
            <option value="hcm">Ho chi Minh</option>
            <option value="hcm">Ho chi Minh</option>
          </select>
          <select name="job-type-dropdown" class="userinput job-type-dropdown" v-model="selectedJobType">
            <option value disabled selected>Specify job type</option>
            <option value="hcm">Ho chi Minh</option>
            <option value="hcm">Ho chi Minh</option>
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
import { DatePicker } from 'element-ui';

export default {
  name: 'post-dashboard',
  components: {
    'date-picker': DatePicker,
  },
  data() {
    return {
      updateClickedFlg: false,
      updatePostTitle: '',
      updateSalaryValue: '',
      updateSkillStringList: '',
      updateValidUntil: '',
      updatePostDesc: '',
      selectedCity: '',
      selectedJobType: '',
    };
  },
  methods: {
    handlePostClick() {
      if (!this.updateClickedFlg) {
        this.updateClickedFlg = true;
      } else {
        this.updateClickedFlg = false;
        setTimeout(() => {
          this.updateClickedFlg = true;
        }, 800);
      }
    },
    handleCloseUpdateBox() {
      this.updateClickedFlg = false;
    },
    handleUpdatePost(event) {
      event.preventDefault();
      const skills = this.updateSkillStringList
        .trim()
        .split(',')
        .map(skill => skill.trim());

      let selectedMonth = this.updateValidUntil.getMonth() + 1;
      selectedMonth = selectedMonth < 10 ? `0${selectedMonth}` : `${selectedMonth}`;
      const stringDate = `${this.updateValidUntil.getFullYear()}-${selectedMonth}-${this.updateValidUntil.getDate()}`;

      console.log({
        postTitle: this.updatePostTitle,
        monthlySalary: this.updateSalaryValue,
        skills,
        expiryDate: stringDate,
        addressBranchID: this.selectedCity,
        jobType: this.selectedJobType,
        postDesc: this.updatePostDesc,
      });
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/_globalVariable.scss";

.icon {
  fill: $iconColor;
  width: 50px;
  height: 50px;
}

.posts-dashboard-container {
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

      .marginT {
        margin-top: 2rem;
      }

      .jobs-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;

        .job-container {
          margin-top: 2rem;
          width: 100%;
          animation: rgbPostBorder infinite 15s;

          @keyframes rgbPostBorder {
            0% {
              border-right: 5px solid #adadad;
            }
            25% {
              border-right: 5px solid #ff00f2;
            }
            50% {
              border-right: 5px solid #02d1c7;
            }
            75% {
              border-right: 5px solid #ff00f2;
            }
            100% {
              border-right: 5px solid #adadad;
            }
          }

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

          .job-container-title {
            align-items: flex-end;
            animation: rgb-label infinite 15s;

            .until-date {
              font-size: 14px;
              color: $subfontColor;
            }
          }

          .address-n-type-container {
            margin-top: 0.5rem;

            .address-wrapper-detail {
              margin-top: 0.5rem;
              display: flex;
              align-items: flex-end;

              .location-pin {
                width: 0.8rem;
                margin-right: 10px;
                fill: $iconColor;
              }

              .address-detail {
                font-weight: bold;
                color: $subfontColor;
                font-size: 14px;
              }
            }

            .job-type {
              font-size: 20px;
              font-weight: bold;
            }
          }

          .skills-n-salary-wrapper {
            align-items: flex-end;
            margin-top: 2rem;

            .skills-wrapper-detail {
              margin-top: 1.5rem;
              display: flex;

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

            .salary {
              font-weight: bold;
              color: $subfontColor;
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

.update-wrapper {
  box-shadow: 4px 4px 8px #0000003b, -4px -4px 10px #ffffffbb;
  transition: all ease-in-out 500ms;
  position: fixed;
  width: 0%;
  height: 100vh;
  right: 0;
  top: 0;
  overflow: hidden;

  .update-container {
    width: 85%;
    margin: 2rem auto;

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .update-container-top-row {
      .close-update {
        width: 28px;

        &:hover {
          cursor: pointer;
        }
      }

      .delete-post-button {
        display: block;
        text-align: right;
        width: 100%;
        color: rgb(214, 107, 107);
        font-weight: bold;
        white-space: nowrap;
      }
    }

    .postID-label {
      display: block;
      margin-top: 1rem;
      font-size: 14px;
      font-weight: bold;
      color: $subfontColor;
      white-space: nowrap;
    }

    .update-form {
      margin-top: 1rem;

      .userinput {
        width: 100%;
        background-color: transparent;
        border-radius: 10px;
        border: 1.5px solid #adadad;
        outline: none;
        padding: 0.6rem;
        margin-bottom: 1rem;

        &:focus {
          animation: rgb-border infinite 6s;

          @keyframes rgb-border {
            0% {
              border: 1.5px solid #adadad;
            }
            25% {
              border: 1.5px solid #ff00f2;
            }
            50% {
              border: 1.5px solid #02d1c7;
            }
            75% {
              border: 1.5px solid #ff00f2;
            }
            100% {
              border: 1.5px solid #adadad;
            }
          }
        }
      }

      .address-dropdown {
        width: 100%;
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

      .input-update-desc {
        height: 110px;
      }

      .update-button {
        white-space: nowrap;
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
      }
    }
  }
}

.display-update-container {
  width: 500px;
}
</style>
