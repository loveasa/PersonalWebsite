<template>
  <div>
    <div class="background" style="position: fixed; top: 0; left: 0">
      <img :src="imgSrc" width="100%" height="800px" alt="" />
    </div>

    <CommonHeader></CommonHeader>

    <div class="msg-box">
      <h4>-------智慧碰撞🙌-------</h4>
      <textarea
        name="postComment"
        id="comment-content"
        cols="80"
        rows="10"
        placeholder="欢迎思想碰撞"
        v-model="msg_content"
      ></textarea>
      <div class="style-blank"></div>
      <div>
        <button @click="postMessage">发表评论</button>
      </div>
      <div class="style-blank"></div>

      <div class="comment" v-for="item in messageList" :key="item.msg_id">
        <div class="comment-content">{{ item.msg_content }}</div>

        <div class="comment-info">
          <span class="posttime">{{ item.msg_time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonHeader from "../components/CommonHeader";

export default {
  data() {
    return {
      messageList: [],
      msg_content: "",
      imgSrc: require("../assets/cover-bgimg.png"),
    };
  },
  created() {
    this.getMessage();
  },
  components: {
    CommonHeader,
  },
  methods: {
    getMessage() {
      this.$http.get("/message/list").
      then((res) => {
        let {state} = res.data;
        if (state == "success") {
          let { messages } = res.data;
          this.messageList = messages;
        }
      });
    },
    postMessage() {
      this.$http
        .post("/message/postMessage", {
          msg_content: this.msg_content,
        })
        .then((res) => {
          let { state } = res.data;
          if (state == "success") {
            this.msg_content = "";
            this.getMessage();
          } else {
            alert("发表评论失败");
          }
        });
    },
  },
};
</script>

<style scoped>
.msg-box {
  margin: 50px auto;
  padding: 20px;
  background: #cccccc;
  z-index: 1;
  position: absolute;
  background-color: rgba(252, 247, 251, 0.6);
  margin-left: 350px;
  width: 800px;
}
.comment {
  padding: 20px;
  border: 1px solid black;
  margin-bottom: 10px;
  /* z-index:1;
    position: absolute; */
}

.style-blank {
  height: 20px;
}
</style>