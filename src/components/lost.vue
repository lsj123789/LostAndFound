<template>
  <div class="container">
    <mt-header title="失物招领">
      <router-link to="/lost" slot="left">
        <router-link to="/">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <mt-header title="首页"></mt-header>
    <mt-navbar v-model="selected" @click.native="changeTab()">
      <mt-tab-item id="1">Lost</mt-tab-item>
      <mt-tab-item id="2">Found</mt-tab-item>
    </mt-navbar>

    <div class="content-box" v-for="(content,index) in contentArr" :key="index">
      <div class="kind-con">{{content.kind}}</div>
      <br>
      <div class="describe-con">{{content.describe}}</div>
    </div>

    <template>
      <div class="footer">
        <router-link to="/lost" class="router-link-active">
          <div>
            <img class="footer-nav" src="../assets/首页.png">
            <div>首页</div>
          </div>
        </router-link>
        <router-link to="/publish" class="router-link-active">
          <div>
            <img class="footer-nav" src="../assets/round_add.png">
            <div>发布</div>
          </div>
        </router-link>
        <router-link to="/individual" class="router-link-active">
          <div>
            <img class="footer-nav" src="../assets/个人.png">
            <div>个人</div>
          </div>
        </router-link>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      contentArr: [],
      selected: "",
      loginUsername: ""
    };
  },
  mounted() {
    this.getResult();
  },
  methods: {
    getLostContent() {
      let that = this;
      axios.get("http://localhost:3000/lostContent").then(function(res) {
        console.log(res.data);
        that.contentArr = res.data;
      });
    },
    getFoundContent() {
      let that = this;
      axios.get("http://localhost:3000/foundContent").then(function(res) {
        console.log(res.data);
        that.contentArr = res.data;
      });
    },
    getResult() {
      let that = this;
      axios.get("http://localhost:3000/content").then(function(res) {
        console.log(res.data);
        that.contentArr = res.data;
      });
    },
    changeTab() {
      if (this.selected === "1") {
        this.getLostContent();
      } else {
        this.getFoundContent();
      }
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

.kind-con {
  color: #60b2e9;
  height: 1px;
  font-weight: bold;
  text-align: right;
  padding-right: 15px;
  padding-top: 5px;
}

.describe-con {
  padding-left: 5px;
  display: flex;
}

.router-link-active {
  text-decoration: none;
}

.content-box {
  width: 88%;
  height: 15vh;
  /* background-color: #d3d7de; */
  border: 2px solid #60b2e9;
  margin: 20px auto;
  border-radius: 5px;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 15px;
}
</style>
