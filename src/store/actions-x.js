import { getIndLikeData, getIndVipData, getMyVoiceData, getsubscribeData, getFCommunityData, getListenListData, getMineListData, getClassifyData } from "../utils/api-x"
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
    },
    async getIndVip({ commit }) {
        const res = await getIndVipData()
        console.log(res);
        commit('getIndVip', res.data);
    },
    async getMineList({ commit }) {
        const res = await getMineListData()
        console.log(res);
        commit('getMineList', res.data);
    },
    async getFCommunity({ commit }) {
        const res = await getFCommunityData();
        console.log(res);
        commit('getFCommunity', res.data);
    },
    async getSubscribe({ commit }) {
        const res = await getsubscribeData();
        console.log(res);
        commit('getSubscribe', res.data);
    },
    async getListenList({ commit }) {
        const res = await getListenListData();
        console.log(res);
        commit('getListenList', res.data);
    },
    async getMyVoiceList({ commit }) {
        const res = await getMyVoiceData();
        console.log(res);
        commit('MyVoiceList', res.data);
    },

}
export default actions;