const Chalk = require('chalk')

module.exports = class Skill {
  constructor(name, designers = []) {
    this.name = name
    this.designers = designers
  }

  // not sure about this..
  printDesignersBySkill() {
    const printName = person => console.log(Chalk.blue(person))
    console.log(`The following designers have experience in ${this.name}:`)
    this.designers.forEach(printName)
  }

  static create({ name, designers }) {
    const skill = new Skill(name, designers)

    skill.designers = designers.map(Designers.create)

    return skill
  }
}
