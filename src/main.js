import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "./assets/reset.less";
import "./assets/vannavbar.less";
import "./assets/set-c/mine-c.less"
import "amfe-flexible";

import { Tabbar, TabbarItem, Search, Icon, NavBar, Swipe, SwipeItem, Lazyload, Collapse, CollapseItem,Cell, CellGroup,Switch,Button,Image as VanImage ,Sidebar,SidebarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Search);
Vue.use(Icon);
Vue.use(NavBar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Switch);
Vue.use(Button);
Vue.use(VanImage);
Vue.use(Sidebar);
Vue.use(SidebarItem);


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')