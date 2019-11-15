<template>
  <div id="app">
    <router-link class="link" :to="{ path: '/hello'}">Say hello</router-link>
    <br>
    <router-link class="link" :to="{ path: '/'}">Main</router-link>
    <br>
		<router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
