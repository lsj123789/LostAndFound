<template>
  <div class="container">
    <mt-header title="失物招领">
      <router-link to="/lost" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <mt-header title="信息发布"></mt-header>

    <div class="demand-con">[请]请写明丢失或捡到物品的详细信息!
      <br>[注]请一定要写明怎样才能联系到你哦！
      <br>[意]请不要发布违反规定的信息 一经发现 严肃处理！
      <br>
    </div>

    <mt-field
      label="物品描述"
      placeholder="请描述一下你的物品吧~"
      type="textarea"
      class="describe-con"
      v-model="describe"
    ></mt-field>

    <div>
      <select type="text" v-model="kind" class="input-con">
        <option value>请选择物品的类型</option>
        <option value="lost">lost</option>
        <option value="found">found</option>
      </select>
    </div>
    <button v-on:click="submit" class="button-con">提交</button>
  </div>
</template>


<script>
import axios from "axios";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      kind: "",
      describe: ""
    };
  },
  methods: {
    submit: function() {
      if (this.kind === "" || this.describe === "") {
        alert("请先选择类型和描述物品！");
        // } else if (this.describe === "") {
        //   alert("请描述物品");
        return 0;
      } else {
        axios
          .post("http://localhost:3000/submit", {
            kind: this.kind,
            describe: this.describe
          })
          .then(function(res) {
            console.log(res.data);
          });
        Toast({
          message: "发布成功",
          iconClass: "check-circle.png"
        });
        this.kind = "";
        this.describe = "";
        this.$router.push("/lost");
      }
    }
  }
};
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  /* background-image: url("../assets/lostbgi.jpg"); */
  background-size: 100% 100%;
  background-attachment: fixed;
}

.demand-con {
  font-size: 14px;
  padding: 10px 10px;
}
.input-con {
  padding: 5px;
  width: 100vw;
  margin: 0px auto;
  height: 40px;
  line-height: 40px;
  outline: none;
  border-radius: 8px;
  background-color: #e9f8ed;
}

.describe-con {
  width: 100%;
  height: 20vh;
  margin: 10px auto;
  border: 1px solid #c4def8;
  background-color: #e9f8ed;
}

.button-con {
  height: 6vh;
  width: 100%;
  border-radius: 5%;
  margin: 10px auto;
  border: 1px solid #c4def8;
  outline: none;
  background-color: #e9f8ed;
}
</style>


