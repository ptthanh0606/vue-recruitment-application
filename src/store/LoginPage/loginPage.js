/* eslint-disable */
import Axios from "axios";
import firebase from "firebase/app";
import 'firebase/firebase-auth';

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

    getLoginWithFireBase(context) {
      return new Promise((resolve, reject) => {
        let config = {
          apiKey: "AIzaSyBfTbgUnKBCW_272vknMtfMU9gGjYOrvwk",
          authDomain: "swd301-9b526.firebaseapp.com",
          databaseURL: "https://swd301-9b526.firebaseio.com",
          projectId: "swd301-9b526",
          storageBucket: "swd301-9b526.appspot.com",
          messagingSenderId: "25540816755",
          appId: "1:25540816755:web:26102b7a1f4b8997a79f06",
          measurementId: "G-EH50JBLQ7W"
        };
        firebase.initializeApp(config);

        let provider = new firebase.auth.GoogleAuthProvider();

        firebase
          .auth()
          .signInWithPopup(provider)
          .then(result => {
            result.user.getIdToken().then(responseGoogleToken => {
              let idToken = responseGoogleToken;

              Axios.post("https://recruitmentswdapi.azurewebsites.net/auth/google", {
                googleToken: idToken
              })
                .then(response => {
                  context.commit("setBearerLoginToken", response.data);
                  resolve();
                })
                .catch(err => {
                  console.log(err);
                  reject(err);
                });
            });
          })
          .catch(error => {
            console.log(error);
          });
      });
    }
  }
};
