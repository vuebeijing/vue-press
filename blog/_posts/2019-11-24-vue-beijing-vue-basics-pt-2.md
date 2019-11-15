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


```md
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

```md
  <div v-for="item in items" :key="item.id">
        {{ item }}
  </div>
```

#### V-model and declarative rendering

Bind changes in an input to a value and render (show) it in the DOM
```md
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




#### Everything Together

```HTML
  <template>
    <div>
     <div @click="doSomething" class="myClass"></div>
     <div>
          <input v-model="inputText" type="text" />
          <div>{{inputText}}</div>
     </div>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          inputText:''
        }
      },
      mounted () {
        console.log('Mounted!');
      },
      methods: {
        doSomething() {
          console.log('I am doing something')
        }
      },
    }
  </script>

  <style lang="scss" scoped>  
    myClass:{
      color:red
    }
  </style>
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
    - V-if-else
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

#### Splitting our project

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


### New Vue-Directives

Let's code up that restaurant card component and use two new directives in doing so:
- V-show
- V-if-else


#### Properties

Okay we have split the code apart, but how to pass the data from main into
the restaurant components? In comes properties.
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


#### Routing

new code
https://codesandbox.io/s/vue-template-cj73u

routing example 
https://codesandbox.io/s/qx3orn736q

https://vuejs.org/v2/guide/routing.html

```js
const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }

const routes = {
  '/': Home,
  '/about': About
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
```

For this example we have already created an additional component
called restaurant details. The idea is that if you click on a restaurant
card you will be routed to another page that show all the details
of the restaurant. You can copy the code here

```HTML
 Insert Component Code!
```