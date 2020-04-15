/* eslint-disable */
import Axios from "axios";

export default {
  namespaced: true,
  state: {
  },
  mutations: {
  },
  actions: {
    createPost(context, postInfo) {
      return new Promise((resolve, reject) => {
        if (!localStorage.getItem("LOGIN_TOKEN")) {
          reject();
        } else {
          let params = {
            headers: {
              authorization: `Bearer ${localStorage.getItem("LOGIN_TOKEN")}`
            }
          };
          Axios.post("https://recruitmentswdapi.azurewebsites.net/posts", postInfo, params)
            .then(response => {
              resolve(response);
            })
            .catch(err => {
              reject(err.response.data);
            });
        }
      });
    }
  }
};
