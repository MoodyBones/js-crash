// Untitled Designer Database
const Designer = require('./designer')
const Service = require('./service')
const Customer = require('./customer')
const Database = require('./database')

//////// Classes
//
const sallySweet = new Designer('Sally Sweet', 'sallys@gmail.com')
const farrahLee = new Designer('Farrah Lee', 'farrahl@gmail.com')
const rosaJones = new Designer('Rosa Jones', 'rosaj@gmail.com')

const designerRecord = [sallySweet, farrahLee, rosaJones]
//////////

const webDesign = new Service('Web Design')
const typography = new Service('Typography')
const branding = new Service('Branding')
const printDesign = new Service('Print Design')
const UIDesign = new Service('UI Design')
const UXDesign = new Service('UX Design')
const animation = new Service('Animation')

const serviceRecord = [
  webDesign,
  typography,
  branding,
  printDesign,
  UIDesign,
  UXDesign,
  animation,
]

////////////

const martin = new Customer('Martin', 'martin@email.com')
const sam = new Customer('Sam', 'sam@email.com')
const sarah = new Customer('Sarah', 'sarah@email.com')

const customerRecord = [martin, sam, sarah]

/////////// Interactions
sallySweet.addService(webDesign)
sallySweet.addService(UXDesign)
sallySweet.addService(animation)
rosaJones.addService(animation)
rosaJones.addService(typography)
rosaJones.addService(UIDesign)
farrahLee.addService(typography)
farrahLee.addService(printDesign)
farrahLee.addService(branding)

sarah.inquireService(animation)
sam.inquireService(typography)

martin.requestDesigner(webDesign, sallySweet)
martin.requestDesigner(animation, sallySweet)
sam.requestDesigner(typography, rosaJones)
sam.requestDesigner(UIDesign, rosaJones)
sarah.requestDesigner(branding, farrahLee)

animation.printDesignersByService()
webDesign.printDesignersByService()

Database.save('service.json', serviceRecord)
Database.save('designer.json', designerRecord)
Database.save('customer.json', customerRecord)

const loadedServices = Database.load('service.json')
const loadedDesigners = Database.load('designer.json')
const loadedCustomers = Database.load('customer.json')
console.log(loadedServices)
console.log(loadedDesigners)
console.log(loadedCustomers)


//////// Tesing stuffsss
////// Classes
/////// Designer

// const sallySweet = new Designer('Sally Sweet', 'sallys@gmail.com')
// const farrahLee = new Designer('Farrah Lee', 'farrahl@gmail.com')
// const rosaJones = new Designer('Rosa Jones', 'rosaj@gmail.com')

// let designerRecord = [sallySweet, farrahLee, rosaJones]

// //////// Skill

// const webDesign = new Skill('Web Design')
// const typography = new Skill('Typography')
// const branding = new Skill('Branding')
// const printDesign = new Skill('Print Design')
// const UIDesign = new Skill('UI Design')
// const UXDesign = new Skill('UX Design')
// const animation = new Skill('Animation')

// let skillRecord = [
//   webDesign,
//   typography,
//   branding,
//   printDesign,
//   UIDesign,
//   UXDesign,
//   animation,
// ]

// ////////// Customer

// const martin = new Customer('Martin', 'martin@email.com')
// const sam = new Customer('Sam', 'sam@email.com')
// const sarah = new Customer('Sarah', 'sarah@email.com')

// let customerRecord = [martin, sam, sarah]

// ///////// Interactions

// sallySweet.addSkill(webDesign)
// sallySweet.addSkill(UXDesign)
// sallySweet.addSkill(animation)
// rosaJones.addSkill(animation)
// rosaJones.addSkill(typography)
// rosaJones.addSkill(UIDesign)
// farrahLee.addSkill(typography)
// farrahLee.addSkill(printDesign)
// farrahLee.addSkill(branding)

// sarah.inquireSkill(animation)
// sam.inquireSkill(typography)
// sam.inquireSkill(animation)

// martin.requestDesigner(webDesign, sallySweet)
// martin.requestDesigner(animation, sallySweet)
// sam.requestDesigner(typography, rosaJones)
// sam.requestDesigner(UIDesign, rosaJones)
// sarah.requestDesigner(branding, farrahLee)

// animation.printDesignersBySkill()
// webDesign.printDesignersBySkill()


//////// testing 

// const conor = new Designer('Conor Rad', 'conor@email.com')
// const arne = new Designer('Arne Adventure', 'arne@email.com')
// // console.log(conor, arne)

// const photography = new Skill('Photography')
// conor.addSkill(photography)
// arne.addSkill(photography)
// photography.printDesignersBySkill()

// skillRecord = [
//   webDesign,
//   typography,
//   branding,
//   printDesign,
//   UIDesign,
//   UXDesign,
//   animation,
//   photography
// ]

// designerRecord = [sallySweet, farrahLee, rosaJones, conor, arne]

// Database.save('skill.json', photography)
// const loadedFile = Database.load('skill.json')
// console.log(loadedFile.designers[0].name)


// /////////////////// SAVE

// Database.save('skill.json', skillRecord)
// Database.save('designer.json', designerRecord)
// Database.save('customer.json', customerRecord)

/////////////////////// LOAD

// const loadedSkills = Database.load('skill.json')
// const loadedDesigners = Database.load('designer.json')
// const loadedCustomers = Database.load('customer.json')
// const skill = Skill.create(loadedSkills)
// console.log(skill)
// console.log(loadedDesigners)
// console.log(loadedCustomers)