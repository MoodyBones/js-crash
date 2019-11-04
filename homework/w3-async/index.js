// Untitled Designer Database
const Designer = require('./designer')
const Skill = require('./skill')
const Customer = require('./customer')
const Database = require('./database')

////// Classes

const sallySweet = new Designer('Sally Sweet', 'sallys@gmail.com')
const farrahLee = new Designer('Farrah Lee', 'farrahl@gmail.com')
const rosaJones = new Designer('Rosa Jones', 'rosaj@gmail.com')

const designerRecord = [sallySweet, farrahLee, rosaJones]
////////

const webDesign = new Skill('Web Design')
const typography = new Skill('Typography')
const branding = new Skill('Branding')
const printDesign = new Skill('Print Design')
const UIDesign = new Skill('UI Design')
const UXDesign = new Skill('UX Design')
const animation = new Skill('Animation')

const skillRecord = [
  webDesign,
  typography,
  branding,
  printDesign,
  UIDesign,
  UXDesign,
  animation,
]

//////////

const martin = new Customer('Martin', 'martin@email.com')
const sam = new Customer('Sam', 'sam@email.com')
const sarah = new Customer('Sarah', 'sarah@email.com')

const customerRecord = [martin, sam, sarah]

///////// Interactions
sallySweet.addSkill(webDesign)
sallySweet.addSkill(UXDesign)
sallySweet.addSkill(animation)
rosaJones.addSkill(animation)
rosaJones.addSkill(typography)
rosaJones.addSkill(UIDesign)
farrahLee.addSkill(typography)
farrahLee.addSkill(printDesign)
farrahLee.addSkill(branding)

sarah.inquireSkill(animation)
sam.inquireSkill(typography)
sam.inquireSkill(animation)


martin.requestDesigner(webDesign, sallySweet)
martin.requestDesigner(animation, sallySweet)
sam.requestDesigner(typography, rosaJones)
sam.requestDesigner(UIDesign, rosaJones)
sarah.requestDesigner(branding, farrahLee)

animation.printDesignersBySkill()
webDesign.printDesignersBySkill()

Database.save('skill.json', skillRecord)
Database.save('designer.json', designerRecord)
Database.save('customer.json', customerRecord)

const loadedSkills = Database.load('skill.json')
const loadedDesigners = Database.load('designer.json')
const loadedCustomers = Database.load('customer.json')
console.log(loadedSkills)
console.log(loadedDesigners)
console.log(loadedCustomers)

// const Database = require('./database')
// const Skill = require('./skill')
// const loadedFile = Database.load('skill.json')

// const animation = new Skill(loadedFile.name, loadedFile.designers)
// animation.printDesignersBySkill()
