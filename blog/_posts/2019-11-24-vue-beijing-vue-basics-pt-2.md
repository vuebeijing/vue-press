---
date: 2019-11-24
tag: 
  - vue beijing
  - vue
  - part 2
  - pt 2
author: Tuomo
location: Beijing 
layout: Layout
---

# Vue Basics - Part II

## Our app, Laduzi

The goal of Laduzi app is to rate restaurants based on a simple evaluation criteria:

Did you or did you not get Laduzi.

Laduzi in the restaurant industry is rampant and terrorizing and affecting millions
of people Beijing wide - this needs to come to an end!

Now using one app you can see the restaurants around you and see if people have
suffered Laduzi after dining there. You can also report your own Laduzi experiences
from restaurants!

Help us make Beijing a safer place to eat!

## What we did last time

### Terminology

- HTML (HyperText Markup Language)
  Where things are

- JS (Javascript), sometimes called Ecmascript (ESM)
  What things do

- CSS (Cascading Style Sheets)

- Front-End
  What you see on a website

- Vue
  Vue is a front-end framework. It makes development easier

- SFU (Single File Component)
  Have HTML, CSS, JS in the same file

- DOM (Document Object Model)
  Contains all elements in the page icluding HTML, JS, CSS and other cool stuff.
  Normally used like: "The button didn't render in the DOM"
  
- Render
  Show something in the DOM

- V-directive
  Tools to render (show) things in the DOM

### Vue SFU


```HTML
  <template>
    <!-- Where things are -->
  </template>

  <script>
    // what things do
  </script>

  <style lang="scss" scoped>  
    /* What things look like */
  </style>
```

### Directives

#### V-for

Render (show) a list from an array i.e. ['banana', 'orange', 'laduzi']

```HTML
  <div v-for="item in items" :key="item.id">
        {{ item }}
  </div>
```

#### V-model and declarative rendering

Bind changes in an input to a value and render (show) it in the DOM
```HTML
  <template>
    <div>
      <input v-model="inputText" type="text" />
      <div>{{inputText}}</div>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          inputText: ''
        }
      },
    }
  </script>
```
#### V-if-else

V-if-else is a simple if this then that, else do this command. 
A simple example would be to render a list of restaurants and then
show poop emoji if a restaurant suffers from laduzi. Take a look:

```HTML
<span v-for="restaurant in restaurants" :key="count">
            <i v-if="restaurant.laduzi">💩</i>
            <i v-else>❤️</i>
</span>
```

So to iterate, it restauran.laduzi is true, as in if it is defined, the poop emoji will show up.
Otherwise we show the heart

### Lifecycle hooks

Lifecycle hooks run at a certain point in a Vue components lifetime.
Last time we used the hook mounted. Basically it runs the code when everything in showing in the DOM.

There are also other ones out there, and you can learn more
about lifecycle hooks here

https://vuejs.org/v2/guide/instance.html


```HTML
 <script>
    export default {
      mounted () {
        console.log('Mounted!');
      },
    }
  </script>
```


### Methods

Methods are functions that you can run from the code itself or
from user actions

```HTML
 <script>
    export default {
      methods: {
        doSomething() {
          console.log('I am doing something')
        }
      },
    }
  </script>
```

### Event listeners

We used @click to react to a click event. There are others out there as well.
Take a look
https://vuejs.org/v2/guide/events.html


```HTML
  <template>
    <div>
     <div @click="doSomething"></div>
    </div>
  </template>
```


## Today's Workshop

We will be covering

- Splitting components and importing them
    - Restaurant card
    - Page component
    - Button component
- Properties
- V-directives
    - V-show
- Routing

You will get last time's sample code to work with including samples
provided here. We will go one step at a time and give you time to
work on each problem!


### Splitting components

In javascript in general you can export and import files.
It would be rather cumbersome to have everything in one file.
The same thing holds true for Vue components. Imagine having a entire
webpage in one vue component. That would become unmanageable quite quickly!

Splitting components also helps with a term called SoC, or 
Separation of Concerns. The idea is that one piece of code should handle
only one concern.

For instance the laptop you are using now is an example of separation of concerns.
You can take out the monitor and change it to a new one. The monitor does monitor things. Same goes for the keyboard and charger and so on.

Splitting things into smaller components makes the whole easier to manage!

### Splitting our project

Looking at our project what could be parts that one could take apart 
to handle one specific task?

- Restaurant card
- Button
- V-for
- The entire page

Okay, the flip side of componentization is going too overboard with it.
Literally anything on this page could be broken down into a separate file, but
that would also become unmaintainable. What if your laptops charger 
was actually made out of 1000 tiny pieces rather than from a couple of main components? Normally when developing you will notice naturally when things
should become their own components, this migth happen for instance when you find yourself scrolling through 2000 lines of code searching for that one function.
Furthermore with practice and experience you will start to get a feeling for
what should be split, and what should not. This will get easier over time!


For this workshop we will be splitting our old code into two components:

- Restaurant card
- Main

Another term often used in component design is parent-child relationship.
In our case the main will contain the restaurant cards and contain data about restaurants and restaurant card will render the information about one restaurant inside a card. So since the card is inside the main, it is its child.
Remember that you can also import the main component into another component,
in which case the main becomes the child of that and so forth.

Doing multiple levels of parent-child nesting can also get complicated, so
try to keep your component design as flat as possible.

### Properties

Before we can start splitting our code, we need to talk a little about something called properties.
Properties are variables that you can pass into a component. So for instance
we can pass a property of 'restaurantData' into our restaurant card and 
we can now use it inside the component


This is what the restaurant component export would look like
```HTML
 <script>
  export default {
    name:'restaurant',
    props: {
      data: {
        type: Object,
        default: {}
      },
    },
  }
</script>
```
Notice that it is good practice to define the type of data
you are passing in and also a default value.

This is how to use it in the parent component

```HTML
  <template>
    <div>
      <restaurant :data="restaurantData"></restaurant>
    </div>
  </template>

  <script>
    // You need to import your compnent so you can use it!
    import Restaurant from './restaurant-card.vue';
    export default {
      data() {
        return {
          restaurantData: {name:'pizza overload'}
        }
      },
      
    }
  </script>
```

notice that we the prop name and the inserted variable name does not
need to be the same!


### Splitting restaurant card

Last times code can be found here: https://codesandbox.io/s/vue-template-hut3w
As we can see in our old code we were using the directive v-for to loop over restaurants.
Our task now is to take out the two span elements inside the outer v-for and 
extract them into a separate component using what we learned previously. 

```HTML
  <ul class="list-group list-group-flush margin-bottom-10">
      <li class="list-group-item d-flex justify-content-between align-items-center"
       v-for="(restaurant, index) in restaurants" 
       :key="index">
        <span>{{restaurant.name}}</span>
        <span>
          <span v-for="count in restaurant.count" :key="count">
            <i v-if="restaurant.laduzi">💩</i>
            <i v-else>❤️</i>
          </span>
        </span>
      </li>
  </ul>
```



### New Vue-Directives

Let's code up that restaurant card component and use two new directives in doing so:
- V-show
NOTE: If this works with the created components, let's go through it, otherwise not.




### Routing

last thing we will cover today is routing. Routing means the action of
redirecting the user to a new page. We have made a ready component, that shows 
details about a restaurant in a new page. This can then be shared as is as the restaurant
page.

```HTML
INSERT SAMPLE COMPONENT. 
Basic requirements
 - Show details about the restaurant
 - Show laduzi vs no-laduzi counts
 - Show how many people have eaten there
 - Add a button to route back to main
```

Really basic sample code in codesandbox
https://codesandbox.io/s/vue-template-cj73u


In order to do routing we need a npm module called vuerouter. Vuerouter allows
us to defined routes (pages) where our users can navigate to

lets create a index.js file to host our application initialization

``` js
import Vue from "vue";
import router from "./router";
import App from "./App.vue"; // we will come back to this later
import "bootstrap/dist/css/bootstrap.min.css"; // for styling
Vue.config.productionTip = true;
Vue.config.devtools = true;

/* eslint-disable no-new */
// we define the main entry point of the Vue instance.
// we will discuss this later
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
```

next we will define the router. Here we have two components Hello and Home.

```js
import Vue from "vue";
// vue-router npm package that extends vue
import Router from "vue-router";
// normal vue components
import Home from "../components/Home.vue";
import Hello from "../components/Hello.vue";
Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/", // path in the url https://something.com/
      redirect: "/home" // redirect to another path, in this case /home
    },

    {
      path: "/home", // path in the url https://something.com/home
      component: Home // the component to show when we are visiting this route
    },

    {
      path: "/hello", // path in the url https://something.com/hello
      component: Hello
    }
  ]
});
```

Lastly we will need to bring these pieces together. There needs to be one parent component
that handles routing and showing the routes on the page. Let's call that App.vue. This is
the same App component we imported earlier.

Here you can see how we are using a vuerouter exposed custom element called router-link
to define which component to render when we click on it.
The result of the click will be rendered inside the router-view component.

```HTML
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
```