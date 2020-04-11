/* eslint-disable */
import Axios from "axios";

export default {
  namespaced: true,
  state: {
    jobsList: [],
    allPostCount: 0,
    userInfo: {
      email: "",
      fullName: "",
      imageUrl: ""
    },
    cityList: [],
    jobDetail: {}
  },
  mutations: {
    setJobsList(state, data) {
      state.jobsList = data;
    },
    setAllPostCount(state, data) {
      state.allPostCount = data;
    },
    setUserInfo(state, data) {
      state.userInfo = data;
    },
    setCityList(state, data) {
      state.cityList = data;
    },
    setJobDetail(state, data) {
      state.jobDetail = data;
    }
  },
  actions: {
    initAllJobs(context, { limit, page }) {
      return new Promise((resolve, reject) => {
        Axios.get(
          `https://recruitmentswdapi.azurewebsites.net/posts?limit=${limit}&page=${page}`
        ).then(response => {
          context.commit("setJobsList", response.data);
          resolve();
        });
      });
    },
    initAllPostCount(context) {
      return new Promise((resolve, reject) => {
        Axios.get(`https://recruitmentswdapi.azurewebsites.net/posts/count`).then(response => {
          context.commit("setAllPostCount", response.data);
          resolve();
        });
      });
    },
    searchJobByName(context, { limit, page, jobName }) {
      return new Promise((resolve, reject) => {
        Axios.get(
          `https://recruitmentswdapi.azurewebsites.net/posts?limit=${limit}&page=${page}&searchJobName=${jobName}`
        ).then(response => {
          context.commit("setJobsList", response.data);
          resolve();
        });
      });
    },
    searchJobByFullInfo(context, { limit, page, jobName, searchCompName, searchAddress }) {
      return new Promise((resolve, reject) => {
        Axios.get(
          `https://recruitmentswdapi.azurewebsites.net/posts?limit=${limit}&page=${page}&searchJobName=${jobName}&searchCompName=${searchCompName}&addressID=${searchAddress}`
        ).then(response => {
          context.commit("setJobsList", response.data);
          resolve();
        });
      });
    },
    initDropdownCity(context) {
      return new Promise((resolve, reject) => {
        Axios.get(`https://recruitmentswdapi.azurewebsites.net/cities`).then(response => {
          context.commit("setCityList", response.data);
          resolve();
        });
      });
    },
    getJobDetail(context, { postID }) {
      return new Promise((resolve, reject) => {
        Axios.get(`https://recruitmentswdapi.azurewebsites.net/posts/${postID}`).then(response => {
          context.commit("setJobDetail", response.data);
          resolve();
        });
      });
    },
    authorizationBearer(context) {
      return new Promise((resolve, reject) => {
        if (!localStorage.getItem("LOGIN_TOKEN")) {
          reject();
        } else {
          let params = {
            headers: {
              authorization: `Bearer ${localStorage.getItem("LOGIN_TOKEN")}`
            }
          };
          Axios.get(
            `https://cors-anywhere.herokuapp.com/https://recruitmentswdapi.azurewebsites.net/user/me`,
            params
          )
            .then(response => {
              context.commit("setUserInfo", response.data);
              resolve();
            })
            .catch(err => {
              reject();
            });
        }
      });
    }
  }
};
