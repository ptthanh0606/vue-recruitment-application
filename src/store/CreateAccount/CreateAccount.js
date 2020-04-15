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
    createAccount(context, userInfo) {
      return new Promise((resolve, reject) => {
        Axios.post("https://recruitmentswdapi.azurewebsites.net/auth/sign-up", userInfo)
          .then(response => {
            context.commit("setBearerLoginToken", response.data);
            console.log(response.data);
            
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  }
};
