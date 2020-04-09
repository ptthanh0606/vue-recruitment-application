/* eslint-disable */
import Axios from 'axios'

export default {
  namespaced: true,
  state: {
    initJobsList: [],
  },
  mutations: {
    setInitJobsList(state, data) {
      state.initJobsList = data;
    },
  },
  actions: {
    getInitJobs(context) {
      return new Promise((resolve, reject) => {
        Axios.get('https://cors-anywhere.herokuapp.com/https://recruitmentswdapi.azurewebsites.net/posts?choice=1&limit=5').then(response => {
          context.commit('setInitJobsList', response.data);
          resolve();
        })
      })
    },
  },
};
