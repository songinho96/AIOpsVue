<template>
  <div class="app">
    <div class="layout">
      <AppSidebar
        v-if="$route.path !== '/login' && $route.path !== '/signUp'"
        class="layout"
      ></AppSidebar>
      <div class="dashboard">
        <AppHeader></AppHeader>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
import AppSidebar from '@/components/common/AppSidebar.vue';
export default {
  components: {
    AppHeader,
    AppSidebar,
  },
};
</script>

<style>
@import './css/comon.css';

* {
  margin: 0px;
  padding: 0;
  box-sizing: border-box;
  position: relative;
}

.app {
  text-decoration: none;

  width: 100%;

  height: 100%;
}

.layout {
  display: flex;
}

.dashboard {
  width: 100%;
}
</style>
