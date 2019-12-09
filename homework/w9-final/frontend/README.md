# Lecture 7 - Vue.js / Frontend

[youtube video](https://www.youtube.com/watch?v=PcK1ASlm1OU)

Anja

unu lead front end

studied math started with php then moved to frontend

rendering HTML elements programmatically

2 most popular libraries in 2019:

- React
- Vue

they're very similar.

###[Scrimba](https://scrimba.com/p/pXKqta/cQ3QVcr) lessons/intro to VUE

**Vue.js is a progressive framework for building user interfaces**

at the core of vuejs is a system that allows you to declaratively render data to the dom,

with a very straight forward template syntax.

See additional Scrimba Vuejs Notes on my [github](https://github.com/MoodyBones/vue-play/tree/master/scrimba)

cdn = content delivery network

Command

Line

Interface

Vue CLI

can build a frontend app fast

it's great in coding interiews if you need to build a frontend fast

it will only take 5/10 mins to setup

```
    $
    vue --version
    // check version/installation is ok

    vue create frontend
    // 3rd word is optional

    cd frontend
    npm run serve
    //starts/runs frontend

    npm install -D pug pug-plain-loader
    // add pug and update template lang
    <template lang='pug'></template>
```

STATE MANAGEMENT

in a big site

a lot of components with the same data

in Vue the place where components can read and edited from is called state

state is managed using VueX library (like redux)

actions

dispatch

that will later change state

will will make all components update

a one way data flow

mutation is a function

it is the only thing with direct access to state

it can change the state

[](https://www.notion.so/4dbb6892303c4102b95e685bc05bbd1c#47d2b200d15249a79696b158a7c386d5)

[https://vuex.vuejs.org/](https://vuex.vuejs.org/)

## Display State

`Home.vue`

```
    import HelloWorld from '@/components/HelloWorld.vue'
    import { mapState } from 'vuex' // this helps us to read from /store

    export default {
      name: 'home',
      components: {
        HelloWorld
      },
      computed: {
        ...mapState({
          counter: (state) => state.counter
        })
      }
    }

    <template lang='pug'>
      main
        h2 Hello World
        div {{ counter }}
    </template>
```

`index.js`

```
    import Vue from 'vue'
    import Vuex from 'vuex'

    Vue.use(Vuex)

    export default new Vuex.Store({
      state: {
        counter: 0
      },
      mutations: {
      },
      actions: {
      },
      modules: {
      }
    })
```

## Modify State

`index.js`

```
    export default new Vuex.Store({
      state: {
        counter: 0
      },
      mutations: {
        SET_COUNTER(state, newCount) {
          state.counter = newCount
        }
      },
      actions: {
        incrementCounter({ commit, state }) {
          const newCount = state.counter + 1
          commit('SET_COUNTER', newCount)
        }
      },
      modules: {
      }
    })
```

name mutations in CAPS

the call of the function can happen anywhere,

it can happen as a reaction from the user clicking the button,

it can happen as a reaction from a user scrolling a page

for this example we will call the method the moment the component is created

`Home.vue`

```
    export default {
      name: 'home',
      components: {
        HelloWorld
      },
      computed: {
        ...mapState({
          counter: (state) => state.counter // this displays the state
        })
    		// SEE SIMPLIFIED SYNTAX BELOW
      },
      methods: {
        ...mapActions({
          incrementCounter: 'incrementCounter'
        })
    		// SEE SIMPLIFIED SYNTAX BELOW
      },
      created() {
        this.incrementCounter()
      }
    }
```

so:

- the increment counter will be called
- which will increment the counter
- commit a mutation
- and our state will be changed
- and as a result our view will be automatically updated

```
    // SIMPLIFIED
    // instead of passing the object,
    // pass the array inside

    computed: {
        ...mapState(['counter'])
      },
    methods: {
        ...mapActions(['incrementCounter'])
```

## Connecting frontend & backend

we will use json

`backend`

`designer.json`

```
    router.get('/all/json', async (req, res) => { // add /json
      try {
        const designers= await DesignerService.findAll()
        res.send(designers)
      } catch (err) {
        console.error(err.message)
        res.status(404).send(`Server error: ${err.message}`)
      }
    })

    // check
    // http://localhost:3000/designer/all/json
```

use chrome extension [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en), this displays nicely parsed JSON

### Axios

previously we used Axios for out backend, to create and delete people & meetups etc.

next we will use Axios in our frontend application,

to fetch the data from the url

and to display it inside of frontend applications

`$ frontend`

```
    npm i axios
```

we will use it to fetch data from the backend

`index.js`

```
    import axios from 'axios'


    actions: {
        async fetchMeetups({ commit }) {
          const result = await axios.get('http://localhost:3000/designer/all/json')
          console.log(result) // to test
        }
      },

    // remember axios is an asynchronous request!!
    // use async await
```

browser error

`Access to XMLHttpRequest at '[http://localhost:3000/designer/all/json](http://localhost:3000/designer/all/json)' from origin '[http://localhost:8081](http://localhost:8081/)' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.`

this means:

we are not allowed to access the backend data

for security reasons

we need the backend to allow us

talk to the backend engineer, or if you're fullstack, you can use:

[CORS](https://www.npmjs.com/package/cors)

`$ backend`

```
    npm i cors
```

`backend`
`app.js`

```
    const cors = require('cors')

    app.use(cors())
```

This is not normal practice,

Because we basically eliminated all security guards,

and said that ever single server on the internet can access our server,

and request data from it!

This isn't a real use case, normally you need to configure it,

e.g. only this type of server, or coming from this url,

will access it

we don't really want to share our resources wiht other origins that we don't own

we need to configure this for every project that we have.

## Create a new Mutation to Set up Prop in State

and then read it

and display it

PAUSE continue at 1:19:31

MEL!!! [youtube video](https://www.youtube.com/watch?v=PcK1ASlm1OU)

`index.js`

```
    export default new Vuex.Store({
      state: {
        designers: [],
        counter: 0
      },
      mutations: {
        SET_COUNTER(state, newCount) {
          state.counter = newCount
        },
        SET_DESIGNERS(state, data) {
          state.designers = data
        }
      },
      actions: {
        incrementCounter({ commit, state }) {
          const newCount = state.counter + 1
          commit('SET_COUNTER', newCount)
        },
        async fetchDesigners({ commit }) {
          const result = await axios.get('http://localhost:3000/designer/all/json')
          commit('SET_DESIGNERS', result.data)
        }
      },
      modules: {}
    })
```

`Home.vue`

```
    computed: {
        ...mapState(['designers'])



    <template lang='pug'>
      main
        h2 Hello World
        div {{ designers }}
    </template>
```

## Component Decomposition

`designer-card.vue`

```
    <script>
    export default {
      name: 'DesignerCard',
      props: ['designer']
    }
    </script>

    <template lang="pug">
      article
        h3.name {{ designer.name }}
        div.website {{ designer.website }}
    </template>

    <style scoped>
    .name {
      color: grey
    }
    </style>
```

and import into `Home.vue`

```
    import DesignerCard from '@/components/designer-card.vue'


    components: {
    	DesignerCard
    },

    // to test that it's getting the array of designers
    div(v-for="designer in designers") {{ designer.name }}
    // then delelte and replace with
    designer-card(v-for="designer in designers", :designer="designer")
```

### Naming Conventions: DesignerCard vs designer-card

See [Vue Style Guide](https://vuejs.org/v2/style-guide/#Priority-A-Essential)

In JavaScript when naming classes we use:

- PascalCase

In HTML we use:

- kebab-case

HTML is case insensitive, however as a consistent styling convention,

we always use kebab-case when naming:

- tags,
- attributes (props)

## User Interactions

`Home.vue`

```
    // export default {}
    	computed: {
        ...mapState(['designers', 'counter'])
      },
      methods: {
        ...mapActions(['fetchDesigners', 'incrementCounter'])
      },

    // <template>
    		button(@click="incrementCounter") Increment
        div {{ counter }}
```

## Vue Routering

[Additional video on Routing here!](https://www.youtube.com/watch?v=Rzjmh4vvrQo&t=234s)

`backend`

`routes/designer.js`

```
    // connect to frontend
    router.get('/:id/json', async (req, res) => { // add json
      const { id } = req.params
      try {
        const designer = await DesignerService.find(id)
        if (!designer) {
          res.status(404).send(`Error: Could not find designer for id >${id}<`)
        } else {
          res.send(designer) // change this
        }
      } catch (err) {
        console.error(err.message)
        res.status(500).send(`Server error: ${err.message}`)
      }
    })
```

`frontend`

`/components/designer-card.vue`

```
    <script>
    export default {
      name: 'DesignerCard',
      props: ['designer'],
      computed: {
        designerUrl() {
          return `/designer/${this.designer._id}`
        }
      }
    }
    </script>

    <template lang="pug">
      article.card
        h2.card-title
          router-link(:to="designerUrl") {{ designer.name }}
        span {{ designer.website }}
    </template>
```

`frontend`

`router/index.js`

```
    import Designer from '../views/Designer.vue'

    // & add to const routes = {}
    	{
        path: '/designer/:id',
        name: 'designer',
        component: Designer
      },
```

then create the new `Designer.vue` component in `/frontend/src/views`

```
    <script>
    // @ is an alias to /src
    import DesignerCard from '@/components/designer-card.vue'
    import { mapState, mapActions } from 'vuex' // this helps us to read from /store

    export default {
      name: 'home',
      components: {
        DesignerCard
      },
      computed: {
        ...mapState(['designer']) // note this says designer not designers!!
      },
      methods: {
        ...mapActions(['fetchDesigner']) // new action to fetch ONLY ONE designer
      },
      created() {
        this.fetchDesigner(this.$route.params.id) //get the id from the url using $route
      }
    }
    </script>

    <template lang="pug">
      section
        designer-card(:designer="designer")
    </template>
```

and last thing to do is create the fetchDesigner actions,

so we can fetch the data from the backend.

go to:

`/store/index.js`

```
    state: {
        designer: {},
      },
      mutations: {
        SET_DESIGNER(state, data) {
          state.designer = data
        }
      },
      actions: {
        async fetchDesigner({ commit }, id) {
          const result = await axios.get(
            `http://localhost:3000/designer/${id}/json`
          )
          commit('SET_DESIGNER', result.data)
        }
      },
```
