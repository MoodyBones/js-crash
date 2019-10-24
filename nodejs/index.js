class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet(person) {
    console.log('Hello ' + person.name, 'my name is ', this.name)
  }
  attend(meetup) {
    this.meetup = meetup
    meetup.attendees.push(this)
  }
}

class Meetup {
  constructor(name) {
    this.name = name
    this.attendees = []
  }
  printAttendeeNames() {
    this.attendees.forEach(printName)
  }
}

printName = person => console.log(person.name)

const mert = new Person('Mert', 34)
const armagan = new Person('Armagan', 35)

mert.greet(armagan)

const wtmb = new Meetup('WTM Berlin')

armagan.attend(wtmb)
mert.attend(wtmb)

wtmb.printAttendeeNames()
