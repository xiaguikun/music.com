import { getIndLikeData, getIndVipData, getsubscribeData, getFCommunityData, getListenListData, getMineListData } from "../utils/api-x"
const actions = {
    async getIndLike({ commit }) {
        const res = await getIndLikeData()
        console.log(res);
        commit('getIndLike', res.data);
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
    }
}
export default actions;