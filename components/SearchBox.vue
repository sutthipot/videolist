<template>
  <div class="container">
    <div class="w-100 searchBox pa-3 d-flex">
        <div>
            <i class="fas fa-search"></i>
        </div> 
        <input type="text" class="w-100 ml-3" v-model="txt" placeholder="search" />
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            txt:''
        }
    },
    watch:{
        'txt'(){
            this.$store.dispatch('video/searchText',{
                txt:this.txt
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.searchBox{
    
    background-color: #FFF;
    color: #333;
    border-radius: 10px;
    -webkit-box-shadow: 0px 2px 8px -2px rgba(138,138,138,1);
    -moz-box-shadow: 0px 2px 8px -2px rgba(138,138,138,1);
    box-shadow: 0px 2px 8px -2px rgba(138,138,138,1);
    input{
        outline: none;
        border: none;
        font-size: 1.2rem;
    }
}
</style>