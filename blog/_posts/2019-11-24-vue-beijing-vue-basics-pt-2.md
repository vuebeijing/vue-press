---
date: 2019/11/24
tag: 
  - vue beijing
  - vue
  - part 2
  - pt 2
author: Tuomo
location: Beijing 
---

# Vue Basics - Part II (Components and properties)

## Our app, Laduzi

The goal of Laduzi app is to rate restaurants based on a simple evaluation criteria:

> Did you or did you not get Laduzi（拉肚子）?

Laduzi in the restaurant industry is rampant and terrorizing and affecting millions
of people Beijing wide. This needs to come to an end!

Now using one app you can see the restaurants around you and see if people have
suffered Laduzi after dining there. You can also report your own Laduzi experiences
from restaurants!

Help us make Beijing a safer place to eat!

## What we did last time

[**Last times code!**](https://codesandbox.io/s/vue-template-c1jv3)

### Terminology

- **HTML (HyperText Markup Language)**: Where things are and how they're structured

- **JS (Javascript)**: Sometimes called Ecmascript (ESM). It helps determine the behavious of your app.

- **CSS (Cascading Style Sheets)**: You might also see SASS or SCSS that are just extensions of CSS. I determines what things look like in your app.

- **Front-End:** Everything that you can see and on a website in the browser.

- **Vue:** Vue is a front-end framework. It makes development easier

- **SFC (Single File Component):** Have HTML, CSS, JS in the same file

- **DOM (Document Object Model):** Contains all elements in the page icluding HTML, JS, CSS and other cool stuff.
  Normally used like: "The button didn't render in the DOM"
  
- **Render:** Show something in the DOM

- **Directive:** Tools to render (show) things in the DOM

- **Tag:** HTML elements we can use on the DOM, like div or input. A good list of the basic components can be found **[here.](https://www.learn-html.org/en/Basic_Elements)**
  
- **Object:** Think about a cat. The cats name is Mr.Watson and it is red. When we formulate this as an object we get:
  ```js
   const myCat = {
     name:'Mr.Watson',
     color:'red'
   }
  ```

### Vue Single File Component (SFC)
This is a file that enables you to write the HTML, CSS and Javscript for your component in a single location.

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

### `v-for`

Render (show) a list from an array i.e. `['banana', 'orange', 'laduzi']`

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

### `v-model` and declarative rendering

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
### `v-if-else`

`v-if-else` is a simple if this then that, else do this command. 
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

So to iterate, if `cat.name` is `'Mr.Watson'`, the operation `cat.name === 'Mr.Watson'` is true. Therefore, we show the element inside the if statement. Otherwise we show that this is not our cat in the `else` tag.

### Lifecycle hooks

Lifecycle hooks run at a certain point in a Vue components lifetime.
Last time we used the hook mounted. Basically it runs the code when everything in showing in the DOM.

There are also other ones out there, and you can learn more
about lifecycle hooks **[here](https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks)**


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

We used `@click` to react to a click event. There are others out there as well. [Take a look!](https://vuejs.org/v2/guide/events.html)


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
      }
    }
  </script>
```


## Today's Workshop

We will be covering

- Understanding the Vue Project
- Splitting components and importing them
    - Restaurant card Component
    - Home component page
    - Restaurant component page
- Properties

You will get last time's sample code to work with including samples
provided here. We will go one step at a time and give you time to
work on each problem!

[**Use last time code as a starting point!**](https://codesandbox.io/s/vue-template-c1jv3)

### Understanding the Vue project structure

Since we have been working only on directives so far. It is high time 
to take a step back and understand a bit what is a vue project made out of!
Open that sample code and have it open on the side to visualize things!

The main parts of a basic Vue project are these

![](../.vuepress/assets/project-structure.png)

**public** <br/>
This is where you can put images, icons, sound files and so on. These are what we call static assets, as they are non-changing

**src** <br/>
All project code goes here

**assets** <br/>
You can also put images here. Assets operates a bit differently that public because you can for instance optimize image sizes and so on. As far as you are concerned for now you can put files either into public or assets <br/> For the curious one's you can look into Webpack, a article about the subject can be found here
https://iamakulov.com/notes/optimize-images-webpack/

**components** <br/>
Here is where all our components live
 
**pages** <br/>
A component can also be a page, there is nothing
different in code about components vs pages, it's only a way of categorization

**router** <br/>
We will cover this in the next section. But basically a router tells the app at which URL we should so a specific page. For instance it's common to have the login page behind "https://my-page.com/login"

**App.vue** <br/>
Contains all the pages and components of the app. The master container and component

**main.js**
This initializes the app and attaches the App.vue to the DOM (including anything required in App.vue)


Here is a illustration of these parts. Notice how
assets can exist on any level of a vue component!

![](../.vuepress/assets/containers.png)

## 1. Splitting components

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

<br />
### Splitting our project

Looking at our project what could be parts that one could take apart 
to handle one specific task?

- Restaurant card
- Button
- List
- Input

Okay, the flip side of componentization is going too overboard with it.
Literally anything on this page could be broken down into a separate file, but
that would also become unmaintainable. What if your laptops charger 
was actually made out of 1000 tiny pieces rather than from a couple of main components? Normally when developing you will notice naturally when things
should become their own components, this migth happen for instance when you find yourself scrolling through 2000 lines of code searching for that one function.
Furthermore with practice and experience you will start to get a feeling for
what should be split, and what should not. This will get easier over time!


For this workshop we will be modifying Home.vue and passing properties into it (discussed just below) and then creating a new component called:

- Restaurant card (RestaurantCard.vue)

In this case

- App.vue will contain the restaurant cards data
- Home.vue will render a list of restaurant cards
- RestaurantCard.vue Will render the information about one restaurant inside a card.

Here App.vue is a parent of Home.vue which is a parent of RestaurantCard.vue

Doing multiple levels of parent-child nesting can also get complicated, so
try to keep your component design as flat as possible.

## 2. Properties

Before we can start splitting our code, we need to talk a little about something called properties.
Properties are variables that you can pass into a component. So for instance
we can pass a property of 'restaurantData' into our restaurant card and 
we can now use it inside the component


This is what a simplified restaurant component export would look like
```HTML
 <script>
  <template>
    <div>{{restaurant.name}}</div>
  </template>
  export default {
    name:'restaurant',
    // this is the meat and potatoes. Here we grab
    // the passed properties
    props: {
      restaurant: {
        type: Object,
        default: ()=>({}) // an object
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
        <restaurant-card :restaurant="restaurant"/>
    </div>
  </template>

  <script>
    // You need to import your component so you can use it!
    import Restaurant from './restaurant-card.vue';
    export default {
      components: {
        // Define the component
        RestaurantCard
      },
      data() {
        return {
          restaurant: {
              name: "Hot Pot"
            },
        }
      },
      
    }
  </script>
```

Notice that we the prop name and the inserted variable name does not
need to be the same!

### Properties - Tasks!

- Take "restaurants" Home.vue's data and pass then as a property from App.vue!
- Remember that you are not passing in an object, but an...

(if you get confused you can take a look at the finished code [here](https://codesandbox.io/s/vue-template-v20kf))


### Components - Splitting restaurant card

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



### Component Tasks!

- Create a RestaurantCard.vue component
- Import RestaurantCard.vue into Home.vue
- Render the new cards inside the v-for on Home.vue

(again if lost you can take a look at the finished code [here](https://codesandbox.io/s/vue-template-lszgn))


And there we go! I encourage you to play around, adding new components and passing properties around. 

Next time we will be deepening our knowledge by adding something mystical
called routing to our app! See you next time!

