# Untitled Designer Database

Currently under development.

### Created by Mel Jones

# Backend TODO

## routes/models/services

- location
- skill
- designer
- plus base service
- delete all others
- THEN UPDATE app.js

## Location

### Model

- name: String, DONE
- country: String, DONE
- designers: [] DONE

### Service

- ok I think, but you need to update Designer services to include country save!?

### Routes

- add json DONE
- add try catch DONE

server crashes when I try [`http://localhost:3000/location/all`](http://localhost:3000/location/all)

something about list.pug. Do I still need that or can I delete it. What does the error mean?

but [`http://localhost:3000/location/all/json`](http://localhost:3000/location/all/json) works fine and

I can see the data if I use axios on `[http://localhost:3000/](http://localhost:3000/)`

    // add
    axios.post('/location', { name: 'Berlin', country: 'Germany'}).then(console.log)
    
    //delete
    axios.delete('/location/6').then(console.log)
    

- add new locations with Country DONE
- delete old locations DONE

# FRONTEND - STYLE GUIDE

## !TODO first

- duplicate week 7 into final folder
- delete data
- add new data

## fonts

- <link href="[https://fonts.googleapis.com/css?family=Antic+Slab|Montserrat:300,500|Raleway:300,500&display=swap](https://fonts.googleapis.com/css?family=Antic+Slab%7CMontserrat:300,500%7CRaleway:300,500&display=swap)" rel="stylesheet">
- sans-serif-head
    - Raleway - 300 | 500
        - font-family: 'Raleway', sans-serif;
- sans-serif-main
    - Montserrat - san serif - 300 | 500
        - font-family: 'Montserrat', sans-serif;
- serif-main
    - Antic Slab - serif
        - font-family: 'Antic Slab', serif;
- ionicons
- 
- Raleway - but numbers looks crap

## colours

[Indian palette](https://flatuicolors.com/palette/in)

- lilac: rgba(214, 162, 232,1.0)
- pink-red: rgba(252, 66, 123,1.0)
- orang-red: rgba(253, 114, 114,1.0)
- navy: rgba(24, 44, 97,1.0)
- blue: rgba(59, 59, 152,1.0)
- blue-medium: rgba(27, 156, 252,1.0)
- yellow-light: rgba(248, 239, 186,1.0)
- yellow-honey: rgba(234, 181, 67,1.0)
- green: rgba(88, 177, 159,1.0)
- grey-dark: rgba(44, 58, 71,1.0)
- grey-med: rgba(202, 211, 200,1.0)
- black-ish: rgba(15, 17, 8, 1.0)
- white-ish: rgba(242, 242, 242. 1.0)

## imgs

- save imgs with ids
- world pic

    [](https://www.notion.so/7c97e9b312ab4cc5871d30a5a3294c23#ebab57e373d54d4cb9079d558229792d)

- women & man on couch with laptop

    [](https://www.notion.so/7c97e9b312ab4cc5871d30a5a3294c23#c486bd31cfc94d1a91fd97eef9926721)

- 

## animate

- links - see
- underline or border
- on hover

## layout

- nav - white
- header - blue/navy & white like Matisse and [Lorraine Sorlet](https://www.instagram.com/p/B50avAootN0/)
- designers cards - card layout like [increment](https://increment.com/) cards -  grey bg
- skills cards - coloured by skill -  white bg
- City cards - with map - bring coloured bg
- sign up form- see Broadband Website
- About/ contact me
- footer - dark grey

## Spaciing

- can use variable
    - —spacing: 10px
- padding between links and underline - are there new css features to do this?
    - maybe check out Jonas Schedtmann or CSS Tricks
- lots of white space - except for headings

## extra cool stuff

- bottom sticky nav - see [broadband](https://clairelevans.com/) - also for mobile, think like PWA/native app

### Description:

- An Inventory of Female Designers.
- My goal is to incorporate a clickable map that will show the density of female designers around the world.
- I would like it if you can click through the map, and pull up lists by location and skill, and from there click through to the designers websites :)

### Objective:

- Create a nodejs/express/mongoDb App.
- Learn a bit about backend JavaScript.
- This project is created alongside & with thanks to [WTM JS Crash Course](https://github.com/WTMBerlin/jscc2019).

### Technologies:

nodejs expressjs mongoDb mongoose pug ava

## Start application

`$ npm install`

`$ nodemon index.js`

make sure mongoDb is running `$ brew services start mongodb-community`

open [localhost:3000](http://localhost:3000/)

## Interactions

#### Designer

- add new Designer
  - name:
    - firstName
    - LastName
  - location: String
  - email: String
    -with validation
  - website: String
  - skills: Array
  - description: String
- added fullName method
- [TO DO] submit a request to be added to inventory

#### Skill

- add new Skill
  - name: String

#### Location

- add new Location
  - name: String

#### User

- add new User
  - name: String
  - email: String
  - location: String

#### Search

#### IDEAS/TO DO..

Designer

- can submit a request to be added to the inventory
- [DONE] name, seperate first and last names
- location, seperate city & country
  User
- [DEVELOPING]can view Designers by Location
- can view Designers by City/Country
- can view Designers by Skill
- can view Designers Alphabetically
- can view Designers Randomly (home & on refresh)
- can view Designers on a map
- click on Designer and be directed to the Designers Website
- hover over Designer and view a description
  - OR hover over Designer and view website
- OPTIONAL/TO BE CONSIDERED
  - User can create an account
  - User can log in
  - User star/favourite a Designer
  - User view their favourites list
  - User can message/email Designer

## Classes & Routes

Applicaton utilizes axios. To run interactions copy & paste into browser.

#### Designer

- `http://localhost:3000/designer/all`
- add new designer

  - `axios.post('/designer', { fullName: 'Mel Jones', email: 'jones.mel@gmail.com', website: 'meljonesss.mel'}).then(console.log)`
  - `axios.post('/designer', { fullName: 'Sally Sweet', email: 'sallysweet@email.com', website: 'sally.sweet'}).then(console.log)`
  - `axios.post('/designer', { fullName: 'Farrah Lee', email: 'farrah@email.com', website: 'farrahlee.com'}).then(console.log)`
  - `axios.post('/designer', { fullName: 'Rosa Jones', email: 'rosa@email.com', website: 'rosa.design'}).then(console.log)`
  - `axios.post('/designer', { fullName: 'Conor O'Rourke', email: 'conor@gmail.com', website: 'conor.com'}).then(console.log)`
  - `axios.post('/designer', { fullName: 'Arne Lucas', email: 'arne@gmail.com', website: 'arne.com'}).then(console.log)`

- delete designer

  - `axios.delete('/designer/6').then(console.log)`

- add skill to designer

  - `axios.post('/designer/5dd29b5ebfd250191a6d9c98/skills', { skill: '5dd2bcf12a232e2612439867' }).then(console.log)`

- add location to designer
  - `axios.post('/designer/5dd2e4522dd94d3e806d3d6f/location', { location: '5dd2a528bcbc5a2088c5dd44' }).then(console.log)`
    ​

#### Skill

- add skill
  - `axios.post('/skill', { name: 'Web Design'}).then(console.log)`

#### Location

```
// add
axios.post('/location', { name: 'Berlin', country: 'Germany'}).then(console.log)

// delete
axios.delete('/location/6').then(console.log)
```



### Reference links:

- [Welcome guide](https://github.com/WTMBerlin/jscc-welcomeguide) for JavaScript Crash Course
- [WTM Berlin](http://wtmberlin.com/)

### Thanks:

A big thanks to all the Teacher & Assistants that gave up their evenings to teach us all about JavaScript, thanks for reviewing our code and keeping us motivated. Armagan, Mert, Omur, Maria, Mihri, Celian, Jason, Anja, JP plus anyone I missed, you're all awesome and I'm super appreciative!
Thanks to my classmates for being so great and inspiring!
Thanks to Wayfair for the venue and the food!
THANKS WTM BERLIN!!! <3 <3 <3

<br>
Any advice/suggestions are most welcome!


