//const {apiUrl} = process.env

export const state = () => ({
    lists:[],
    search:``,
    listIndex:6,
    playerboxShow:false,
    videoID:''
});

export const mutations = {
    setList(state,lists){
        state.lists = lists.items;
    },
    setSearch(state,txt){
        state.search = txt;
    },
    setListIndex(state){
        state.listIndex = 6;
    },
    upListIndex(state){
        state.listIndex += 6;
    },
    setPlayerbox(state,show){
        state.playerboxShow = show;
    },
    setVideo(state,id){
        state.videoID = id;
    }
}

export const actions = {
    testenv({commit},payload){
        return this.$axios.get(`video-search.json`)
        .then(({data}) => {
            commit('setList',JSON.parse(JSON.stringify(data)))
            return new Promise((resolve) => {
                resolve(JSON.parse(JSON.stringify(data)))
            })
        })
        .catch((error) => {
            return new Promise((resolve, reject) => {
                reject(error)
            })
        })
        .finally(() => {
        })
    },
    searchText({commit},payload){
        commit('setSearch',payload.txt)
        commit('setListIndex')
    }
}
