<template>
  <div id="app">
    <!-- <img src="./assets/lostbgi.jpg"> -->
    <!-- 是用来渲染通过路由映射过来的组件，当路径更改时，<router-view> 中的内容也会发生更改 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
/* #app {
  background-image: url("../assets/lostbgi.jpg");
  background-size: 100% 100%;
  background-attachment: fixed;
} */
</style>
