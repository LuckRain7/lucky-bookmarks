<template>
  <div class="layout-bookmarks">
    <!--  -->
    <header class="my-header">
      <img src="/logo.png" alt="" />
    </header>
    <!--  -->
    <div class="main-bookmarks">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.layout-bookmarks {
  width: 100%;
}
.my-header {
  height: 60px;
  width: 100%;
  height: 3.6rem;
  background-color: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #eaecef;
  line-height: 60px;
}

.my-header img {
  /* display: inline; */
  height: 80%;
  width: auto;
  margin-left: 20px;
}

.main-bookmarks {
  max-width: 1000px;
  margin: 30px auto !important;
}

.link {
  color: #3eaf7c;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
}
.link:hover {
  color: gold;
}
</style>
