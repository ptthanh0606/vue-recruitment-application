import Vue from 'vue';
import Vuex from 'vuex';

import welcome from './welcome/welcome';
import jobSearchResult from './JobSearchResult/jobSearchResult';
import loginPage from './LoginPage/loginPage';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Welcome: welcome,
    JobSearchResult: jobSearchResult,
    LoginPage: loginPage,
  },
});
