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
          Axios.delete(`https://recruitmentswdapi.azurewebsites.net/posts/${postID}`, params)
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
