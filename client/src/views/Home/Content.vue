<!--
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-05-10 15:08:06
 -->
<template>
  <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
    <div><a-icon type="plus-circle" @click="handleAdd" /></div>
    <div class="linkdiv" v-for="item in renderData" :key="item._id">
      <a-icon type="edit" @click="handleEdit(item)" />
      <a-icon type="delete" @click="handleDelete(item)" />
      <a :href="item.url" target="_blank">
        [{{ item.newDate }}] - {{ item.icon }} - {{ item.title }}
      </a>
    </div>
  </a-layout-content>
</template>

<script>
import http from "@/service/index";
export default {
  data() {
    return {
      renderData: [],
    };
  },
  methods: {
    handleAdd() {
      this.$store.commit("setAddBookmarkShowType", 2); // 新增弹窗
      this.$store.commit("setAddBookmarkShow", true); // 新增弹窗
    },
    open(url) {
      window.open(url, "_blank");
    },
    handleEdit(ev) {
      this.$store.commit("setAddBookmarkShow", true); // 编辑弹窗
      this.$store.commit("setAddBookmarkShowType", 1); // 编辑弹窗
      this.$store.commit("setEditBookmarkSData", ev); // 传入需要编辑的数据
    },
    handleDelete(ev) {
      http.Bookmarks.deleteBookmarks(ev._id).then((data) => {
        console.log(data);
        this.getRenderData(this.$route); // 重置数据
        this.$message.info("删除成功");
      });
    },
    // 获取渲染数据
    getRenderData(_route) {
      // 通过 _id 获取
      const _id = _route.query.id;
      http.Bookmarks.getDataByCategory(_id).then((data) => {
        console.log(data);
        this.renderData = data;
      });
    },
  },
  mounted() {
    // 获取渲染数据
    this.getRenderData(this.$route);
  },
  watch: {
    // 根据路由约定 获取渲染数据
    $route: function(to) {
      this.getRenderData(to);
    },
  },
};
</script>

<style>
.linkdiv {
  font-size: 17px;
  color: #1890ff;
  margin: 10px 0;
}
.linkdiv .anticon {
  margin: 0 5px;
}
</style>
