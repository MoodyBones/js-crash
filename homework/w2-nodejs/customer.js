const Chalk = require('chalk')

module.exports = class Customer {
  constructor(name, email) {
    this.name = name
    this.email = email
    this.request = []
  }

  requestService(service, designer) {
                                      // this.request.push(service) // replace with below, bug fix database.js save function
                                      this.service = service.item
                                      designer.requests.push(this)
                                      console.log(
                                        `Hey ${
                                          designer.desName
                                        }, I'm seeking a designer with experience in ${Chalk.green(
                                          service.item
                                        )}, are you available to help? Kind regards, ${
                                          this.name
                                        }`
                                      )
                                    }
}
