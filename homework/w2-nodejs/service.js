const Chalk = require('chalk')

module.exports = class Service {
  constructor(name) {
    this.name = name
    this.designers = []
  }

  printDesignersByService() {
    if (this.designers.length === 0) {
      console.log(
        `Sorry, we don't have any designers that are experienced in ${this.name}.`
      )
    } else {
      console.log(`The following designers have experience in ${this.name}:`)
      this.designers.forEach(printName)
    }
  }
}

const printName = person => console.log(Chalk.blue(person))
