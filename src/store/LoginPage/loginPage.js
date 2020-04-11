/* eslint-disable */
import Axios from "axios";

export default {
  namespaced: true,
  state: {
    bearerLoginToken: {}
  },
  mutations: {
    setBearerLoginToken(state, data) {
      state.bearerLoginToken = data;
    }
  },
  actions: {
    login(context, { email, password }) {
      return new Promise((resolve, reject) => {
        Axios.post("https://recruitmentswdapi.azurewebsites.net/auth/login", {
          loginName: email,
          password: password
        })
          .then(response => {
            context.commit("setBearerLoginToken", response.data);
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  }
};
