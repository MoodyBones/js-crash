const Chalk = require('chalk')

module.exports = class Customer {
  constructor(name, email) {
    this.name = name
    this.email = email
    this.request = []
  }

  contactDesigner(service, designer) {
    this.request.push([service, designer])
    designer.requests.push([[this.name, this.email], service])
    console.log(
      `Hey ${
        designer.name
      }, I'm seeking a designer with experience in ${Chalk.green(
        service.name
      )}, are you available to help? Kind regards, ${this.name}`
    )
  }

  // printDesignersByService() {
  //   if (this.designers.length === 0) {
  //     console.log(
  //       `Sorry, we don't have any designers that are experienced in ${this.name}.`
  //     )
  //   } else {
  //     console.log(`The following designers have experience in ${this.name}:`)
  //     this.designers.forEach(printName)
  //   }
  // }
}
