<template>
  <div class="container">
    <mt-header title="失物招领">
      <router-link to="/individual" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-header title="关于我们"></mt-header>

    <template>
      <div>
        <img src="../assets/jser-logo.png" style="width:100%;height:25vh">
        <div class="content-con">
          Jser俱乐部，成立于2016年初，立足于东北农业大学新教师公寓。它是由一群热爱编程，执着代码，
          痴迷全栈技术的极客们组成的IT技术交流组织。我们秉承着让农大学子以最低的成本了解互联网，
          以最简单的方式入行前端工程师为原则，潜心做好每一件小事。
        </div>
      </div>
    </template>
  </div>
</template>


<style scoped>
* {
  padding: 0;
  margin: 0;
}

.container {
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/lostbgi.jpg");
  background-size: 100% 100%;
  background-attachment: fixed;
}

.content-con {
  padding: 20px 20px;
}

.router-link-active {
  text-decoration: none;
}
</style>
