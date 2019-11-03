const Chalk = require('chalk')

module.exports = class Designer {
  constructor(name, email) {
    this.name = name
    this.email = email
    this.skills = []
    this.requests = []
  }

  addSkill(skill) {
    this.skills.push(skill)
    skill.designers.push([this.name, this.email])
    // console.log(
    //   `${Chalk.blue(this.name)} has added ${Chalk.green(
    //     skill.name
    //   )} as an available skill`
    // )
  }
}
