import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import home from "./home";
import order from "./order";
import chart from "./chart";
import photo from "./photo";
import product from "./product";
import shop from "./shop";

const routes = [
  home,
  order,
  chart,
  photo,
  product,
  shop,
  {
    path: "/*",
    redirect: "/home"
  }
];

const router = new VueRouter({
  routes
});

export default router;
