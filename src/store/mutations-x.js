const mutations = {
    getIndLike(state, payload) {
        state.likeData = payload.like;
        console.log(payload.like);
    },
    getIndVip(state, payload) {
        state.vipData = payload.card;
        console.log(payload.card);
        state.vipRecommend = payload.recommend;
        state.vipProgram = payload.program;
        state.vipFooter = payload.footer;
    }
}

export default mutations;