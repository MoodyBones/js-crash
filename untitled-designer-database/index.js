// untitled designer database

// Classes (2)
// Designer
// Customer
// Services
// Skills
// Experience

// Interactions (3)
// A Designer has a lot of Services that the Customer can request
// A Customer can request Skill
// the Driver picks up the Skill’s from the designer and delivers it to the Customer

////////
class Designer {
  constructor(desName) {
    this.desName = desName
    this.menu = []
    this.requests = []
  }

  addSkillItemToRest(skill) {
    this.menu.push(skill)
    console.log(`${this.desName} has added ${skill.itemName} to their Menu`)
  }
}

const  = new Designer('Purple Pizza')
// const trippyTaco = new designer('Trippy Taco')
// const bigBurger = new designer('Big Burger')

//////////
class Skill {
  constructor(itemName) {
    this.itemName = itemName
  }
}

const pizzaNapoletana = new Skill('Pizza Napoletana')
const pizzaFunghi = new Skill('Pizza Funghi')
const pizzaCapricciosa = new Skill('Pizza Capricciosa')

////////////
class Customer {
  constructor(name, email) {
    this.name = name
    this.email = email
    this.request = []
  }

  requestService(skill, designer) {
    this.request.push(skill)
    designer.requests.push(this)
    console.log(
      `Hi I'm ${this.name} and I would like to request the ${skill.itemName} from ${designer.desName}`
    )
    notifyDriver(this.name, designer.desName)
  }

  // requestMenu(desName) {
  //   console.log(`At ${desName.name}, we have the following available, `)
  //   this.menu.forEach(printMenu(desName))
  // }

  // receiveSkill()
}

const martin = new Customer('Martin', 'martin@email.com')
const sam = new Customer('Sam', 'sam@email.com')
const sarah = new Customer('Sarah', 'sarah@email.com')

// printMenu = designer => console.log(designer.skillsList)

// martin.requestMenu(purplePizza)

purplePizza.addSkillItemToRest(pizzaNapoletana)
purplePizza.addSkillItemToRest(pizzaFunghi)
purplePizza.addSkillItemToRest(pizzaCapricciosa)

martin.requestService(pizzaNapoletana, purplePizza)

// arne.pickUpAndDeliver()
