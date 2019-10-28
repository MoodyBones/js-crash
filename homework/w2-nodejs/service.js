const Chalk = require('chalk')

module.exports = class Service {
  constructor(item) {
    this.item = item
    this.designers = []
  }

  printDesignersByService() {
    if (this.designers.length === 0) {
      console.log(
        `Sorry, we don't have any designers that are experienced in ${this.item}.`
      )
    } else {
      console.log(`The following designers have experience in ${this.item}:`)
      this.designers.forEach(printName)
    }
  }
}

const printName = person => console.log(Chalk.blue(person))
