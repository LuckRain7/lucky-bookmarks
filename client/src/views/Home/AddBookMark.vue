<!--
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-05-10 15:13:57
 -->

<template>
  <a-modal
    :title="type === 1 ? '编辑' : '新增'"
    :visible="visible"
    :confirm-loading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <a-form id="components-add-category">
      <a-form-item label="名称">
        <a-input type="text" v-model="BookmarksForm.title" size="large" />
      </a-form-item>

      <a-form-item label="链接">
        <a-input type="text" v-model="BookmarksForm.url" size="large" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import Http from "@/service/index";
import { switchTime } from "@/utils";
export default {
  props: {},
  data() {
    return {
      confirmLoading: false,
      BookmarksForm: {},
    };
  },
  methods: {
    // 点击确定
    handleOk() {
      // 新增数据
      if (this.type === 2) {
        // 格式化数据
        const _id = this.$route.query.id; // 根据路由获取 _id 数据进行添加
        const BookmarksForm = this.BookmarksForm;
        let date = new Date();
        const res = {
          title: BookmarksForm.title,
          url: BookmarksForm.url,
          newDate: switchTime(date, "YYYY-MM-DD"),
          category: _id,
          icon: "",
        };
        // 开启加载模式
        this.confirmLoading = true;
        // 发送请求 创建标签
        Http.Bookmarks.addBookmarks(res).then(({ data }) => {
          if (data.code === 0) {
            this.yanshiClose();
          }
        });
      } else if (this.type === 1) {
        // 编辑操作
        this.edit();
      }
    },
    yanshiClose() {
      // 延迟关闭
      setTimeout(() => {
        this.$store.commit("setAddBookmarkShow", false); // 关闭弹窗
        this.BookmarksForm = {}; // 重置
        this.confirmLoading = false;
        this.$store.dispatch("getCategoryList"); // 重新获取数据
      }, 1000);
    },
    // 关闭弹窗
    handleCancel() {
      this.$store.commit("setAddBookmarkShow", false); // 关闭弹窗
    },
    edit() {
      this.confirmLoading = true; // 开启加载模式
      // 发送请求 创建标签
      Http.Bookmarks.updateBookmarks(this.BookmarksForm).then(({ data }) => {
        if (data.code === 0) {
          this.yanshiClose();
          this.$message.info("编辑成功");
        }
      });
    },
    editOrAdd(type) {
      if (type === 1) {
        this.BookmarksForm = this.$store.state.editBookmarkSData;
      } else {
        this.BookmarksForm = {};
      }
    },
  },
  computed: {
    visible() {
      return this.$store.state.addBookmarkShow; // 弹窗开关监听
    },
    type() {
      this.editOrAdd(this.$store.state.addBookmarkShowType);
      return this.$store.state.addBookmarkShowType; // 弹窗是新增还是编辑 判断
    },
  },
  watch: {},
};
</script>

<style></style>
