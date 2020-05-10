/*
 *  Description:
 *  Author: LuckRain7
 *  Date: 2020-05-10 10:13:19
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import antDesignVue from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "./style/index.less";

Vue.config.productionTip = false;
Vue.use(antDesignVue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
