import Vue from "vue";
import App from "./App";
import router from "./router";
import VeeValidate from "vee-validate";

import "@/assets/scss/index.scss";

Vue.config.productionTip = false;

Vue.use(VeeValidate);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
