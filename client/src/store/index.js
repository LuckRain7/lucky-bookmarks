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
    addCategoryShow: false, // 添加标签弹窗
    categoryList: [],
    EditCategoryVisible: false, // 编辑标签弹窗
    EditCategoryData: {}, // 编辑标签数据
    category: {}, // 所选标签
    addBookmarkShow: false,
    addBookmarkShowType: "", // 编辑 or 新增
    editBookmarkSData: {}, // 需要编辑的数据
  },
  mutations: {
    setCategoryShow(state, data) {
      state.addCategoryShow = data;
    },
    setEditCategoryVisible(state, data) {
      state.EditCategoryVisible = data;
    },
    setEditCategoryData(state, data) {
      state.EditCategoryData = data;
    },
    setCategoryList(state, data) {
      state.categoryList = data;
    },
    setCategory(state, data) {
      state.category = data;
    },
    setAddBookmarkShow(state, data) {
      state.addBookmarkShow = data;
    },
    setAddBookmarkShowType(state, data) {
      state.addBookmarkShowType = data;
    },
    setEditBookmarkSData(state, data) {
      state.editBookmarkSData = data;
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
