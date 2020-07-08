<template>
    <div class="container listplay">
        <div class="row">
            <template v-for="(list,index) in getList()" >
                <div class="col-sm-12 col-md-4 col-lg-3 list" 
                :key="list.id.videoId" 
                v-if="(index + 1) <= video.listIndex"
                @click="videoOnplay(list.id.videoId)">
                    <div class="fl-l w-100 detail pa-2">
                        <div class="w-100 text-center">
                            <img :src="list.snippet.thumbnails.high.url">
                        </div>
                        <div class="w-100 title">
                            {{ truncate(list.snippet.title, 20) }}
                        </div>
                        <div class="w-100 description">
                            {{ truncate(list.snippet.description,60) }}
                        </div>
                    </div>
                </div>
            </template>
            <div class="w-100 notfound text-center" v-if="getList().length == 0">
                <i class="fas fa-times"></i> NOT FOUND
            </div>
            <div class="w-100 readmore text-center pa-3" @click="readmore()" v-if="video.listIndex < getList().length">
                read more <i class="fas fa-caret-down"></i>
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
    data(){
        return{
            
        }
    },
    methods:{
        getList(){
            return this.searchArray(this.video.lists,this.video.search)
        },
        searchArray(objects, regex) {
            let arrayOfMatchedObjects = objects.filter(object => {
                return JSON.stringify(object.snippet.title)
                .toString()
                .toLowerCase()
                .includes(regex.toLowerCase());
            });
            return arrayOfMatchedObjects;
        },
        truncate(string,length){
            if (string.length > length) {
                return string.substring(0, length);
            } else {
                return string;
            }
        },
        readmore(){
            this.$store.commit('video/upListIndex')
        },
        videoOnplay(id){
            this.$store.commit('video/setVideo',id)
            this.$store.commit('video/setPlayerbox',true)
        }
    },
    mounted(){
        this.$store.dispatch('video/testenv');
    }
}
</script>

<style lang="scss" scoped>
.listplay{
    .list{
        overflow: hidden;
        cursor: pointer;
        img{
            width: 200px;
            height: 150px;
        }
    }
    .readmore{
        background-color: #eaeaea;
        border-radius: 5px;
        cursor: pointer;
    }
    .notfound{
        font-weight: 500;
        color: #333;
        font-size: 1.5rem;
    }
    .detail{
        .title{
            font-size: 1rem;
        }
        .description{
            font-size: 0.8rem;
        }
    }
}
</style>