<!--
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-05-10 11:57:15
 -->
<template>
  <a-modal
    title="编辑标签"
    :visible="visible"
    :confirm-loading="confirmLoading"
    @ok="handleUpdate"
    @cancel="handleClose"
  >
    <template slot="footer">
      <a-button key="back" @click="handleUpdate">
        更新
      </a-button>
      <a-button key="submit" type="danger" @click="handleDelete">
        删除
      </a-button>
    </template>

    <a-form id="components-add-category">
      <a-form-item label="父级id">
        <a-input type="text" v-model="CategoryForm.parent" size="large" />
      </a-form-item>

      <a-form-item label="id">
        <a-input type="text" v-model="CategoryForm.id" size="large" />
      </a-form-item>

      <a-form-item label="名称">
        <a-input type="text" v-model="CategoryForm.name" size="large" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import Http from "@/service/index";
export default {
  props: {},
  data() {
    return {
      ModalText: "Content of the modal",
      // visible: true,
      confirmLoading: false,
      // CategoryForm: {},
    };
  },
  beforeCreate() {},
  methods: {
    // 点击更新
    handleUpdate() {
      // 格式化标签
      const category = JSON.parse(JSON.stringify(this.CategoryForm));
      category.children && delete category.children;

      // 开启加载模式
      this.confirmLoading = true;

      // 发送请求 更新标签
      Http.Category.updateCategory(category).then(({ data }) => {
        if (data.code === 0) {
          this.yanshiClose();
        }
      });
    },
    // 删除标签
    handleDelete() {
      let id = this.CategoryForm._id;
      // 发送请求 删除标签
      Http.Category.deleteCategory(id).then(({ data }) => {
        if (data.code === 0) {
          this.yanshiClose();
        }
      });
    },
    // 延迟关闭
    yanshiClose() {
      setTimeout(() => {
        this.$message.info("操作成功");
        this.$store.commit("setEditCategoryVisible", false); // 关闭弹窗
        this.confirmLoading = false;
        this.$store.dispatch("getCategoryList"); // 重新获取数据
      }, 1000);
    },
    handleClose() {
      this.$store.commit("setEditCategoryVisible", false); // 关闭弹窗
    },
  },
  computed: {
    // 弹窗开关监听
    visible() {
      return this.$store.state.EditCategoryVisible;
    },
    CategoryForm() {
      return this.$store.state.EditCategoryData;
    },
  },
};
</script>

<style></style>
