const mutations = {
    getIndLike(state, payload) {
        state.likeData = payload;
    },
    changeColor(state,payload){
        state.indNavColor=payload;
    }
}

export default mutations;