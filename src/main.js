import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index';
import axios from 'axios';
import store from '@/store/index';
import HighchartsVue from 'highcharts-vue';

// axios 추가
Vue.use(axios);
// axios를 root 전역으로 사용하기 위하여 추가
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

Vue.use(HighchartsVue);
// Vue.prototype.$HighchartsVue = HighchartsVue;
// Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
