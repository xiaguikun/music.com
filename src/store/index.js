import Vue from 'vue'
import Vuex from 'vuex'


import state from "./state-x"
import mutations from "./mutations-x"
import actions from "./actions-x"

Vue.use(Vuex)


export default new Vuex.Store({
    state,
    mutations,
    actions,
    modules: {}
})