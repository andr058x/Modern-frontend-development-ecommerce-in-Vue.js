import Vue from "vue";

import Router from "vue-router";
import * as menus from "./menu";

Vue.use(Router);

var basePath = '';

var menu = [];
for (let routeItem in menus) {
  menu.push(menus[routeItem]);
}

//
// menu definition
//

const layoutComponent = function(resolve) {
  require(["@/components/Layout/AppLayout.vue"], resolve);
};

const routes = [
  {
    path: "/",
    name: "layout",
    component: layoutComponent,
    redirect: to => {
      return "/home";
    }
  },
  ...menu
];

const router = new Router({
  base: basePath,
  mode: "history",
  linkActiveClass: "active",
  routes
});

export default router;
