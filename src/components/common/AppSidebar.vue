<template>
  <div class="sidebar">
    <router-link class="route_main" to="/main">AIOps</router-link>

    <router-link
      :class="{
        routerMain: $route.path === '/main',
        router: $route.path === '/table',
        routerTo: $route.path === '/custom',
      }"
      to="/main"
      >DashBoard</router-link
    >
    <router-link
      :class="{
        routerTable: $route.path === '/table',
        router: $route.path === '/main',
        routerTo: $route.path === '/custom',
      }"
      to="/table"
      >Metric</router-link
    >
    <router-link
      :class="{
        routerCustom: $route.path === '/custom',
        router: $route.path === '/main',
        routerTo: $route.path === '/table',
      }"
      to="/custom"
      >Custom</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style>
.sidebar {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  width: 250px;
  align-items: center;
  /* border-right: 0.5px solid #808080; */
}

.sidebar .route_main {
  text-decoration: none;
  color: black;
  margin-bottom: 50px;
  font-size: 2rem;
  font-weight: 700;
}

.routerMain {
  text-decoration: none;
  color: rgb(96, 96, 214);
  font-size: 1.7rem;
  margin-bottom: 50px;
  font-weight: 700;
}

.routerTable {
  text-decoration: none;
  color: rgb(96, 96, 214);
  font-size: 1.7rem;
  margin-bottom: 50px;
  font-weight: 700;
}

.routerCustom {
  text-decoration: none;
  color: rgb(96, 96, 214);
  font-size: 1.7rem;
  margin-bottom: 50px;
  font-weight: 700;
}

.router {
  text-decoration: none;
  color: #808080;
  font-size: 1.4rem;
  margin-bottom: 50px;
  font-weight: 700;
}

.routerTo {
  text-decoration: none;
  color: #808080;
  font-size: 1.4rem;
  margin-bottom: 50px;
  font-weight: 700;
}
</style>
