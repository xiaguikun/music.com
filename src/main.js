import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "./assets/reset.less"
import "amfe-flexible";

import { Tabbar, TabbarItem, Search } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Search);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')