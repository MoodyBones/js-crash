const Chalk = require('chalk')

module.exports = class Designer {
  constructor(desName, desEmail) {
    this.desName = desName
    this.desEmail = desEmail
    this.services = []
    this.requests = []
  }

  addService(service) {
    // this.services.push(service) // replace with below, bug fix database.js save function
    this.service = service.item
    service.designers.push(this)
    console.log(
      `${Chalk.blue(this.desName)} has added ${Chalk.green(
        service.item
      )} as an available service`
    )
  }
}
