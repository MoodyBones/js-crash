Hey all, I got a little confused this week. I've been trying to build more complex logic, but yeh na, nothing I tried worked.

I thought to make a search service, that could list the designers by location or skills. I tried implementing a search model/service/route to handle those requests, but couldn't get the routing right. so I moved the methods back to the designer service :/  

Also I plan to change my customer model to be user. and yeah like I said above, the user should be able to request the designers by location or skill. 

My goal is to eventually incorporate a map that will show the density of female designers around the world. I would like it if you can click through that, and pull up lists by location and skill, and from there click through to the designers websites :)  

thanks for listening, any advice/resources are much appreciated. here is the code the I managed to get working so far...  

See you Tuesday! <3   


`http://localhost:3000`
`http://localhost:3000/designer/all`

test data
add new designer
```axios.post('/designer', { name: 'Mel', email: 'mel@gmail.com', website: 'meljones.me', city: 'Berlin' }).then(console.log)

axios.post('/designer', { name: 'Sally', email: 'sallysweet@email.com', website: 'sally.sweet', city: 'Lisbon' }).then(console.log)`

axios.post('/designer', { name: 'Farrah Lee', email: 'farrah@email.com', website: 'farrahlee.com', city: 'Berlin' }).then(console.log)

axios.post('/designer', { name: 'Rosa Jones', email: 'rosa@email.com', website: 'rosa.design', city: 'Amsterdam' }).then(console.log)

axios.post('/designer', { name: 'Conor', email: 'conor@gmail.com', website: 'conor.com', city: 'Berlin' }).then(console.log)

axios.post('/designer', { name: 'Arne', email: 'arne@gmail.com', website: 'arne.com', city: 'Amsterdam' }).then(console.log)
```



delete designer
`axios.delete('/designer/6').then(console.log)`


add skill
`axios.post('/skill', { name: 'Web Design'}).then(console.log)`



add skill to designer
`axios.post('/designer/5dd29b5ebfd250191a6d9c98/skills', { skill: '5dd2bcf12a232e2612439867' }).then(console.log)`

  webDesign,
  typography,
  branding,
  printDesign,
  UIDesign,
  UXDesign,
  animation,


add location
`axios.post('/location', { name: 'Berlin'}).then(console.log)`

  
add location to designer
`axios.post('/designer/5dd2e4522dd94d3e806d3d6f/location', { location: '5dd2a528bcbc5a2088c5dd44' }).then(console.log)`
​




