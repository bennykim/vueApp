import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Todo from '@/components/Todo'
import Grid from '@/components/Grid'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: Index,
        redirect: '/todo',
        children: [{
            path: 'todo',
            component: Todo
        }, {
            path: 'grid',
            component: Grid
        }]
    }]
})

export default router
