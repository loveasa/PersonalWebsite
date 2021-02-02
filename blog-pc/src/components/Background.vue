<template>
    <div>
         <div class="background" style="position:fixed;top:0;left:0">
      <img :src="imgSrc" width="100%" height="800px" alt="" />
    </div>
</template>

<script>
export default {
    data(){
        return{
            imgSrc: require("../assets/cover-bgimg.png"),
        }
    },
}
</script>

<style scoped>
    
</style>