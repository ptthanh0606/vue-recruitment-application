/* eslint-disable */
import Axios from "axios";

export default {
  namespaced: true,
  state: {
    numberOfCurrentJob: 0,
    numberOfOutdatedJob: 0,
    numberOfAppliedCandidate: 0,
    latestCandidates: []
  },
  mutations: {
    setNumberOfCurrentJob(state, data) {
      state.numberOfCurrentJob = data;
    },
    setNumberOfOutdatedJob(state, data) {
      state.numberOfOutdatedJob = data;
    },
    setNumberOfAppliedCandidate(state, data) {
      state.numberOfAppliedCandidate = data;
    },
    setLatestCandidates(state, data) {
      state.latestCandidates = data;
    }
  },
  actions: {
    getNumberOfCurrentJob(context, compID) {
      return new Promise((resolve, reject) => {
        Axios.get(`https://recruitmentswdapi.azurewebsites.net/posts/count/?compID=${compID}`)
          .then(response => {
            context.commit("setNumberOfCurrentJob", response.data);
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    getNumberOfOutdatedJob(context, compID) {
      return new Promise((resolve, reject) => {
        Axios.get(
          `https://recruitmentswdapi.azurewebsites.net/posts/count/?choice=2&compID=${compID}`
        )
          .then(response => {
            context.commit("setNumberOfOutdatedJob", response.data);
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    getNumberOfAppliedCandidate(context, compID) {
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
            `https://recruitmentswdapi.azurewebsites.net/applications/count?compID=${compID}`,params
          )
            .then(response => {
              context.commit("setNumberOfAppliedCandidate", response.data);
              resolve();
            })
            .catch(err => {
              reject(err);
            });
        }
      });
    },
    getLatestCandidates(context, compID) {
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
          `https://recruitmentswdapi.azurewebsites.net/applications?limit=3&compID=${compID}`, params
        )
          .then(response => {
            context.commit("setLatestCandidates", response.data);
            resolve();
          })
          .catch(err => {
            reject(err);
          });
        }
      });
    }
  }
};
