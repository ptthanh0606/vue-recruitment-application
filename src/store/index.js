/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

import welcome from './welcome/welcome';
import jobSearchResult from './JobSearchResult/jobSearchResult';
import loginPage from './LoginPage/loginPage';
import createAccountPage from './CreateAccount/CreateAccount';
import userAuthorization from './UserAuthorization/UserAuthorization';
import createCompany from './CreateCompany/CreateCompany';
import mainDashboard from './MainDashboard/MainDashboard';
import jobsDashboard from './JobsDashboard/jobsDashboard';
import postJobDashboard from './PostJobDashboard/postJobDashboard';
import candidateDashboard from './CandidateDashboard/candidateDashboard';
import dropdownDataStore from './DropdownDataStore/dropdownDataStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Welcome: welcome,
    JobSearchResult: jobSearchResult,
    LoginPage: loginPage,
    CreateAccountPage: createAccountPage,
    UserAuthorization: userAuthorization,
    CreateCompany: createCompany,
    MainDashboard: mainDashboard,
    JobsDashboard: jobsDashboard,
    PostJobDashboard: postJobDashboard,
    CandidateDashboard: candidateDashboard,
    DropdownDataStore: dropdownDataStore,
  },
});
