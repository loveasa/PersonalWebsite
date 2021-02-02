<template>
  <div>
       <div class="background" style="position:fixed;top:0;left:0">
      <img :src="imgSrc" width="100%" height="800px" alt="" />
    </div>

      <CommonHeader></CommonHeader>
    <div class="block">
      <el-timeline>
        <el-timeline-item   placement="top" >
          <el-card>
            <h4>提交文章</h4>
            <p>Esther 提交于 2021/1/30 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item  placement="top">
          <el-card>
            <h4>提交文章</h4>
            <p>Esther 提交于 2021/1/31 12:30</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item  placement="top">
          <el-card>
            <h4>提交文章</h4>
            <p>Esther 提交于 2021/2/1 09:00</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
import CommonHeader from "../components/CommonHeader";

export default {
    data(){
        return{
            imgSrc: require("../assets/cover-bgimg.png"),
        }
    },
     components: {
    CommonHeader,
  },

};
</script>

<style scoped>
.block{
width: 600px;
margin: 0 auto;
margin-top: 20px;
}
el-timeline-item{
    color: black;
}
</style>