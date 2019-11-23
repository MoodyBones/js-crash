Hey all, I got a little confused this week. I've been trying to build more complex logic, but yeh na, nothing I tried worked.

I thought to make a search service, that could list the designers by location or skills. I tried implementing a search model/service/route to handle those requests, but couldn't get the routing right. so I moved the methods back to the designer service :/  

Also I plan to change my customer model to be user. and yeah like I said above, the user should be able to request the designers by location or skill. 

My goal is to eventually incorporate a map that will show the density of female designers around the world. I would like it if you can click through that, and pull up lists by location and skill, and from there click through to the designers websites :)  

thanks for listening, any advice/resources are much appreciated. here is the code the I managed to get working so far...  

See you Tuesday! <3   

# Untitled Designer Database
Currently under development.

### Project title: 
Untitled Designer Database
### Created by: 
Mel Jones
### Description:


### Objective:
- Learn backend JavaScript. 
- This project is created alongside & with thanks to [WTM JS Crash Course](https://github.com/WTMBerlin/jscc2019).

### Technologies:
nodejs expressjs mongoDb mongoose pug ava

## Start application
`$ npm install`

`$ nodemon index.js`

make sure mongo is running `$ brew services start mongodb-community`

open [localhost:3000](http://localhost:3000/)

## Interactions

#### Designer
- add new Designer
  - name: String
  - location: String
  - email: String
  - website: String
  - skills: Array
  - description: String
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



### [TO DO]
Designer
  - can submit a request to be added to the inventory
  - name, seperate first and last names
  - location, seperate city & country
User
  - can view Designers by City
  - can view Designers by Country
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
  - axios.post('/designer', { name: 'Mel', email: 'mel@gmail.com', website: 'meljones.me', city: 'Berlin' }).then(console.log)
  - axios.post('/designer', { name: 'Sally', email: 'sallysweet@email.com', website: 'sally.sweet', city: 'Lisbon' }).then(console.log)`
  - axios.post('/designer', { name: 'Farrah Lee', email: 'farrah@email.com', website: 'farrahlee.com', city: 'Berlin' }).then(console.log)
  - axios.post('/designer', { name: 'Rosa Jones', email: 'rosa@email.com', website: 'rosa.design', city: 'Amsterdam' }).then(console.log)
  - axios.post('/designer', { name: 'Conor', email: 'conor@gmail.com', website: 'conor.com', city: 'Berlin' }).then(console.log)
  - axios.post('/designer', { name: 'Arne', email: 'arne@gmail.com', website: 'arne.com', city: 'Amsterdam' }).then(console.log)

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
- add location
  - `axios.post('/location', { name: 'Berlin'}).then(console.log)`





### Reference links:
- [Welcome guide](https://github.com/WTMBerlin/jscc-welcomeguide) for JS Crashcourse
- [WTM Berlin](http://wtmberlin.com/)



### Thanks:
A big thanks to all the Teacher & Assistants that gave up their evenings to teach us all about JavaScript, thanks for reviewing our code and keeping us motivated. Armagan, Mert, Omur, Maria, Mihri, Celian, Jason, Anja, JP plus anyone I missed, you're all awesome and I'm super appreciative!
Thanks to my classmates for being so great and inspiring!
Thanks to Wayfair for the venue and the food!
THANKS WTM BERLIN!!! <3 <3 <3