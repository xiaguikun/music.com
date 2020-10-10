const mutations = {
    getIndLike(state, payload) {
        state.likeData = payload;
        console.log(payload.like);
    },
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
    getShopList(state, payload) {
        state.shop1Data = payload.read;
        state.shop2Data = payload.song;
        console.log(payload);
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
    }
}

export default mutations;