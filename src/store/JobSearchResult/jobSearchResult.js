/* eslint-disable */
import Axios from "axios";

export default {
  namespaced: true,
  state: {
    jobsList: [],
    postCount: 0,
    cityList: [],
    jobDetail: {}
  },
  mutations: {
    setJobsList(state, data) {
      state.jobsList = data;
    },
    setPostCount(state, data) {
      state.postCount = data;
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
        Axios.get(`https://recruitmentswdapi.azurewebsites.net/posts?limit=${limit}&page=${page}`)
          .then(response => {
            context.commit("setJobsList", response.data);
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      });
    },

    getNumberOfAllPost(context) {
      return new Promise((resolve, reject) => {
        Axios.get(`https://recruitmentswdapi.azurewebsites.net/posts/count`)
          .then(response => {
            context.commit("setPostCount", response.data);
            resolve();
          })
          .catch(err => {
            reject(err);
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

    getNumberOfSearchPostByName(context, searchJobName) {
      return new Promise((resolve, reject) => {
        Axios.get(`https://recruitmentswdapi.azurewebsites.net/posts/count?searchJobName=${searchJobName}`)
          .then(response => {
            context.commit("setPostCount", response.data);
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      });
    },

    searchJobByFullInfo(context, { limit, page, jobName, searchCompName, cityID }) {
      return new Promise((resolve, reject) => {
        Axios.get(
          `https://recruitmentswdapi.azurewebsites.net/posts?limit=${limit}&page=${page}&searchJobName=${jobName}&searchCompName=${searchCompName}&cityID=${cityID}`
        ).then(response => {
          context.commit("setJobsList", response.data);
          resolve();
        });
      });
    },

    getNumberOfSearchPostByFullInfo(context, { jobName, searchCompName, cityID }) {
      return new Promise((resolve, reject) => {
        Axios.get(`https://recruitmentswdapi.azurewebsites.net/posts/count?searchJobName=${jobName}&searchCompName=${searchCompName}&cityID=${cityID}`)
          .then(response => {
            context.commit("setPostCount", response.data);
            resolve();
          })
          .catch(err => {
            reject(err);
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

    applyForJob(context, postID) {
      return new Promise((resolve, reject) => {
        if (!localStorage.getItem("LOGIN_TOKEN")) {
          reject();
        } else {
          let params = {
            headers: {
              authorization: `Bearer ${localStorage.getItem("LOGIN_TOKEN")}`
            }
          };
        Axios.post(`https://recruitmentswdapi.azurewebsites.net/applications`, {
          postID
        }, params)
          .then(response => {
            resolve();
          })
          .catch(err => {
            reject(err);
          });
        }
      });
    },
  }
};
