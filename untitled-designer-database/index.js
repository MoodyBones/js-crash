// Untitled Designer Database
//

// Classes (2)
// Designer
// Customer
// Services

// Skills
// Location
// 
// Hourly rate


// Interactions (3)
// A Designer can add a Service
// A customer can connect Designer about there Services


// A customer can request a list of Designers by there Services and/or location
// A customer can request a list of designers with a specific location
// A customer can request a quote from the Designer
// the Driver picks up the Skill’s from the designer and delivers it to the Customer
// skills match with services?

////////
class Designer {
  constructor(desName) {
    this.desName = desName
    // this.desEmail = desEmail
    // this.location = desLocation
    this.services = []
    this.requests = []
  }

  addServiceToDesigner(service) {
    this.services.push(service)
    console.log(
      `${this.desName} has added ${service.item} as an available service`
    )
  }
}

const sallySweet = new Designer('Sally Sweet')
// const farrahLee = new designer('Farrah Lee')
// const rosaJones = new designer('Rosa Jones')

//////////
class Service {
  constructor(item) {
    this.item = item
  }
}

const webDesign = new Service('Web Design')
const typography = new Service('Typography')
const branding = new Service('Branding')

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

// printMenu = designer => console.log(designer.servicesList)

sallySweet.addServiceToDesigner(webDesign)
sallySweet.addServiceToDesigner(typography)
sallySweet.addServiceToDesigner(branding)

martin.requestService(webDesign, sallySweet)

