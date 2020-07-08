<template>
  <div class="playerbox" id="player"> 
      <div class="aspectratio" >
        <!-- <div class="item">
            <video width="100%" controls>
                <source src="https://www.youtube.com/embed/zpOULjyy-n8" type="video/mp4">
                <source src="https://www.youtube.com/embed/zpOULjyy-n8" type="video/ogg">
                Your browser does not support HTML video.
            </video>
        </div> -->
        <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" :src="'https://www.youtube.com/embed/'+video.videoID+'?rel=0'" allowfullscreen></iframe>
        </div>
        <div class="closeBox" @click="close">
            <i class="far fa-times-circle"></i>
        </div>
      </div>
      
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState({
            video: state => state.video
        })
    },
    methods:{
        close(){
            this.$store.commit('video/setPlayerbox',false)
        }
    },
    mounted(){

        document.documentElement.style.overflow = 'hidden';
        document.body.scroll = "no";

    },
    destroyed(){

        document.documentElement.style.overflow = 'auto';  // firefox, chrome
        document.body.scroll = "yes"; // ie only

    }
}
</script>

<style lang="scss" scoped>
.playerbox{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    .closeBox{
        position:absolute;
        bottom: 0;
        margin-bottom: -95px;
        margin-left: 45%;
        font-size: 4rem;
        color: rgba(255, 255, 255, 0.671);
        cursor: pointer;
    }
}
</style>