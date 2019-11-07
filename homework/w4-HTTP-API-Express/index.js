// // Untitled Designer Database
// const Designer = require('./models/designer')
// const Skill = require('./models/skill')
// const Customer = require('./models/customer')
// const SkillService = require('./services/skill-service')
// const CustomerService = require('./services/customer-service')
// const Chalk = require('chalk')

// console.log('Hello World!! this is Mel Jones')

// async function main() {
//   ////////// add Designers
//   const sallySweet = new Designer('Sally Sweet', 'sallys@gmail.com')
//   const farrahLee = new Designer('Farrah Lee', 'farrahl@gmail.com')
//   const rosaJones = new Designer('Rosa Jones', 'rosaj@gmail.com')

//   ////////// add Skills
//   const webDesign = new Skill('Web Design')
//   const typography = new Skill('Typography')
//   const branding = new Skill('Branding')
//   const printDesign = new Skill('Print Design')
//   const uiDesign = new Skill('UI Design')
//   const uxDesign = new Skill('UX Design')
//   const animation = new Skill('Animation')

//   ////// and some interactions
//   sallySweet.addSkill(webDesign)
//   sallySweet.addSkill(uxDesign)
//   sallySweet.addSkill(animation)
//   rosaJones.addSkill(animation)
//   rosaJones.addSkill(typography)
//   rosaJones.addSkill(uiDesign)
//   farrahLee.addSkill(typography)
//   farrahLee.addSkill(printDesign)
//   farrahLee.addSkill(branding)

//   //////// push new designers to DB
//   await DesignerService.add(sallySweet)
//   await DesignerService.add(farrahLee)
//   await DesignerService.add(rosaJones)

//   //////// test DesignerService
//   const designers = await DesignerService.findAll()

//   console.log(designers)

//   animation.printDesignersBySkill()
//   webDesign.printDesignersBySkill()

//   //////// push new skills to DB
//   await SkillService.add(webDesign)
//   await SkillService.add(typography)
//   await SkillService.add(branding)
//   await SkillService.add(printDesign)
//   await SkillService.add(uiDesign)
//   await SkillService.add(uxDesign)
//   await SkillService.add(animation)

//   ///////// test SkillService
//   const skills = await SkillService.findAll()

//   console.log(skills)

//   //////// test adding additional new designers and skills
//   const conor = new Designer('Conor Rad', 'conor@email.com')
//   const arne = new Designer('Arne Adventure', 'arne@email.com')

//   await DesignerService.add(conor)
//   await DesignerService.add(arne)

//   const designersMore = await DesignerService.findAll()

//   console.log(designersMore)

//   const photography = new Skill('Photography')
//   await SkillService.add(photography)

//   conor.addSkill(photography)
//   arne.addSkill(photography)

//   photography.printDesignersBySkill()

//   ///////////// add Customers
//   const martin = new Customer('Martin', 'martin@email.com')
//   const sam = new Customer('Sam', 'sam@email.com')
//   const sarah = new Customer('Sarah', 'sarah@email.com')

//   await CustomerService.add(martin)
//   await CustomerService.add(sam)
//   await CustomerService.add(sarah)

//   sarah.inquireSkill(animation)
//   sam.inquireSkill(typography)
//   sam.inquireSkill(animation)

//   martin.requestDesigner(webDesign, sallySweet)
//   martin.requestDesigner(animation, sallySweet)
//   sam.requestDesigner(typography, rosaJones)
//   sam.requestDesigner(uiDesign, rosaJones)
//   sarah.requestDesigner(branding, farrahLee)

//   //////// test CustomerService
//   const customers = await CustomerService.findAll()

//   // console.log(customers)

//   console.log('it should say Martin..', Chalk.red(customers[0].name))

//   await CustomerService.del(1)

//   const testDeletedCust = await CustomerService.findAll()

//   console.log('it should say Sam..', Chalk.red(testDeletedCust[0].name))

// }

// main()

const express = require('express')
// const DesignerService = require('./services/designer-service')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello')  

})

app.listen(3000, () => {
  console.log('Server listening')
})



