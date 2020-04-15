/* eslint-disable */
import Axios from "axios";

export default {
  namespaced: true,
  state: {
    appliedPosts: [],
  },
  mutations: {
    setAppliedPosts(state, data) {
      state.appliedPosts = data;
    },
  },
  actions: {
    getAllAppliedPosts(context, {page, limit}) {
      return new Promise((resolve, reject) => {
        if (!localStorage.getItem("LOGIN_TOKEN")) {
          reject();
        } else {
          let params = {
            headers: {
              authorization: `Bearer ${localStorage.getItem("LOGIN_TOKEN")}`
            }
          };
        Axios.get(`https://recruitmentswdapi.azurewebsites.net/applications?initFlag=3&page=0&limit=10`, params)
          .then(response => {
            context.commit("setAppliedPosts", response.data);
            resolve();
          })
          .catch(err => {
            reject(err.response.data);
          });
        }
      });
    }
  }
};
