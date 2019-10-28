const Chalk = require('chalk')

module.exports = class Customer {
  constructor(name, email) {
    this.name = name
    this.email = email
    this.request = []
  }

  requestService(service, designer) {
    this.request.push([service, designer])
    designer.requests.push([[this.name, this.email], service])
    console.log(
      `Hey ${
        designer.name
      }, I'm seeking a designer with experience in ${Chalk.green(
        service.item
      )}, are you available to help? Kind regards, ${this.name}`
    )
  }
}
