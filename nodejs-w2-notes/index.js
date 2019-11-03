const Database = require('./database')
const Person = require('./person')
const Meetup = require('./meetup')
// const loadedFile = Database.load('meetup.json')
Database.load('meetup.json', (err, loadedFile) => {
  console.log('hello')

  const wtmb = Meetup.create(loadedFile)
  const omur = new Person('Omur', 30)
  omur.attend(wtmb)
  wtmb.printAttendeeNames()
  console.log(wtmb.name)
})







// console.log(Meetup.create({name: 'Wayfair', attendees: []}))
