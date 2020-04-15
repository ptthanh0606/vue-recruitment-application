/* eslint-disable */
import Axios from "axios";

export default {
  namespaced: true,
  state: {
  },
  mutations: {
  },
  actions: {
    updateUserInfo(context, userInfo) {
      return new Promise((resolve, reject) => {
        if (!localStorage.getItem("LOGIN_TOKEN")) {
          reject();
        } else {
          let params = {
            headers: {
              authorization: `Bearer ${localStorage.getItem("LOGIN_TOKEN")}`
            }
          };
          Axios.put(`https://recruitmentswdapi.azurewebsites.net/user`, userInfo, params)
            .then(response => {
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
