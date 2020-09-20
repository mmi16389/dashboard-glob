import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
const app = ''
const config = {
  apiKey: 'AIzaSyAQP0o2Qnse_sdhc7VGVEW4M1nFPyfEwK4',
  authDomain: 'login-admin-a7a5e.firebaseapp.com',
  databaseURL: 'https://login-admin-a7a5e.firebaseio.com',
  projectId: 'login-admin-a7a5e',
  storageBucket: 'login-admin-a7a5e.appspot.com',
  messagingSenderId: '217167509836',
  appId: '1:217167509836:web:9ae07529a851665d84f7e9',
  measurementId: 'G-XZ32SD7Y1P'
}
firebase.initializeApp(config)

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})
