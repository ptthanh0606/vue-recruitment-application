/* eslint-disable */
import Axios from "axios";

export default {
  namespaced: true,
  state: {
  },
  mutations: {
  },
  actions: {
    createCompany(context, companyInfo) {
      return new Promise((resolve, reject) => {
        if (!localStorage.getItem("LOGIN_TOKEN")) {
          reject();
        } else {
          let params = {
            headers: {
              authorization: `Bearer ${localStorage.getItem("LOGIN_TOKEN")}`
            }
          };
          Axios.post("https://recruitmentswdapi.azurewebsites.net/companies", companyInfo, params)
            .then(response => {
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
