import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: () => import('../views/Welcome/Welcome.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../components/TestComponents/TestScreen.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
