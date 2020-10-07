import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

const routes = [{
    path: "/",
    component: () =>
        import ('../views/index-x.vue'),
    children: [{
        path: '/',
        redirect: '/index'
    }, {
        path: '/index',
        component: () =>
            import ('../views/ind-x.vue'),
        children: [{
            path: '/index',
            component: () =>
                import ('../views/ind-recommed-x.vue')
        }, {
            path: '/vip',
            component: () =>
                import ('../views/ind-vip-f.vue')
        }]
    }, {
        path: '/community',
        component: () =>
            import ('../views/community-x.vue')
    }, {
        path: '/subscribe',
        component: () =>
            import ('../views/subscribe-x.vue')
    }, {
        path: '/mine',
        component: () =>
            import ('../views/mine-x.vue')
    }]
},{
    path: '/fkc1',
    component: () =>
        import ('../views/listenRanking-fkc.vue')
}]

const router = new VueRouter({
    routes
})

export default router