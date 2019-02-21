import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Todo from '@/components/Todo'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: Index,
        children: [{
            path: 'todo',
            component: Todo
        }]
    }]
})

export default router
