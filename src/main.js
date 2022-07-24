import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from "./routes";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe7byX8KjLvOAighBN9ATtdYd6UI9L8Oc",
  authDomain: "vue-auth-c7dd8.firebaseapp.com",
  projectId: "vue-auth-c7dd8",
  storageBucket: "vue-auth-c7dd8.appspot.com",
  messagingSenderId: "106150819624",
  appId: "1:106150819624:web:9109633dad4b79ea74821d"
};

initializeApp(firebaseConfig)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
