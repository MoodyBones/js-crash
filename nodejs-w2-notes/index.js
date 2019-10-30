const Database = require('./database')
const Person = require('./person')
const Meetup = require('./meetup')
const loadedFile = Database.load('meetup.json')
const Chalk = require('chalk')

// const mert = new Person('Mert', 34)
// const armagan = new Person('Armagan', 35)

// console.log(Chalk.blue.bgWhite.bold('hello world'))

// mert.greet(armagan)

// const wtmb = new Meetup('WTM Berlin')

// armagan.attend(wtmb)
// mert.attend(wtmb)

// wtmb.printAttendeeNames()

// Database.save('meetup.json', wtmb)
// Database.save('person.json', mert)

// const loadedFile = Database.load('meetup.json')
// console.log(loadedFile.name)

const wtmb = Meetup.create(loadedFile)
const omur = new Person('Omur', 30)

omur.attend(wtmb)
console.log(Meetup.create({name: 'Wayfair', attendees: []}))
wtmb.printAttendeeNames()
console.log(wtmb.name)