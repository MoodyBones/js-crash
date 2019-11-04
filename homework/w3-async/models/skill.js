const Chalk = require('chalk')

module.exports = class Skill {
  constructor(name, designers = [], id) {
    this.name = name
    this.designers = designers
    this.id = id
  }

  // not sure about this..
  printDesignersBySkill() {
    const printName = person => console.log(Chalk.blue(person))
    console.log(`The following designers have experience in ${this.name}:`)
    this.designers.forEach(printName)
  }

  static create({ name, designers, id }) {
    return new Skill(name, designers, id)
  }
}
