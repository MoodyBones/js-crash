const Chalk = require('chalk')

module.exports = class Skill {
  constructor(name, designers = [], id) {
    this.name = name
    this.designers = designers
    this.id = id
  }

  printDesignersBySkill() {
    console.log(`The following designers have experience in ${Chalk.green(this.name)}:`)
    return this.designers.forEach(designer => {
      console.log(Chalk.blue(designer.name))
    })
  }

  static create({ name, designers, id }) {
    return new Skill(name, designers, id)
  }
}
