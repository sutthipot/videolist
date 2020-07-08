<template>
  <div class="container">
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
import searchbox from "../components/SearchBox";
import playlist from '../components/Playerlist';
import playerbox from "../components/PlayerBox";
export default {
    layout:'video_detail',
    computed: {
        ...mapState({
            video: state => state.video
        })
    },
    data(){
        return{
        }
    },
    methods:{
    },
    mounted(){
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