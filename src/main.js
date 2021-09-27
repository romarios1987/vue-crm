import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import dateFilter from "@/filters/date.filter";
import currencyFilter from "@/filters/currency.filter";
import messagePlugin from "./utils/message.plugin";
import Loader from "@/components/app/Loader";
import "materialize-css/dist/js/materialize.min";
import "material-design-icons/iconfont/material-icons.css";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter("filter_date", dateFilter);
Vue.filter("currency_filter", currencyFilter);

Vue.component("Loader", Loader);

firebase.initializeApp({
  apiKey: "AIzaSyAbqK9np8_9NJCNyxE-WeYRB9bdbgZUAUk",
  authDomain: "vue-crm-10582.firebaseapp.com",
  projectId: "vue-crm-10582",
  storageBucket: "vue-crm-10582.appspot.com",
  messagingSenderId: "844953752169",
  appId: "1:844953752169:web:c741f2acada4f569ecc8f8",
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
