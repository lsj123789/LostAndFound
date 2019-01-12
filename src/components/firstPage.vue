<template>
  <div>
    <mt-header title="失物招领">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">登录</mt-tab-item>
      <mt-tab-item id="2">注册</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="loginUsername"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="loginPassword"></mt-field>
        <button
          style="height:40px;width:100%;background-color:DodgerBlue;outline:none"
          @click="LoginHandle"
        >立即登录</button>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-field label="用户名" required clearable placeholder="请输入用户名" v-model="registeUsername"></mt-field>
        <mt-field
          label="密码"
          required
          clearable
          placeholder="请输入密码"
          type="password"
          v-model="registePassword"
        ></mt-field>
        <button
          @click="registeHandle"
          style="height:40px;width:100%;background-color:DodgerBlue;outline:none"
        >立即注册</button>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      selected: "1",
      loginUsername: "",
      loginPassword: "",
      registeUsername: "",
      registePassword: ""
    };
  },
  methods: {
    LoginHandle: function() {
      let that = this;
      axios
        .post("http://localhost:3000/login", {
          loginUsername: this.loginUsername,
          loginPassword: this.loginPassword
        })
        .then(function(res) {
          console.log(res.data);
          let data = res.data;
          if (data === null) {
            Toast({
              message: "用户名或密码输入错误，请重新输入！"
            });
            that.loginUsername = "";
            that.loginPassword = "";
          } else {
            Toast({
              message: "恭喜你 登录成功！"
            });
            that.$router.push("/lost");
          }
        });
      // if (window.localStorage) {
      //   alert("浏览器支持localStorage");
      // } else {
      //   alert("浏览器不支持localStoraage");
      // }
      var storage = window.localStorage; //web存储
      storage.loginUsername = this.loginUsername;
      console.log(storage);
    },

    registeHandle: function() {
      axios
        .post("http://localhost:3000/registe", {
          registeUsername: this.registeUsername,
          registePassword: this.registePassword
        })
        .then(res => {
          console.log(res.data);
          let data = res.data;
          if (data === null) {
            Toast({
              message: "注册成功，请赶快登录吧！",
              iconClass: "check-circle.png"
            });
            this.selected = "1";
            this.registeUsername = "";
            this.registePassword = "";
          } else {
            Toast({
              message: "用户名已经被占用，请重新输入！",
              iconClass: "close-circle.png"
            });
            this.registeUsername = "";
            this.registePassword = "";
          }
        })
        .catch(err => {
            console.log(err)
        });
    }
  }
};
</script>

<style scoped>
</style>

