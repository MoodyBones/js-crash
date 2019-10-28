// Untitled Designer Database
//

// Classes completed
// Designer
// Customer
// Services

// Classes to do..
// Location
// Skills

// Interactions completed
// A Designer can add a Service
// A customer can connect Designer about there Services
// A customer can request a list of Designers by there Services

// Interactions to do..
// A customer can request a list of designers with a specific location
// skills match with services?
// A customer can request a quote from the Designer
// the Driver picks up the Skill’s from the designer and delivers it to the Customer

////////
class Designer {
  constructor(desName, desEmail) {
    this.desName = desName
    this.desEmail = desEmail
    // this.location = desLocation
    this.services = []
    this.requests = []
  }

  addService(service) {
    this.services.push(service)
    service.designers.push(this)
    console.log(
      `${this.desName} has added ${service.item} as an available service`
    )
  }
}

const sallySweet = new Designer('Sally Sweet', 'sallys@gmail.com')
const farrahLee = new Designer('Farrah Lee', 'farrahl@gmail.com')
const rosaJones = new Designer('Rosa Jones', 'rosaj@gmail.com')

//////////
class Service {
  constructor(item) {
    this.item = item
    this.designers = []
  }

  printDesignersByService() {
    this.designers.forEach(printName)
  }
}

const webDesign = new Service('Web Design')
const typography = new Service('Typography')
const branding = new Service('Branding')
const printDesign = new Service('Print Design')
const UIDesign = new Service('UI Design')
const UXDesign = new Service('UX Design')
const animation = new Service('Animation')

////////////
class Customer {
  constructor(name, email) {
    this.name = name
    this.email = email
    this.request = []
  }

  requestService(service, designer) {
    this.request.push(service)
    designer.requests.push(this)
    console.log(
      `Hey ${designer.desName}, I'm seeking a designer with experience in ${service.item}, are you available to help? Kind regards, ${this.name}`
    )
  }
}

const martin = new Customer('Martin', 'martin@email.com')
const sam = new Customer('Sam', 'sam@email.com')
const sarah = new Customer('Sarah', 'sarah@email.com')

// class Location {
//   constructor(city) {
//     this.city = city
//     this.cities = []
//   }
// }



/////////// Global Functions
printName = person => console.log(person.desName)





/////////// Interactions
sallySweet.addService(webDesign)
sallySweet.addService(animation)
rosaJones.addService(typography)
rosaJones.addService(UIDesign)
rosaJones.addService(animation)
farrahLee.addService(printDesign)
farrahLee.addService(branding)

martin.requestService(webDesign, sallySweet)
martin.requestService(animation, sallySweet)
sam.requestService(typography, rosaJones)
sam.requestService(UIDesign, rosaJones)
sarah.requestService(branding, farrahLee)

webDesign.printDesignersByService()
