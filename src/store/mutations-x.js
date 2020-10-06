const mutations = {
    getIndLike(state, payload) {
        state.likeData = payload.like;
        console.log(payload.like);
    }
}

export default mutations;