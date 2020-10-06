import { getIndLikeData } from "../utils/api-x"

const actions = {
    async getIndLike({ commit }) {
        const res = await getIndLikeData()
        console.log(res);
        commit('getIndLike', res.data);
    }
}

export default actions;