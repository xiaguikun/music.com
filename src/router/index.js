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
            path:'/index',
            redirect:'/index-ind'
        },{
            path: '/index-ind',
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
            import ('../views/community-x.vue'),
        children:[
            {
                path:'/community',
                redirect:'/community-one'
            },
            {
                path:'/community-one',
                component:()=>import('../components/community-one-f.vue')
            },
            {
                path:'/community-two',
                component:()=>import('../components/community-two-f.vue')
            },
            {
                path:'/community-three',
                component:()=>import('../components/community-three-f.vue')
            },
            {
                path:'/community-four',
                component:()=>import('../components/community-four-f.vue')
            }
        ]
    }, {
        path: '/subscribe',
        component: () =>
            import ('../views/subscribe-x.vue')
    }, {
        path: '/mine',
        component: () =>
            import ('../views/mine-y.vue')
    }]
}, {
    path: '/toRank',
    component: () =>
        import ('../views/listenRanking-fkc.vue')
}, {
    path: '/gq1',
    component: () =>
        import ('../views/history-g.vue')
},{
    path:'/gq2',
    component:()=>import('../views/classify-g.vue')
}]

const router = new VueRouter({
    routes
})

export default router