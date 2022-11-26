<template>
  <!-- <header class="header">
    <div class="wrapLogo">
      <div>Icon</div>
      <div class="logo">AIOps</div>
    </div>
    <div class="info">
      <router-link to="/login" class="login">로그인</router-link>
      <router-link to="/signUp">회원가입</router-link>
    </div>
  </header> -->
  <div
    v-if="$route.path === '/main' || $route.path === '/table'"
    class="Header_Form"
  >
    <div v-if="$route.path === '/main'">DashBoard</div>
    <div v-if="$route.path === '/table'">Metric</div>
    <template v-if="isUserLogin">
      <div
        v-if="$route.path === '/main' || $route.path === '/table'"
        class="Header_logout"
      >
        <div>{{ $store.state.username }}님 안녕하세요</div>
        <a class="Header_logout" href="javascript:;" @click="logoutUser"
          >로그아웃</a
        >
      </div>
    </template>
    <template v-else>
      <div>
        <router-link to="/login" class="Header_logout">로그인</router-link>
        <router-link to="/signUp" class="Header_logout">회원가입</router-link>
      </div>
    </template>
  </div>
</template>

<script>
import { deleteCookie } from '@/utils/cookies';
export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    logoutUser() {
      this.$store.commit('clearUsername');
      this.$store.commit('clearToken');
      deleteCookie('til_auth');
      deleteCookie('til_user');
      deleteCookie('token');
      this.$router.push('/login');
    },
  },
};
</script>

<style>
.Header_Form {
  display: flex;
  justify-content: space-between;
  height: 100px;
  background-color: aquamarine;
  display: flex;
  font-size: 2rem;
  font-weight: 700;
  align-items: center;
  padding-left: 50px;
}

.Header_logout {
  font-size: 1rem;
  padding-right: 50px;
  cursor: pointer;
  color: blueviolet;
  font-weight: 700;
  text-decoration: none;
}
</style>
