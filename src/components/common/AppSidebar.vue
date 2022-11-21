<template>
  <div class="sidebar">
    <div>AIOps</div>
    <router-link class="router" to="/main">DashBoard</router-link>
    <router-link class="router" to="/table">Metric</router-link>
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
}

.sidebar div {
  margin-bottom: 50px;
  font-size: 1.5rem;
  font-weight: 700;
}

.router {
  text-decoration: none;
  color: #808080;
  font-size: 1.4rem;
  margin-bottom: 50px;
}
</style>
