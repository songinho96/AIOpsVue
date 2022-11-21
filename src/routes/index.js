import Vue from 'vue';
import VueRouter from 'vue-router';

// Vue 사용
Vue.use(VueRouter);
// export default new VueRouter() 인스턴스 생성
export default new VueRouter({
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
    },
    {
      path: '/table',
      component: () => import('@/views/TablePage'),
    },
  ],
});
