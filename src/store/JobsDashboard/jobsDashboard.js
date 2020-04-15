/* eslint-disable */
import Axios from "axios";

export default {
  namespaced: true,
  state: {
    jobList: [],
    outdatedJobList: []
  },
  mutations: {
    setJobList(state, data) {
      state.jobList = data;
    },
    setOutdatedJobList(state, data) {
      state.outdatedJobList = data;
    }
  },
  actions: {
    initJobListByCompID(context, compID) {
      return new Promise((resolve, reject) => {
        Axios.get(
          `https://recruitmentswdapi.azurewebsites.net/posts?initFlag=2&orderChoice=3&compID=${compID}&limit=10&page=0`
        )
          .then(response => {
            context.commit("setJobList", response.data);
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    initOutdatedJobListByCompID(context, compID) {
      return new Promise((resolve, reject) => {
        Axios.get(
          `https://recruitmentswdapi.azurewebsites.net/posts?choice=2&initFlag=2&orderChoice=3&compID=${compID}&limit=10&page=0`
        )
          .then(response => {
            context.commit("setOutdatedJobList", response.data);
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    updateJobPost(context, { postID, postInfo }) {
      return new Promise((resolve, reject) => {
        if (!localStorage.getItem("LOGIN_TOKEN")) {
          reject();
        } else {
          let params = {
            headers: {
              authorization: `Bearer ${localStorage.getItem("LOGIN_TOKEN")}`
            }
          };
          Axios.put(`https://recruitmentswdapi.azurewebsites.net/posts/${postID}`, postInfo, params)
            .then(response => {
              resolve();
            })
            .catch(err => {
              reject(err);
            });
        }
      });
    },
    deletePost(context, postID) {
      return new Promise((resolve, reject) => {
        if (!localStorage.getItem("LOGIN_TOKEN")) {
          reject();
        } else {
          let params = {
            headers: {
              authorization: `Bearer ${localStorage.getItem("LOGIN_TOKEN")}`
            }
          };
          Axios.delete(
            `https://recruitmentswdapi.azurewebsites.net/posts/${postID}`,
            params
          )
            .then(response => {
              resolve(response);
            })
            .catch(err => {
              reject(err);
            });
        }
      });
    }
  }
};
