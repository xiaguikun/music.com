const mutations = {
    getIndLike(state, payload) {
        state.likeData = payload;
        console.log(payload.like);
    },
<<<<<<< HEAD
    changeColor(state, payload) {
        state.indNavColor = payload;
    },
    getClassifyDa(state, payload) {
        state.classifyData = payload;
    },
    getSideBarData(state, payload) {
        state.sideBarData = payload.data.sideBar;
=======
    getIndVip(state, payload) {
        state.vipData = payload.card;
        console.log(payload.card);
        state.vipRecommend = payload.recommend;
        state.vipProgram = payload.program;
        state.vipFooter = payload.footer;
    },
    getMineList(state, payload) {
        state.mineData = payload;
        console.log(payload.img);
    },
    changeColor(state, payload) {
        state.indNavColor = payload;
    },
    getFCommunity(state, payload) {
        state.communityDataOne = payload.one;
        console.log(payload.one);
        state.communityDataTwo = payload.two;
        state.communityDataThree = payload.three;
        state.communityDataFour = payload.four;
    },
    getSubscribe(state, payload) {
        state.subscribeData = payload;
    },
    getListenList(state, payload) {
        state.listenlistData = payload.list1;
>>>>>>> master
    }
}

export default mutations;