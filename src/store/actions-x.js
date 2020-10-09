import { getIndLikeData, getIndVipData, getsubscribeData, getFCommunityData } from "../utils/api-x"
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
    async getFCommunity({ commit }) {
        const res = await getFCommunityData();
        console.log(res);
        commit('getFCommunity', res.data);
    },
    async getSubscribe({ commit }) {
        const res = await getsubscribeData();
        console.log(res);
        commit('getSubscribe', res.data);
    }
}
export default actions;