const Chalk = require('chalk')

module.exports = class Designer {
  constructor(name, desEmail) {
    this.name = name
    this.desEmail = desEmail
    this.services = []
    this.requests = []
  }

  addService(service) {
    this.services.push(service)
    service.designers.push(this.name)
    console.log(
      `${Chalk.blue(this.name)} has added ${Chalk.green(
        service.item
      )} as an available service`
    )
  }
}
