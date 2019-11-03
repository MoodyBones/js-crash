const Chalk = require('chalk')

module.exports = class Customer {
  constructor(name, email) {
    this.name = name
    this.email = email
    this.inquiry = []
    this.request = []
  }

  requestDesigner(service, designer) {
    this.request.push([service, designer])
    designer.requests.push([[this.name, this.email], service])
    // console.log(
    //   `Hey ${
    //     designer.name
    //   }, I'm seeking a designer with experience in ${Chalk.green(
    //     service.name
    //   )}, are you available to help? Kind regards, ${this.name}`
    // )
  }

  inquireService(service) {
    if (service.name) {
      this.inquiry.push([service, service.designers])
      console.log(
        `The following designers have experience in ${Chalk.green(
          service.name
        )}:`
      )
      console.log(service.designers)
    }
  }
}
