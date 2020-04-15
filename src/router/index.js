import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'welcome',
    component: () => import('../views/Welcome/Welcome.vue'),
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: () => import('../views/JobSearchResult/JobsSearchResult.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginPage/loginPage.vue'),
  },
  {
    path: '/create-account',
    name: 'create-account',
    component: () => import('../views/CreateAccount/CreateAccount.vue'),
  },
  {
    path: '/employers',
    name: 'employers',
    component: () => import('../views/EmployersDashboard/EmployerDashboard.vue'),
    children: [
      {
        path: 'main',
        name: 'main',
        component: () => import('../views/MainDashboard/MainDashboard.vue'),
      },
      {
        path: 'posts',
        name: 'posts',
        component: () => import('../views/PostsDashboard/PostsDashboard.vue'),
      },
      {
        path: 'candidates',
        name: 'candidates',
        component: () => import('../views/CandidatesDashboard/CandidatesDashboard.vue'),
      },
      {
        path: 'post-job',
        name: 'postJob',
        component: () => import('../views/CreatePostDashboard/CreatePostDashboard.vue'),
      },
    ],
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../views/AccountPage/AccountPage.vue'),
  },
  {
    path: '/account/edit-info',
    name: 'editInfo',
    component: () => import('../views/EditInfoPage/EditInfoPage.vue'),
  },
  {
    path: '/create-company',
    name: 'createCompany',
    component: () => import('../views/CreateCompany/CreateCompany.vue'),
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
