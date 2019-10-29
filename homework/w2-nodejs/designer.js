const Chalk = require('chalk')

module.exports = class Designer {
  constructor(name, email) {
    this.name = name
    this.email = email
    this.services = []
    this.requests = []
    // this.designerRecord = this.listCurrentDesigners(name)
  }

  addService(service) {
    this.services.push(service)
    service.designers.push(this.name)
    console.log(
      `${Chalk.blue(this.name)} has added ${Chalk.green(
        service.name
      )} as an available service`
    )
  }

  // listCurrentDesigners(name) {
  //   const designers = []
  //   designers.push(name)
  //   console.log(designers)
  // }
}

