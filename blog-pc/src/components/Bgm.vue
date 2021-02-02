<template>
    <div>
         <!-- <div style="width: 100%" class="flex-container column"> -->
            <video id="video" src="../assets/celebrity.mp3" controls="controls" hidden="hidden" autoplay="autoplay"  loop="loop"> </video>

            <!-- <img  id="img" class="play" style="transform: translate(-1584.4%, 121.5%) scale(1)" :src="sound" @click="play()"> -->

        <!-- </div> -->
    </div>
</template>

<script>
export default {
     data() {
            return {
                // sound: require('../assets/bgm1.png'),
        }
   },
  methods: {
            play(){
                // let vo = document.getElementById("video")
                // if(this.sound == require('../assets/bgm1.png')){
                //     this.sound = require('../assets/bgm2.png')
                //     vo.autoplay = true
                //     vo.play()
                // }
                // else{
                //     this.sound = require('../assets/bgm1.png')
                //     vo.pause()
                // }

            }
  }
}
</script>

