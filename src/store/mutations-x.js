const mutations = {
    getIndLike(state, payload) {
        state.likeData = payload;
        console.log(payload.like);
    },
    changeColor(state, payload) {
        state.indNavColor = payload;
    },
    getClassifyDa(state, payload) {
        state.classifyData = payload;
    },
    getSideBarData(state, payload) {
        state.sideBarData = payload.data.sideBar;
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
    },
    MyVoiceList(state, payload) {
        state.myVoiceList = payload.voiceData;
    },
    getdituData(state,payload){
        state.myMapData=payload.content;
    },
    // loginData(state,payload){
    //     state.loginData= payload.data.userInfo;
    //     if(payload.data.userInfo) {
    //         sessionStorage.setItem('username',JSON.stringify(payload.data.userInfo));
    //       }
    // }
}

export default mutations;