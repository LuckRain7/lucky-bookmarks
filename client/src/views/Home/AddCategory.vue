<!--
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-05-10 11:57:15
 -->
<template>
  <a-modal
    title="添加标签"
    :visible="visible"
    :confirm-loading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <a-form id="components-add-category">
      <a-form-item label="上级标签">
        <!-- 选取上级标签 -->
        <a-select
          placeholder="选取上级标签"
          v-model="CategoryForm.parent"
          size="large"
        >
          <a-select-option value="0" key="0">
            空
          </a-select-option>
          <a-select-option
            :value="item.id"
            v-for="item in category"
            :key="item.id"
          >
            {{ item.id }} - {{ item.name }} 
          </a-select-option>
        </a-select>
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
      CategoryForm: {},
    };
  },
  beforeCreate() {},
  methods: {
    // 点击确定
    handleOk() {
      // 格式化数据
      const CategoryForm = this.CategoryForm;
      const res = {
        id: CategoryForm.id,
        name: CategoryForm.name,
      };
      CategoryForm.parent !== "0" && (res.parent = CategoryForm.parent);

      // 开启加载模式
      this.confirmLoading = true;

      // console.log(res);

      // 发送请求 创建标签
      Http.Category.addCategory(res).then((data) => {
        console.log(data);
      });

      // 延迟关闭
      setTimeout(() => {
        this.$store.commit("setCategoryShow", false); // 关闭弹窗
        this.confirmLoading = false;
        this.$store.dispatch("getCategoryList"); // 重新获取数据
      }, 1000);
    },
    // 关闭弹窗
    handleCancel() {
      this.$store.commit("setCategoryShow", false); // 关闭弹窗
    },
  },
  computed: {
    // 弹窗开关监听
    visible() {
      return this.$store.state.addCategoryShow;
    },
    // 返回 全部书签类型
    category() {
      return this.$store.state.categoryList;
    },
  },
  watch: {
    // 监听 父类型变化 获取对应子类型 id
    "CategoryForm.parent": function(ev) {
      if (ev !== "0") {
        // 获取对应 id 类型
        const res = this.$store.getters.getCategoryById(ev)[0];
        // 求得对应的子类型 id
        this.CategoryForm.id = `${res.id}.${res.children.length + 1}`;
      } else {
        this.CategoryForm.id = `${this.category.length + 1}`;
      }
    },
  },
};
</script>

<style></style>
