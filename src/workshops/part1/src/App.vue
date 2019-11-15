<template>
  <div id="app">
    <LaDuzi appName="LA DU ZI | 拉肚子 🍴" />
  </div>
</template>

<script>
import LaDuzi from "./components/LaDuzi";

export default {
  name: "App",
  components: {
    LaDuzi
  }
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
