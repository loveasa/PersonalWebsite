<template>
  <div class="header">

  <nav  class="bg-color nav-transparent">

    <div class="self-message">
      <img
        src="../assets/cover-head-portrait.png"
        class="logo-img"
        width="50px"
        height="50px"
        alt="LOGO"
      />
      <span class="logo-span">Esther🎀</span>
    </div>

    <ul class="right">

      <li>
          <img
                  src="../assets/login.png"
                  width="30px"
                  height="30px"
                  alt=""
                />
                <span @click="login">登录</span>
      </li>

      <li>
          <img
                  src="../assets/icon-indexnor.png"
                  width="30px"
                  height="30px"
                  alt=""
                />
                <span @click="goIndex">首页</span>
      </li>

      <li>
          <img
                  src="../assets/files.png"
                  width="30px"
                  height="30px"
                  alt=""
                />
                <span @click="order">归档</span>
      </li>

      <li>
          <img
                  src="../assets/about_us.png"
                  width="30px"
                  height="30px"
                  alt=""
                />
                <span @click="about">关于</span>
      </li>

      <li>
          <img
                  src="../assets/message.png"
                  width="30px"
                  height="30px"
                  alt=""
                />
                <span @click="message">留言板</span>
      </li>

      <li>
         <img
                  src="../assets/search.png"
                  width="30px"
                  height="30px"
                  alt=""
                />
      </li>

    </ul>

  </nav>

  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push("/login");
    },
    goIndex() {
      this.$router.push("/index");
    },
    order() {
      this.$router.push("/order");
    },
    about() {
      this.$router.push("/");
    },
    message() {
      this.$router.push("/message");
    },
  },
}
</script>

<style scoped >
.header{
  width: 100%;
  /* max-width: 1125px; */
   margin: 0 auto;
  /* max-width: 1280px; */
  height: 64px;
  /* line-height: 64px; */
}
ul{
  list-style: none;
}
.logo-img {
  border-radius: 50%;
}
.logo-span {
  vertical-align: middle;
}
img {
  vertical-align: middle;
}
.right {
  float: right ;
}
.nav-transparent {
  /* background-color: transparent; */
  background-image: none;
  box-shadow: none;
}
nav {
  position: fixed;
   height: 64px;
  line-height: 64px;
    /* background-color: rgb(66, 132, 190); */

}

.self-message{
  /* position: absolute; */
  float: left;
  color: #fff;
  /* display: inline-block; */
  font-size: 2.1rem;
  padding: 0;
  left: 50%;
  margin-left: 50px;
  cursor: pointer;
}
nav {
  color: #fff;
 background-color:rgba(252, 247, 251, 0.4);
  width: 100%;
  height: 64px;
  line-height: 64px;
}
li{
  /* vertical-align: top; */
   position: relative;
  cursor: pointer;
  /* display: inline-block; */
  /* overflow: hidden;*/
}
img {
  position: relative;
  z-index: -1;
  border-style: none;
}
.logo-span {
  font-size: 1.5rem;
}
/* .logo-img {
  height: 45px;
  vertical-align: middle;
  padding-bottom: 6px;
} */
.right {
  float: right ;
}
nav ul {
  margin: 0;
}
nav ul li {
  float: left;
  /* padding: 0; */
  /* margin: 10px; */
  margin-right: 20px;
}

</style>