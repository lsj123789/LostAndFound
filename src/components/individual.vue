<template>
  <div class="container">
    <mt-header title="失物招领">
      <router-link to="/lost" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-header title="我的"></mt-header>

    <div class="information-con">{{information}}</div>
    <router-link to="/aboutUs">
      <mt-cell title="关于我们" is-link></mt-cell>
    </router-link>

    <template>
      <div class="footer">
        <router-link to="/lost">
        <div>
            <img class="footer-nav" src="../assets/首页.png">
            <div>首页</div>
          </div>
        </router-link>
        <router-link to="/publish">
          <div>
            <img class="footer-nav" src="../assets/round_add.png">
            <div>发布</div>
          </div>
        </router-link>
        <div>
          <img class="footer-nav" src="../assets/个人.png">
          <div>个人</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      information: ""
    };
  },
  mounted() {
    this.GetInformation();
  },
  methods: {
    GetInformation() {
      var storage = window.localStorage;
      var name = storage.loginUsername;
      console.log(name);
      this.information = name;
    }
  }
};
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/lostbgi.jpg");
  background-size: 100% 100%;
  background-attachment: fixed;
}
.footer {
  width: 100%;
  position: fixed;
  display: flex;
  bottom: 0px;
  justify-content: space-around;
  text-align: center;
  line-height: center;
  background-color: #c4def8;
  font-size: 6px;
}

.footer-nav {
  height: 6vh;
}

.information-con {
  margin: 20px auto;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background-color: #C4DEF8;
  text-align: center;
  line-height: 100px;
}
</style>
