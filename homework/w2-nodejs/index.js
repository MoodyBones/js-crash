// Untitled Designer Database
//

const Designer = require('./designer')
const Service = require('./service')
const Customer = require('./customer')
const Database = require('./database')

//////// Classes
//
const sallySweet = new Designer('Sally Sweet', 'sallys@gmail.com')
const farrahLee = new Designer('Farrah Lee', 'farrahl@gmail.com')
const rosaJones = new Designer('Rosa Jones', 'rosaj@gmail.com')

//////////

const webDesign = new Service('Web Design')
const typography = new Service('Typography')
const branding = new Service('Branding')
const printDesign = new Service('Print Design')
const UIDesign = new Service('UI Design')
const UXDesign = new Service('UX Design')
const animation = new Service('Animation')

////////////

const martin = new Customer('Martin', 'martin@email.com')
const sam = new Customer('Sam', 'sam@email.com')
const sarah = new Customer('Sarah', 'sarah@email.com')

/////////// Interactions
sallySweet.addService(webDesign)
sallySweet.addService(UXDesign)
sallySweet.addService(animation)
rosaJones.addService(animation)
rosaJones.addService(typography)
rosaJones.addService(UIDesign)
farrahLee.addService(printDesign)
farrahLee.addService(branding)

martin.requestService(webDesign, sallySweet)
martin.requestService(animation, sallySweet)
sam.requestService(typography, rosaJones)
sam.requestService(UIDesign, rosaJones)
sarah.requestService(branding, farrahLee)

animation.printDesignersByService()
webDesign.printDesignersByService()

Database.save('service.json', animation)
Database.save('designer.json', sallySweet)
Database.save('customer.json', martin)

const loadedFile = Database.load('service.json')
console.log(loadedFile.name)
