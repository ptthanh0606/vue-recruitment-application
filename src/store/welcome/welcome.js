/* eslint-disable */
import Axios from "axios";

export default {
  namespaced: true,
  state: {
    initJobsList: []
  },
  mutations: {
    setInitJobsList(state, data) {
      state.initJobsList = data;
    }
  },
  actions: {
    getInitJobs(context) {
      return new Promise((resolve, reject) => {
        Axios.get(
          "https://recruitmentswdapi.azurewebsites.net/posts?orderChoice=1&limit=4"
        ).then(response => {
          context.commit("setInitJobsList", response.data);
          resolve();
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
