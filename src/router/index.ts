import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { getAuth } from 'firebase/auth';
import HomeView from '../views/HomeView.vue';
import app from '../firebase';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/portfolio/demo/firebase-form/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/portfolio/demo/firebase-form/login',
    name: 'loginView',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login/LoginView.vue'),
  },
  {
    path: '/portfolio/demo/firebase-form/secret',
    name: 'secretView',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "secret" */ '../views/Secret/SecretView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
});

router.beforeEach((to, _from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const user = getAuth(app).currentUser;
  if (requiresAuth && !user) {
    next('/portfolio/demo/firebase-form/login');
    Vue.notify({
      group: 'foo',
      title: 'Important message',
      text: 'Please Sign in first',
    });
  } else {
    next();
  }
});

export default router;
