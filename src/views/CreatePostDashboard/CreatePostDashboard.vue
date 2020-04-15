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
@import "../../assets/scss/_globalVariable.scss";

.post-job-dashboard-container {
  width: 100%;
  height: 100%;
  padding: 2rem 2rem 0 2rem;
  color: $fontColor;

  .header {
    width: 100%;
    color: $darkBlueGray;

    .welcome-label {
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

      .icon {
        fill: $iconColor;
        width: 50px;
        height: 50px;
      }

      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .create-container-top-row {
        .close-create {
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

      .create-form {
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

        .input-create-desc {
          height: 110px;
        }

        .create-button {
          white-space: nowrap;
          width: 25%;
          height: 2.8rem;
          animation: rgb-button-color infinite 15s;
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
}
</style>
