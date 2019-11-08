import Vue from 'vue';
import VueRouter from 'vue-router';

import Page from '@/views/Page.vue';
import Edit from '@/views/Edit.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    alias: '/page',
    component: Page,
  },
  {
    path: '/page',
    alias: '/page/1',
    component: Page,
  },
  {
    path: '/page/:n',
    name: 'page',
    component: Page,
  },
  {
    path: '/edit',
    alias: '/edit/1',
    component: Edit,
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: Edit,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
