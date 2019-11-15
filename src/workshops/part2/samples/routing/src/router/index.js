import Vue from "vue";
import Router from "vue-router";
import Main from "../components/Main.vue";
import HelloWorld from "../components/HelloWorld.vue";
Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      redirect: "/main"
    },

    {
      path: "/main",
      component: Main
    },

    {
      path: "/hello",
      component: HelloWorld
    }
  ]
});
