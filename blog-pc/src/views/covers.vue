<template>

  <div class="body" @click="goIndex">
        <div class="box">
          <img
            class="box-img"
            src="../assets/cover-head-portrait.png"
            alt="UiIGnS.jpg"
            border="0"
          />
          <h1>李小卓</h1>
          <h5>网站建设者 & 网站设计者</h5>
          <p>
               欢迎来到我的博客，本站为非商业化站点，仅为小菜鸟实现的简单的个人网站，功能并不完善，欢迎大家给我留言提意见，如有任何问题请直接联系我👇
          </p>
          <ul>
            <li>
              <img src="../assets/email.png" alt="" width="30px" height="30px">
              <span class="email">752300287@qq.com</span>
            </li>
          </ul>
        </div>
  </div>
</template>

<script>
export default {
  methods: {
    goIndex(){
      this.$router.push("/index");
    }
  }
}
</script>

<style scoped>

.body {
  margin: 0;
  padding: 0;
  background: url(../assets/cover-bgimg.png) no-repeat;
  background-size: cover;
    height: 100%;
    position: fixed;
    width: 100%
}

.box {
  width: 450px;
  background: rgba(0, 0, 0, 0.4);
  padding: 40px;
  text-align: center;
  margin: auto;
  margin-top: 5%;
  color: white;
  font-family: "Century Gothic", sans-serif;
}

.box-img {
  border-radius: 50%;
  width: 200px;
  height: 200px;
}

.box h1 {
  font-size: 40px;
  letter-spacing: 4px;
  font-weight: 100;
}

.box h5 {
  font-size: 20px;
  letter-spacing: 3px;
  font-weight: 100;
}

.box p {
  text-align: justify;
}
ul {
  margin: 0;
  padding: 0;
}
.box li {
  display: inline-block;
  margin: 6px;
  list-style: none;
}
.box li a {
  color: white;
  text-decoration: none;
  font-size: 60px;
  transition: all ease-in-out 250ms;
}

.box li a:hover {
  color: #b9b9b9;
}

.email{
  vertical-align: middle;
}

img{
  vertical-align: middle;
}
</style>
