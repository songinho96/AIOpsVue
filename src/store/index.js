import Vue from 'vue';
import Vuex from 'vuex';
import {
  getAuthFromCookie,
  getUserFromCookie,
  // saveAuthToCookie,
  // saveUserToCookie,
} from '@/utils/cookies';
// import { loginUser } from '@/api/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // cookie 에서 꺼내기
    username: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
  },
  // computed 랑 비슷한 개념
  getters: {
    isLogin(state) {
      return state.username !== '';
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = '';
    },
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = '';
    },
  },
  // actions: {
  //   async LOGIN({ commit }, userData) {
  //     const { data } = await loginUser(userData);

  //     // store
  //     commit('setToken', data.token);
  //     commit('setUsername', data.username);
  //     // cookie
  //     saveAuthToCookie(data.token);
  //     saveUserToCookie(data.username);

  //     return data;
  //   },
  // },
});
