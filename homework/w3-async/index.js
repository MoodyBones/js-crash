// Untitled Designer Database
const Designer = require('./models/designer')
const Skill = require('./models/skill')
const Customer = require('./models/customer')
const DesignerService = require('./services/designer-service')
const SkillService = require('./services/skill-service')
const CustomerService = require('./services/customer-service')

console.log('Hello World!! this is Mel')

async function main() {
  const sallySweet = new Designer('Sally Sweet', 'sallys@gmail.com')
  const farrahLee = new Designer('Farrah Lee', 'farrahl@gmail.com')
  const rosaJones = new Designer('Rosa Jones', 'rosaj@gmail.com')

  const webDesign = new Skill('Web Design')
  const typography = new Skill('Typography')
  const branding = new Skill('Branding')
  const printDesign = new Skill('Print Design')
  const UIDesign = new Skill('UI Design')
  const UXDesign = new Skill('UX Design')
  const animation = new Skill('Animation')

  sallySweet.addSkill(webDesign)
  sallySweet.addSkill(UXDesign)
  sallySweet.addSkill(animation)
  rosaJones.addSkill(animation)
  rosaJones.addSkill(typography)
  rosaJones.addSkill(UIDesign)
  farrahLee.addSkill(typography)
  farrahLee.addSkill(printDesign)
  farrahLee.addSkill(branding)
  animation.printDesignersBySkill()
  webDesign.printDesignersBySkill()

  const martin = new Customer('Martin', 'martin@email.com')
  const sam = new Customer('Sam', 'sam@email.com')
  const sarah = new Customer('Sarah', 'sarah@email.com')

  sarah.inquireSkill(animation)
  sam.inquireSkill(typography)
  sam.inquireSkill(animation)

  martin.requestDesigner(webDesign, sallySweet)
  martin.requestDesigner(animation, sallySweet)
  sam.requestDesigner(typography, rosaJones)
  sam.requestDesigner(UIDesign, rosaJones)
  sarah.requestDesigner(branding, farrahLee)
}

////// Classes
/////// Designer

// let designerRecord = [sallySweet, farrahLee, rosaJones]

// //////// Skill

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

// let customerRecord = [martin, sam, sarah]

// ///////// Interactions

//////// additional testing

// const conor = new Designer('Conor Rad', 'conor@email.com')
// const arne = new Designer('Arne Adventure', 'arne@email.com')
// // console.log(conor, arne)

// const photography = new Skill('Photography')
// conor.addSkill(photography)
// arne.addSkill(photography)
// photography.printDesignersBySkill()



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

main()
