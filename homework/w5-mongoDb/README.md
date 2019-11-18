`http://localhost:3000`
`http://localhost:3000/designer/all`

test data
add new designer
axios.post('/designer', { name: 'Mel', email: 'mel@gmail.com', website: 'meljones.me', city: 'Berlin' }).then(console.log)`

axios.post('/designer', { name: 'Sally', email: 'sallysweet@email.com', website: 'sally.sweet', city: 'Lisbon' }).then(console.log)

axios.post('/designer', { name: 'Farrah Lee', email: 'farrah@email.com', website: 'farrahlee.com', city: 'Berlin' }).then(console.log)

axios.post('/designer', { name: 'Rosa Jones', email: 'rosa@email.com', website: 'rosa.design', city: 'Amsterdam' }).then(console.log)

axios.post('/designer', { name: 'Conor', email: 'conor@gmail.com', website: 'conor.com', city: 'Berlin' }).then(console.log)

axios.post('/designer', { name: 'Arne', email: 'arne@gmail.com', website: 'arne.com', city: 'Amsterdam' }).then(console.log)



delete designer
axios.delete('/designer/6').then(console.log)


add skill
axios.post('/skill', { name: 'Web Design'}).then(console.log)



add skill to designer
axios.post('/designer/5dd29b5ebfd250191a6d9c98/skills', { skill: '5dd2bcf12a232e2612439867' }).then(console.log)

  webDesign,
  typography,
  branding,
  printDesign,
  UIDesign,
  UXDesign,
  animation,

  



