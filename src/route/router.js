import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/components/Index';
import Todo from '@/components/Todo';
import Grid from '@/components/Grid';
import Modals from '@/components/Modals';
import Counter from '@/components/Counter';
import Async from '@/components/Async';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
      redirect: '/todo',
      children: [
        {
          name: 'todo',
          path: 'todo',
          component: Todo
        }, {
          name: 'grid',
          path: 'grid',
          component: Grid
        }, {
          name: 'modals',
          path: 'modals',
          component: Modals
        }, {
          name: 'counter',
          path: 'counter',
          component: Counter
        }, {
          name: 'async',
          path: 'async',
          component: Async
        }
      ]
    }
  ]
});

export default router;
