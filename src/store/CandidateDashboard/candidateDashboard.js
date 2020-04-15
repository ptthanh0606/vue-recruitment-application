/* eslint-disable */
import Axios from "axios";

export default {
  namespaced: true,
  state: {
    candidateList: []
  },
  mutations: {
    setCandidateList(state, data) {
      state.candidateList = data;
    }
  },
  actions: {
    initCandidateList(context, {compID, limit, page }) {
      return new Promise((resolve, reject) => {
        Axios.get(
          `https://recruitmentswdapi.azurewebsites.net/applications?initFlag=2&compID=${compID}&limit=${limit}&page=${page}`
        )
          .then(response => {
            context.commit("setCandidateList", response.data);
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    bookInterviewDate(context, { applicationID, interviewInfo }) {
      return new Promise((resolve, reject) => {
        if (!localStorage.getItem("LOGIN_TOKEN")) {
          reject();
        } else {
          let params = {
            headers: {
              authorization: `Bearer ${localStorage.getItem("LOGIN_TOKEN")}`
            }
          };
          Axios.put(`https://recruitmentswdapi.azurewebsites.net/applications/${applicationID}`, interviewInfo, params)
            .then(response => {
              resolve();
            })
            .catch(err => {
              reject(err);
            });
        }
      });
    },
    setApplicationStatus(context, { applicationID, status }) {
      return new Promise((resolve, reject) => {
        if (!localStorage.getItem("LOGIN_TOKEN")) {
          reject();
        } else {
          let params = {
            headers: {
              authorization: `Bearer ${localStorage.getItem("LOGIN_TOKEN")}`
            }
          };
          Axios.put(`https://recruitmentswdapi.azurewebsites.net/applications/${applicationID}`, {status}, params)
            .then(response => {
              resolve();
            })
            .catch(err => {
              reject(err);
            });
        }
      });
    },
    deleteCandidateRequest(context, applicationID) {
      return new Promise((resolve, reject) => {
        if (!localStorage.getItem("LOGIN_TOKEN")) {
          reject();
        } else {
          let params = {
            headers: {
              authorization: `Bearer ${localStorage.getItem("LOGIN_TOKEN")}`
            }
          };
          Axios.delete(`https://recruitmentswdapi.azurewebsites.net/applications/${applicationID}`, params)
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
