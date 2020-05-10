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
      this.$store.commit("setAddBookmarkShow", true); // 关闭弹窗
    },
    open(url) {
      window.open(url, "_blank");
    },
    handleEdit(ev) {
      console.log(ev);
    },
    handleDelete(ev) {
      console.log(ev);
    },
  },
  watch: {
    "$store.state.category": function(ev) {
      // 获取
      const { _id } = ev;
      http.Bookmarks.getDataByCategory(_id).then((data) => {
        console.log(data);
        this.renderData = data;
      });
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
