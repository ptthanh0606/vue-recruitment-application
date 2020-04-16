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
            <candidate-card-preview
              v-for="(candidate, index) in candidateList"
              :key="index"
              :candidateInfo="candidate"
              @click.native="handleCandidateClick(candidate)"
            ></candidate-card-preview>
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
          <a
            href
            class="delete-candidate-button"
            @click.prevent="handleDeleteCandidateRequest"
          >Remove candidate request</a>
        </div>
        <div class="candidate-info-wrapper">
          <img src="https://i.imgur.com/3QW3B3c.png" alt class="candidate-detail-image" />
          <h3 class="candidate-name">{{candidateName}}</h3>
          <span class="candidate-bio">{{candidateBio || 'No bio provided'}}</span>
        </div>
        <div class="candidate-academic">
          <h4 class="academic-title">Academic level</h4>
          <span class="candidate-level">{{candidateAcademic || 'No academic provided'}}</span>
        </div>
        <div class="candidate-skills-wrapper">
          <h4 class="candidate-skill-title">Specialized in</h4>
          <div v-if="candidateSkills.length" class="candidate-skills-wrapper-detail">
            <div
              v-for="(skill, index) in candidateSkills"
              :key="index"
              class="skill-detail"
            >{{skill.skillName}}</div>
          </div>
          <span v-else class="candidate-no-skill">No skills provided</span>
        </div>
        <div v-if="selectedApplicationStatus === 0">
          <h4 class="booking-date-title">Interview date</h4>
          <date-picker
            class="userinput date-picker"
            type="date"
            placeholder="Pick a date to be interviewed"
            v-model="candidateInterviewDate"
          ></date-picker>
          <button class="interview-button" @click="handleBookInterview">Book interview date</button>
        </div>
        <div v-else-if="selectedApplicationStatus === 1">
          <h4 class="booking-date-title">Interview result</h4>
          <div class="flex-button-wrapper">
            <button
              class="interview-button pass"
              @click="handleSetCandidateStatus(2)"
            >Passed the interview</button>
            <button
              class="interview-button fail"
              @click="handleSetCandidateStatus(3)"
            >Failed the interview</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import moment from 'moment';
import { mapActions, mapState } from 'vuex';
import { DatePicker } from 'element-ui';
import CandidateCardPreview from '../../components/CandidateCardPreview/CandidateCardPreview.vue';

export default {
  name: 'candidates-dashboard',
  components: {
    'date-picker': DatePicker,
    'candidate-card-preview': CandidateCardPreview,
  },
  computed: {
    ...mapState('CandidateDashboard', ['candidateList']),
    ...mapState('UserAuthorization', ['userCompany']),
  },
  data() {
    return {
      detailClickedFlg: false,
      candidateName: '',
      candidateBio: '',
      candidateAcademic: '',
      candidateSkills: [],
      candidateInterviewDate: '',
      selectedApplicationID: '',
      selectedApplicationStatus: 0,
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
    ...mapActions('CandidateDashboard', [
      'initCandidateList',
      'bookInterviewDate',
      'setApplicationStatus',
      'deleteCandidateRequest',
    ]),
    handleCandidateClick(candidateInfo) {
      this.selectedApplicationID = candidateInfo.applicationID;
      this.candidateName = candidateInfo.fullName;
      this.candidateBio = candidateInfo.bio;
      this.candidateAcademic = candidateInfo.academic;
      this.candidateSkills = candidateInfo.skills; // continue

      if (!this.detailClickedFlg) {
        this.detailClickedFlg = true;
        this.selectedApplicationStatus = candidateInfo.status;
      } else {
        this.detailClickedFlg = false;
        setTimeout(() => {
          this.selectedApplicationStatus = candidateInfo.status;
          this.detailClickedFlg = true;
        }, 800);
      }
    },
    handleCloseDetailBox() {
      this.detailClickedFlg = false;
    },
    handleBookInterview() {
      if (!this.candidateInterviewDate) {
        this.$alert('Please choose a date to set up an interview', {
          showClose: true,
          showConfirmButton: false,
          type: 'info',
        });
      } else {
        let selectedMonth = this.candidateInterviewDate.getMonth() + 1;
        selectedMonth = selectedMonth < 10 ? `0${selectedMonth}` : `${selectedMonth}`;
        const stringDate = `${this.candidateInterviewDate.getFullYear()}${selectedMonth}${this.candidateInterviewDate.getDate()}`;
        this.bookInterviewDate({
          applicationID: this.selectedApplicationID,
          interviewInfo: {
            status: '1',
            interviewDateTime: stringDate,
          },
        }).then(() => {
          this.initCandidateList({
            compID: this.userCompany.compID,
            limit: 10,
            page: 0,
          });
        });
      }
    },
    handleSetCandidateStatus(status) {
      this.setApplicationStatus({
        applicationID: this.selectedApplicationID,
        status,
      }).then(() => {
        this.$message({
          message: 'Status updated!',
          type: 'success',
        });
        this.initCandidateList({
          compID: this.userCompany.compID,
          limit: 10,
          page: 0,
        });
      });
    },
    handleDeleteCandidateRequest() {
      this.$confirm(
        'Are you sure to remove this request (this cant be undone)',
        'Remove request',
      ).then((msgData) => {
        if (msgData === 'confirm') {
          this.deleteCandidateRequest(this.selectedApplicationID).then(() => {
            this.$message({
              message: 'Removed successfully!',
            });
            this.detailClickedFlg = false;
            this.initCandidateList({
              compID: this.userCompany.compID,
              limit: 10,
              page: 0,
            });
          });
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/CandidatesDashboard/CandidatesDashboard.scss';
</style>
