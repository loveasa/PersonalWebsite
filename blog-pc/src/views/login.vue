<template>
<div>

    <div class="background" style="position:fixed;top:0;left:0">
      <img :src="imgSrc" width="100%" height="800px" alt="" />
    </div>


        <div class="login-form">
            <h3>用户登录</h3>
            <p>
                用户名：<input type="text" name="username" v-model="username">
            </p>
            <p>
                &nbsp;&nbsp;密码：
                <input type="password" name="password" v-model="password">
            </p>
            <p>
                <button @click="doLogin" class="btn">登录</button>
                <button  @click="goRegist" class="btn">注册</button>
            </p>
        </div>


    </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      imgSrc: require("../assets/login-bg.png"),
    };
  },
  methods: {
    doLogin() {
      this.$http
        .post("/user/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
            let {state, token,user} = res.data;
          if (state == "success") {
            //   登录成功
            this.$store.commit('storeLoginUser', user);
            // 存储token
            this.$store.dispatch('setToken', token)
            this.$router.push('/');
          } else {
            //   登录失败
            alert('用户名或密码不正确!');
          }
        });
    },
    goRegist(){
      this.$router.push("/regist")
    }
  },
};
</script>

<style scoped>
.login-form {
  width: 650px;
   background-color: rgba(252, 247, 251, 0.5);
  margin: 150px auto;
  padding: 20px 0;
  text-align: center;
      z-index:1;
    /* position: absolute; */
      border-radius:25px;  

}
.login-form p {
  padding: 20px 0;
}

.btn {
  width: 70px;
  margin-left: 40px;
}

.background{
    width:100%;  
    height:100%;  /**宽高100%是为了图片铺满屏幕 */
    z-index:-1;
    position: absolute;
    /* opacity:0.8; */
}


</style>