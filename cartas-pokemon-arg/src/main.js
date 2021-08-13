import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD4GAGVBITHW_jsb6NH3TYGMH2VdPH1YuQ",
  authDomain: "cartas-pokemon-arg.firebaseapp.com",
  projectId: "cartas-pokemon-arg",
  storageBucket: "cartas-pokemon-arg.appspot.com",
  messagingSenderId: "564133325281",
  appId: "1:564133325281:web:f00754d9956c9b16294aa0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
