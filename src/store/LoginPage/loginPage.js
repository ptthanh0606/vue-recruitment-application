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
    },
    loginWithFireBase(context, { email, password }) {
      return new Promise((resolve, reject) => {

        
        // var provider = new firebase.auth.GoogleAuthProvider();

        // firebase.auth().signInWithPopup(provider).then(function(result) {
        //   // This gives you a Google Access Token. You can use it to access the Google API.
        //   var token = result.credential.accessToken;
        //   // The signed-in user info.
        //   var user = result.user;
        //   // ...
        // }).catch(function(error) {
        //   // Handle Errors here.
        //   var errorCode = error.code;
        //   var errorMessage = error.message;
        //   // The email of the user's account used.
        //   var email = error.email;
        //   // The firebase.auth.AuthCredential type that was used.
        //   var credential = error.credential;
        //   // ...
        // });
      });
    }
  }
};
