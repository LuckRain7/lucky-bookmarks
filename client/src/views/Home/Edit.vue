<!--
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-05-10 13:51:37
 -->
<template>
  <a-icon type="edit" @click="edit" />
</template>

<script>
export default {
  props: {
    data: Object,
  },
  methods: {
    edit() {
      this.$store.commit("setEditCategoryData", this.data);
      this.$store.commit("setEditCategoryVisible", true);
    },
  },
};
</script>

<style></style>
