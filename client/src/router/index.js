/*
 *  Description:
 *  Author: LuckRain7
 *  Date: 2020-05-10 10:13:19
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/search",
        component: () =>
          import(/* webpackChunkName: "content" */ "../views/Home/Content.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Login.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
