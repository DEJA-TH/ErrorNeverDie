// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBx_EVkJQ_i73AH8fdhDNbYLpyxqXPtzeo',
  authDomain: 'errorneverdie-2565c.firebaseapp.com',
  databaseURL: 'https://errorneverdie-2565c.firebaseio.com',
  projectId: 'errorneverdie-2565c',
  storageBucket: 'errorneverdie-2565c.appspot.com',
  messagingSenderId: '849034039206'
}
firebase.initializeApp(config)
/* eslint-disable no-new */
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
})
