import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import firebase from "firebase";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCjJ6QTJez8a1AvlKqmj2PSostUPGEo2ng",
  authDomain: "tlstest-ec31c.firebaseapp.com",
  databaseURL: "https://tlstest-ec31c.firebaseio.com",
  projectId: "tlstest-ec31c",
  storageBucket: "tlstest-ec31c.appspot.com",
  messagingSenderId: "1051437209106",
  appId: "1:1051437209106:web:b4ce3e1bffba406f1eeacb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.usePublicVapidKey(
  "BEYja7_CMz7SfUZGmA69oeN2c7wny2J6S8N7hCKg9JH9aATV5dSHdlqTAhJTJBA1A-vHljQj7-Ql6SQSM0REaWs"
);

messaging
  .requestPermission()
  .then(result => console.log(result))
  .catch(err => console.error(err));

messaging
  .getToken()
  .then(currentToken => {
    if (currentToken) {
      console.log(`currentToken: ${currentToken}`);
    } else {
      console.error(
        "No Instance ID token available. Request permission to generate one."
      );
    }
  })
  .catch(err => {
    console.error("An error occurred while retrieving token. ", err);
  });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
