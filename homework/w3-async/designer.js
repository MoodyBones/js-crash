const Chalk = require('chalk')

module.exports = class Designer {
  constructor(name, email) {
    this.name = name
    this.email = email
  }

  addSkill(skill) {
    skill.designers.push(this)
  }

  static create({ name, email }) {
    return new Designer(name, email)
  }
}
