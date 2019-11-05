import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/page/:n',
    name: 'page',
    component: () => import("@/views/ToDoListPage"),
  },
  {
    path: '/item/edit/:n',
    name: 'item-edit',
    component: () => import("@/views/ToDoListItemEditorPage"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
