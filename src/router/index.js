import Vue from 'vue';
import VueRouter from 'vue-router';
import Welcome from '../views/Welcome/Welcome.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome,
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: () => import(/* webpackChunkName: "about" */ '../views/JobSearchResult/JobsSearchResult.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
