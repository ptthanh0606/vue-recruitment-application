/* eslint-disable */
import Axios from "axios";

export default {
  namespaced: true,
  state: {
    cityList: [],
    companyTypes: [],
    addresses: [],
    jobTypes: [],
  },
  mutations: {
    setCityList(state, data) {
      state.cityList = data;
    },
    setCompanyTypes(state, data) {
      state.companyTypes = data;
    },
    setAddressList(state, data) {
      state.addresses = data;
    },
    setJobTypes(state, data) {
      state.jobTypes = data;
    },
  },
  actions: {
    initCity(context) {
      return new Promise((resolve, reject) => {
        Axios.get("https://recruitmentswdapi.azurewebsites.net/cities")
          .then(response => {
            context.commit("setCityList", response.data);
            resolve();
          })
          .catch(err => {
            reject(err.response.data);
          });
      });
    },
    initCompanyTypes(context) {
      return new Promise((resolve, reject) => {
        Axios.get("https://recruitmentswdapi.azurewebsites.net/company-types")
          .then(response => {
            context.commit("setCompanyTypes", response.data);
            resolve();
          })
          .catch(err => {
            reject(err.response.data);
          });
      });
    },
    initAddress(context, compID) {
      return new Promise((resolve, reject) => {
        Axios.get(`https://recruitmentswdapi.azurewebsites.net/addresses?compID=${compID}`)
          .then(response => {
            context.commit("setAddressList", response.data);
            resolve();
          })
          .catch(err => {
            reject(err.response.data);
          });
      });
    },
    initJobTypes(context) {
      return new Promise((resolve, reject) => {
        Axios.get(`https://recruitmentswdapi.azurewebsites.net/job-types`)
          .then(response => {
            context.commit("setJobTypes", response.data);
            resolve();
          })
          .catch(err => {
            reject(err.response.data);
          });
      });
    },
  }
};
