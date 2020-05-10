<!--
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-05-10 10:13:19
 -->
<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("getCategoryList"); // 获取类型列表
  },
};
</script>
<style lang="less">
body,
html,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
