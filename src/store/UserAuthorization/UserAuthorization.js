/* eslint-disable */
import Axios from "axios";

export default {
  namespaced: true,
  state: {
    userInfo: {},
    userCompany: {},
    userFullInfo: {}
  },
  mutations: {
    setUserInfo(state, data) {
      state.userInfo = data;
    },
    setUserCompany(state, data) {
      state.userCompany = data;
    },
    setUserFullInfo(state, data) {
      state.userFullInfo = data;
    }
  },
  actions: {
    getUserInfo(context) {
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
            `https://recruitmentswdapi.azurewebsites.net/user/me`,
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
    },
    getUserCompanyInfo(context) {
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
            `https://recruitmentswdapi.azurewebsites.net/employers/company`,
            params
          )
            .then(response => {
              context.commit("setUserCompany", response.data);
              resolve();
            })
            .catch(err => {
              reject(err.response.data);
            });
        }
      });
    },
    getUserFullInfo(context) {
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
          `https://recruitmentswdapi.azurewebsites.net/user/me?choice=2`, params
        )
          .then(response => {
            context.commit("setUserFullInfo", response.data);
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
