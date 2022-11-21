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
    <div
      v-if="$route.path === '/main' || $route.path === '/table'"
      @click="clickLogout"
      class="Header_logout"
    >
      로그아웃
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickLogout() {
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
}
</style>
