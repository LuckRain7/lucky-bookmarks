<!--
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-05-10 10:13:19
 -->
<template>
  <a-layout class="home-layout">
    <!-- 头部 -->
    <a-layout-header class="header">
      <div class="logo">Web Bookmarks</div>
    </a-layout-header>
    <!-- 内容 -->
    <a-layout-content style="padding: 0 50px" class="content-layout">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
        <div class="breadcrumb-button">
          <a-button @click="addCatrgery">新增标签</a-button>
          <a-button>新增书签</a-button>
        </div>
      </a-breadcrumb>

      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-sider width="200" style="background: #fff">
          <!-- 菜单 GO -->
          <a-menu
            mode="inline"
            :default-selected-keys="['1']"
            :default-open-keys="['sub1']"
            style="height: 100%"
          >
            <!-- 夫类型 -->
            <template v-for="itemP in category">
              <a-sub-menu :key="itemP.id">
                <span slot="title">
                  <edit-icon :data="itemP" />{{ itemP.name }}
                </span>
                <!-- 子类型 -->
                <template v-for="itemC in itemP.children">
                  <a-menu-item :key="itemC.id">
                    <edit-icon :data="itemC" /> {{ itemC.id }} -
                    {{ itemC.name }}
                  </a-menu-item>
                </template>
              </a-sub-menu>
            </template>
          </a-menu>
          <!-- 菜单 END -->
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          Content
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Web Bookmarks ©2020 Created by LuckRain7
    </a-layout-footer>
    <!-- 弹窗 -->
    <add-category></add-category>
    <edit-category></edit-category>
    <!-- 弹窗 END -->
  </a-layout>
</template>
<script>
// import Http from "@/service/index";
import AddCategory from "./AddCategory.vue";
import EditCategory from "./EditCategory.vue";
import EditIcon from "./Edit.vue";
export default {
  data() {
    return {
      // category: [],

      confirmLoading: false,
    };
  },
  methods: {
    handleSubmit() {
      // 提交标签
    },

    // 添加书签
    addCatrgery() {
      this.$store.commit("setCategoryShow", true); // 打开弹窗
    },
  },
  mounted() {},
  components: {
    AddCategory,
    EditIcon,
    EditCategory,
  },
  computed: {
    // 获取 书签类型
    category() {
      return this.$store.state.categoryList;
    },
  },
};
</script>
