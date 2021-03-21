import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import dateFilter from "@/filters/date.filter";
import messagePlugin from "./utils/message.plugin";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter("filter_date", dateFilter);

firebase.initializeApp({
  apiKey: "AIzaSyAbqK9np8_9NJCNyxE-WeYRB9bdbgZUAUk",
  authDomain: "vue-crm-10582.firebaseapp.com",
  projectId: "vue-crm-10582",
  storageBucket: "vue-crm-10582.appspot.com",
  messagingSenderId: "844953752169",
  appId: "1:844953752169:web:c741f2acada4f569ecc8f8"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
