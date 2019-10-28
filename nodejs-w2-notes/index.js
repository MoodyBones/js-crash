const Person = require('./person')
const Meetup = require('./meetup')
const Database = require('./database')
const Chalk = require('chalk')

const mert = new Person('Mert', 34)
const armagan = new Person('Armagan', 35)

console.log(Chalk.blue.bgWhite.bold('hello world'))

mert.greet(armagan)

const wtmb = new Meetup('WTM Berlin')

armagan.attend(wtmb)
mert.attend(wtmb)

wtmb.printAttendeeNames()

Database.save('meetup.json', wtmb)
Database.save('person.json', mert)

const loadedFile = Database.load('meetup.json')
console.log(loadedFile.name)
