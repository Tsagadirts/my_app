import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'users'

    },
    {
        path: '/posts',
        name: 'posts',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/PostsView.vue')
    },
    {
        path: '/post/:id',
        name: 'post',
        props: route => ({ query: route.query.posts }),
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/PostView.vue')

    }

]

const router = new VueRouter({

    routes
})

export default router