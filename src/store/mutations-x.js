const mutations = {
    getIndLike(state, payload) {
        state.likeData = payload;
    },
    changeColor(state, payload) {
        state.indNavColor = payload;
    },
    getClassifyDa(state, payload) {
        state.classifyData = payload;
    },
    getSideBarData(state, payload) {
        state.sideBarData = payload.data.sideBar;
    }
}

export default mutations;