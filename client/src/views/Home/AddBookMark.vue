<!--
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-05-10 15:13:57
 -->
<!--
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-05-10 11:57:15
 -->
<template>
  <a-modal
    title="添加书签"
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
  beforeCreate() {},
  methods: {
    // 点击确定
    handleOk() {
      // newDate: { type: String },
      // category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }

      // 格式化数据

      const { _id } = this.category;
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

      console.log(res);

      // 发送请求 创建标签
      Http.Bookmarks.addBookmarks(res).then(({ data }) => {
        if (data.code === 0) {
          // 延迟关闭
          setTimeout(() => {
            this.$store.commit("setAddBookmarkShow", false); // 关闭弹窗
            this.confirmLoading = false;
            this.$store.dispatch("getCategoryList"); // 重新获取数据
          }, 1000);
        }
      });
    },
    // 关闭弹窗
    handleCancel() {
      this.$store.commit("setAddBookmarkShow", false); // 关闭弹窗
    },
  },
  computed: {
    // 弹窗开关监听
    visible() {
      return this.$store.state.addBookmarkShow;
    },
    category() {
      return this.$store.state.category;
    },
  },
  watch: {},
};
</script>

<style></style>
