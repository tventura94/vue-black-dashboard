import Vue from "vue";
import { createApp } from "vue";
import VueRouter from "vue-router";
import RouterPrefetch from "vue-router-prefetch";
import App from "./App.vue";
// TIP: change to import router from "./router/starterRouter"; to start with a clean layout
import router from "./router";
import i18n from "./i18n";
import "./registerServiceWorker";

Vue.use(VueRouter);
Vue.use(RouterPrefetch);

/* eslint-disable no-new */
const app = createApp(App);
app.use(router);

import BlackDashboard from "./plugins/blackDashboard";
Vue.use(BlackDashboard);

app.mount("#app");
