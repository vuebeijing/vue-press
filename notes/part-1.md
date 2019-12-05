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

# Vue Basics - Part I


## Our app, Laduzi

Welcome to our humble workshop series!

In this series our goal is to set up a with solid Vue basics to help you 
on your first steps to web development or just Vue usage!

During this series we will build an app called the Laduzi app.
The purpose of the app is to rate restaurants based on a simple evaluation criteria:

Did you or did you not get Laduzi.

Laduzi in the restaurant industry is rampant and terrorizing and affecting millions
of people Beijing wide - this needs to come to an end!

Now using one app you can see the restaurants around you and see if people have
suffered Laduzi after dining there. You can also report your own Laduzi experiences
from restaurants!

Help us make Beijing a safer place to eat!

## Todays workshop

Today we will be covering vue basics:

- **Vue directives**
- **Lifecycle hooks**
- **Event Listeners**
- **Methods**

## Show me the code

We have created you a playground at codesanbox with a initial project setup.
Codesandbox is a cool hosted playground on which you can explore multiple different technologies such as React or just plain HTML and Javascript

[**Show me the code!**](https://codesandbox.io/s/vue-template-c1jv3)

### Terminology

If you are a total beginner learning some basic terminology will help you on your way:

- HTML (HyperText Markup Language) <br/>
  Where things are

- JS (Javascript), sometimes called Ecmascript (ESM) <br/>
  What things do

- CSS (Cascading Style Sheets) - You might also see SASS or SCSS that are just extensions of CSS <br/>
  What things look like

- Front-End <br/>
  Everything you see on a website

- Vue <br/>
  Vue is a front-end framework. It makes development easier

- SFC (Single File Component) <br/>
  Have HTML, CSS, JS in the same file

- DOM (Document Object Model) <br/>
  Contains all elements in the page icluding HTML, JS, CSS and other cool stuff.
  Normally used like: "The button didn't render in the DOM"
  
- Render <br/>
  Show something in the DOM

- V-directive <br/>
  Tools to render (show) things in the DOM

- Tag <br/>
  HTML elements we can use on the DOM, like div or input. A good list of the basic components <br/>
  can be found here: https://www.learn-html.org/en/Basic_Elements
  
- Object <br/>
  Think about a cat. The cats name is Mr.Watson and it is red. When we formulate this as an object we get
  ```js
   const myCat = {
     name:'Mr.Watson',
     color:'red'
   }
  ```

### Vue SFC

As mentioned above. Vue SFC is a single file component. It contains the three
main building blocks of web development: HTML, CSS and JS. You can open up the App.vue component to see how things look like

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

### Data attribute

If you take a look at the App.vue component, you will see something like this inside the script tag. The data attribute is a place where we declare variables, so we can use them inside our Vue component. We could for instance give
the component a name or a title!

```js
  // we will talk about imports in the next part of the series!
  import Home from "./components/Home";

  // Every vue component exports itself, you can use this component elsewhere
  // also covered in next part of the series
  export default {
    name: "App",
    components: {
      Home
    },
    // Meat and potatoes here. This is where we declare variables
    // that this component needs to use
    // we will use this later!
    data() {
      return {
      };
    }
  };
```

### Directives

Directives are used for displaying or binding things to or from the 
components data attribute.

#### V-for

Render (show) a list from an array i.e. ['banana', 'orange', 'laduzi']

```HTML
  <div v-for="item in items" v-bind:key="index">
        {{ item }}
  </div>
```

Example for a list
```HTML
  <ul>
      <li v-for="item in items" :key="index">
        {{ item }}
      </li>
  </ul>
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
For instance we can render a list to see if or if not a cat is our belowed
Mr.Watson

```HTML

<div v-for="cat in cats" v-bind:key="index">
            <div v-if="cat.name === 'Mr.Watson'">This is my cat! ️️️</div>
            <div v-else>This is not my cat!</div>
</div>

<script>

export default {
  data() {
    return {
      cats: [{ name: "Mr.Watson" }, { name: "Mr.Furball" }]
    };
  },
}
</script>
```

So to iterate, if cat.name is 'Mr.Watson', the operation cat.name === 'Mr.Watson' is true and we show the element inside the if statement.
Otherwise we show that this is not our cat in the else tag.

### Lifecycle hooks

Lifecycle hooks run at a certain point in a Vue components lifetime.
Last time we used the hook mounted. Basically it runs the code when everything in showing in the DOM.

There are also other ones out there, and you can learn more
about lifecycle hooks here

https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks


```HTML
 <script>
    export default {
      mounted () {
        console.log('Mounted!');
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

### Methods

Methods are functions that you can run from the code itself or
from user actions

```HTML
 <html>
  <button @click="doSomething">Click me to do something!</button>
 </html>
 <script>
    export default {
      methods: {
        doSomething() {
          console.log('I am doing something!')
        }
      },
    }
  </script>
```