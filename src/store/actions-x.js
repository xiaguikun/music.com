import { getIndLikeData, getIndVipData, getMineListData } from "../utils/api-x"

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
    }
}

export default actions;