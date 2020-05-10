/*
 *  Description:
 *  Author: LuckRain7
 *  Date: 2020-05-10 10:13:19
 */
import Vue from "vue";
import Vuex from "vuex";
import Http from "@/service/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    addCategoryShow: true,
    categoryList: [],
  },
  mutations: {
    setCategoryShow(state, data) {
      state.addCategoryShow = data;
    },
    // 设置类型列表
    setCategoryList(state, data) {
      state.categoryList = data;
    },
  },
  actions: {
    // 获取类型列表
    getCategoryList({ commit }) {
      Http.Category.getData().then((data) => {
        commit("setCategoryList", data);
      });
    },
  },
  modules: {},
  getters: {
    getCategoryById: (state) => (id) => {
      return state.categoryList.filter((category) => category.id == id);
    },
  },
});
