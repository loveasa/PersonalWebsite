<template>
  <div>
    <div class="background" style="position:fixed;top:0;left:0">
      <img :src="imgSrc" width="100%" height="800px" alt="" />
    </div>

    <div class="front">
      <Bgm></Bgm>
      <CommonHeader></CommonHeader>

      <el-col :span="8"  style="position:fixed;top:20;left:0">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span class="name">Esther</span>

            <p>
              <img src="../assets/here.png" alt="" width="20px" height="20px" />
              <span class="area">黑龙江</span>
            </p>
          </div>
          <div v-for="o in 4" :key="o" class="text item container">
            <span
              >Welcome to my blog .Welcome to communicate with me.We can learn
              from each other and make progress together</span
            >
          </div>
        </el-card>
      </el-col>

      <el-card class="Webmsg-box-card"  style="position:fixed;top:20;left:0">
        <div class="message">网站信息</div>
      </el-card>
    </div>

    <el-carousel height="300px">
      <el-carousel-item v-for="item in dataimg" :key="item.vaule">
        <div class="carousel-explain">
          <img :src="item.src" width="100%" height="100%" alt="" />
        </div>
      </el-carousel-item>
    </el-carousel>

    <el-card class="article-box-card" v-for="(item,index) in blogList"
      :key="index">
      <div >
        <h3>
          <router-link :to="{ path: '/blog/detail/' + item.blog_id }">{{
            item.title
          }}</router-link>
        </h3>
        <p class="blog-content">{{ item.content }}</p>
        <span class="post-time">{{ item.post_time }}</span>
      </div>
    </el-card>

  </div>
</template>

<script>
import Bgm from "../components/Bgm.vue";
import CommonHeader from "../components/CommonHeader";

export default {
  name: "app",
  components: {
    CommonHeader,
    Bgm,
  },
  data() {
    return {
      blogList: [],
      imgSrc: require("../assets/cover-bgimg.png"),
      dataimg: [
        {
          src: require("../assets/bgm3.png"),
        },
        {
          src: require("../assets/bgm4.png"),
        },
        {
          src: require("../assets/bgm5.png"),
        },
        {
          src: require("../assets/bgm6.png"),
        },
      ],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http.get("/blog/list").then((res) => {
        let { state } = res.data;
        if (state == "auth-fail") {
          alert("请求未授权");
        } else if (state == "success") {
          let { blogs } = res.data;
          this.blogList = blogs;
        }
      });
    },
  },
};
</script>

<style scoped>
.background {
  /* width: 100%;
  height: 100%; *宽高100%是为了图片铺满屏幕 */
  z-index: -1;
  position: absolute;
  background-size: cover;
}

.front {
  z-index: 1;
  position: absolute;
}
.text {
  font-size: 16px;
  z-index: 1;
  position: absolute;
  margin-right: 30px;
  color: rgb(5, 5, 5);
}

.item {
  margin-bottom: 30px;
  z-index: 1;
  position: absolute;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
  z-index: 1;
  position: absolute;
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 250px;
  height: 300px;
  z-index: 1;
  position: absolute;
  margin: 30px;
  margin-left: 70px;
  background-color: rgba(252, 247, 251, 0.3);
  border: rgba(252, 247, 251, 0.3);
}
.area {
  vertical-align: middle;
}

img {
  vertical-align: middle;
}
.name {
  font-family: Arial;
  font-size: 30px;
  color: rgb(5, 5, 5);
}

.Webmsg-text {
  font-size: 14px;
  z-index: 1;
  position: absolute;
}

.Webmsg-item {
  padding: 18px 0;
  z-index: 1;
  position: absolute;
}

.Webmsg-box-card {
  z-index: 1;
  position: absolute;
  width: 250px;
  height: 300px;
  background-color: rgba(252, 247, 251, 0.3);
  border: rgba(252, 247, 251, 0.3);
  margin-left: 70px;
  margin-top: 370px;
}
.message {
  font-family: Arial;
  font-size: 25px;
  color: rgb(5, 5, 5);
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  z-index: 1;
  position: absolute;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-carousel {
  width: 900px;
  margin-left: 450px;
  /* margin-top: 270px; */
  padding-top: 95px;
}

.article-text {
  font-size: 14px;
  z-index: 1;
  position: absolute;
}

.article-item {
  padding: 18px 0;
  z-index: 1;
  position: absolute;
}

.article-box-card {
  width: 900px;
  /* z-index: 1;
  position: absolute; */
  margin-left: 450px;
  margin-top: 30px;
  background-color: rgba(252, 247, 251, 0.5);
}
</style>