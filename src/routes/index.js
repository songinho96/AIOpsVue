import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

// Vue 사용
Vue.use(VueRouter);
// export default new VueRouter() 인스턴스 생성
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage'),
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage'),
    },
    {
      path: '/main',
      component: () => import('@/views/MainPage'),
      meta: { auth: true },
    },
    {
      path: '/table',
      component: () => import('@/views/TablePage'),
      meta: { auth: true },
    },
    {
      path: '/custom',
      component: () => import('@/views/CustomPage'),
    },
  ],
});
router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    alert('로그인이 필요합니다');
    next('/login');
    return;
  }
  next();
});

export default router;
