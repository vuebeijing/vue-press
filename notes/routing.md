---
date: 2019-11-24
tag: 
  - vue beijing
  - vue
  - part 2
  - pt 2
author: Tuomo
location: Beijing 
---

### Routing

Last thing we will cover today is routing. Routing means the action of
redirecting the user to a new page. In order for us to do that we need to tell both
main.js and App.vue that we are going to do some routing. A router kind of sits between
these two and tells which url (/login, /signup, /home) leads to which page.


![](../.vuepress/assets/router.png)


For this task we have created you already a component called Restaurant.vue. It is a page that we 
will route to. Go ahead and create a "Restaurant.vue" file in your components folder and paste in this code:

```html
 <template>
    <section class="container-fluid">
      <!-- Top Nav -->
      <nav class="row justify-content-start mb-3 ml-1 nav">
        <router-link :to="{ name: 'Home' }">
          <span>
            <img width="10%" src="../assets/restaurant.png">
          </span>
          <span>{{appName}}</span>
        </router-link>
      </nav>
      <!-- Title -->
      <header class="margin-bottom-10 center">
        <h1>{{restaurant.name}}</h1>
      </header>
      <!-- Content -->
      <main class="margin-bottom-10 center">
        <p>{{restaurant.description}}</p>
      </main>
    </section>
  </template>

  <script>
  export default {
    name: "Restaurant",
    props: {
      appName: "",
      restaurant: {
        type: Object,
        default: () => ({})
      }
    }
  };
  </script>

  <style>
  .nav {
    text-align: left;
  }
  .center {
    text-align: center;
  }
  </style>

```

Okay now we have a new page, but we want to be able to route to it at "/restautant"
Well in order for us to do so we need to define a router file and tell the app to do so

Create a new folder called "router" and then
create a file inside that folder called index.js. Then paste in this code

```js
import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/Home.vue";
import Restaurant from "../pages/Restaurant.vue";

// Pass the router into your Vue instance
Vue.use(Router);

export default new Router({
  mode: "history", // Allows use of the "back" button
  // Define your app routes here
  routes: [
    {
      // path in the url, sometimes the path can be complex so you can also use name for routing.
      // you always do need to define the path as well!
      path: "/", 
      component: Home, // the component to show when we are visiting this route
      name: "Home", // name of the component
      props: true
    },
    {
      path: "/restaurant",
      component: Restaurant,
      name: "Restaurant",
      props: true
    }
  ]
});

```

In the end your project structure should look like this <br/> <br/>
![](../.vuepress/assets/project-structure.png)


After this we will modify our App.vue to understand to use our new routes.
You see here a new component called router-view, this is an external package
that we have added to vue to extend its functionalities.

In simple terms the router-view defines a window where we can show different pages (routes)

App.vue
```HTML
<template>
  <div id="app">
    <!--
      Instead of defining your component,
      let Vue Router mount the component
      depending on your route using the "router-view"
      component. You can even pass in props directly
      and they'll be available on every page.
    -->
    <router-view appName="LA DU ZI | 拉肚子 🍴"></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 40px;
}
a {
  color: #632b2b;
}
a:hover,
a:focus {
  color: #bed346;
  text-decoration: none;
}
</style>

```

Lastly we will tell the main.js to use our new router


```js
import Vue from "vue"; // The official Vue instance
import App from "./App.vue"; // Your Vue app entrypoint
import router from "./router"; // Your custom router (at index.js)
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap Styles
Vue.config.productionTip = false;

// Mount the Vue instance as soon as the page loads
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
```

Ok this is great and all, but how will people actually find themselves to these pages?
In comes router-link. As you can see we can define in the HTML of any component a 
link and 

```HTML
  <router-link
        class="link"
        :to="{
          path: '/restaurant', // if you have defined a name you can also use that for routing
          name: 'Restaurant',
          params: { restaurant: restaurant } // pass in properties
        }"
      >{{restaurant.name}}</router-link>
```

### Routing - Tasks!

- Add a router link to the RestaurantCard.vue to lead to the page of that restaurant
- Pass in the restaurant property of the RestaurantCard to the restauran page
- Create a new route! (you can also create a new page to route to)


### Completed code

You can check out the completed code here!

https://codesandbox.io/s/laduzi-app-m4dz0