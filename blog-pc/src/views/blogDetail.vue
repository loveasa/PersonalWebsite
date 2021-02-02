<template>
  <div>

    <div class="background" style="position: fixed; top: 0; left: 0">
      <img :src="imgSrc" width="100%" height="800px" alt="" />
    </div>

    <CommonHeader></CommonHeader>

     <div class="blog-box">

      <div class="blog-title">
        <h3>{{ blog.title }}</h3>
        <span>{{ blog.post_time }}</span>
        <span>{{ blog.user_id }}</span>
      </div>
      <div class="blog-content">{{ blog.content }}</div>
       </div>

     <div class="blog-comment-box">
      <div class="comment-list">
       
        <h4>-------评论🙌-------</h4>
      
        <textarea
          name="postComment"
          id="comment-content"
          cols="80"
          rows="10"
          placeholder="欢迎畅所欲言"
          v-model="content"
        ></textarea>
         <div class="style-blank"></div>
        <div>
      
          <button @click="postComment">发表评论</button>
      
        </div>
 <div class="style-blank"></div>

        <div class="comment" v-for="item in commentList" :key="item.comm_id">
          <div class="comment-content">{{ item.comm_content }}</div>

          <div class="comment-info">
            <span class="username">{{ item.username }}</span
            >&nbsp;
            <span class="posttime">{{ item.comm_post_time }}</span>
          </div>
        </div>
      </div>
       </div>
    <!-- </div> -->

  </div>
</template>

<script>
import CommonHeader from "../components/CommonHeader";

export default {
  components: {
    CommonHeader,
  },
  data() {
    return {
      imgSrc: require("../assets/cover-bgimg.png"),
       blog: "",
      content: "",
      comments: [],
      commentList: [],
    }
  },
  created() {
    this.getBlogDetail();
    this.getComment();
  },
    methods: {
    getBlogDetail() {
      let blog_id = this.$route.params.blogId;
        this.$http
          .get("/blog/detail", {
            params: {
              blog_id: blog_id,
            },
          })
          .then((res) => {
            let { state, blogs } = res.data;
            if (state == "success") {
              this.blog = blogs;
            }
          });
    },
    getComment() {
      let blog_id = this.$route.params.blogId;
      this.$http
        .get("/blog/comment", {
          params: {
            blog_id: blog_id,
          },
        })
        .then((res) => {
          let { state, comments } = res.data;
          if (state == "success") {
            this.commentList = comments;
          }
        });
    },
    postComment() {
    //   let loginUser = this.$store.state.loginUser;
     let blog_id = this.$route.params.blogId;
        this.$http
          .post("/blog/postComment", {
            blog_id: blog_id,
            content: this.content,
            // user_id: loginUser.user_id,
          })
          .then((res) => {
            let { state } = res.data;
            if (state == "success") {
              this.$router.push("/blog/detail/" + blog_id);
              this.content = "";
              this.getComment()
            } else {
              alert("发表评论失败");
            }
          });
    },
  },
};
</script>

<style scoped>
.background{
    width:100%;  
    height:100%;  /**宽高100%是为了图片铺满屏幕 */
    z-index:-1;
    position: absolute;
}
.blog-box {
  margin: 60px auto;
  padding: 20px;
  background: #cccccc;
   z-index:1;
    position: absolute;
     background-color: rgba(252, 247, 251, 0.6);
     margin-left: 350px;
     width: 800px;
}
.blog-title {
  padding: 10px;
   /* z-index:1;
    position: absolute; */
}
h3{
    font-family: "Microsoft YaHei";
    font-size: 30px;
     color: rgb(37, 35, 35);
}

.blog-comment-box{
margin: 300px auto;
  padding: 20px;
  background: #cccccc;
   z-index:1;
    position: absolute;
     background-color: rgba(252, 247, 251, 0.6);
     margin-left: 350px;
     width: 800px;
}
/* .blog-content {
  padding: 10px;
   z-index:1;
    position: absolute;
} */

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

/* .comment-info {
  float: right;
   z-index:1;
    position: absolute;
} */

/* #comment-content {
  height: 64px;
  padding: 10px 10px;
   z-index:1;
    position: absolute;
} */

</style>