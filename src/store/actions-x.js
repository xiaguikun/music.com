import { getIndLikeData, getClassifyData } from "../utils/api-x"

const actions = {
    async getIndLike({ commit }) {
        const res = await getIndLikeData();
        commit('getIndLike', res.data);
    },

    async getClassifyDa({ commit }, payload) {
        const res = await getClassifyData({
            type: payload.type
        });
        console.log(res);
        // console.log(res.data.sideBar);
        commit('getClassifyDa', res.data.imgUrl);

        commit('getSideBarData', res);
    }
}

export default actions;