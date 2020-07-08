<template>
  <div class="container">
      <!-- <div class="aspectratio">
        <div class="item">
            <video width="100%" controls>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg">
                Your browser does not support HTML video.
            </video>
        </div>
      </div> -->
      <div class="w-100">
          <searchbox />
      </div>
      <div class="w-100 pt-2 fl-l">
          <playlist />
      </div>
      <playerbox v-if="video.playerboxShow" />
  </div>
</template>

<script>
import {mapState} from 'vuex'
import searchbox from "../../components/SearchBox";
import playlist from '../../components/Playerlist';
import playerbox from "../../components/PlayerBox";
export default {
    layout:'video_detail',
    computed: {
        ...mapState({
            video: state => state.video
        })
    },
    data(){
        return{
            id:0,
        }
    },
    methods:{
    },
    mounted(){
        this.id = this.$route.params.id;
    },
    components:{
        playlist,
        searchbox,
        playerbox
    }
}
</script>

<style lang="scss" scoped>

</style>