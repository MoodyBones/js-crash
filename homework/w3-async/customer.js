const Chalk = require('chalk')

module.exports = class Customer {
  constructor(name, email) {
    this.name = name
    this.email = email
    this.inquiry = []
    this.request = []
  }

  requestDesigner(skill, designer) {
    this.request.push([skill, designer])
    designer.requests.push([[this.name, this.email], skill])
    // console.log(
    //   `Hey ${
    //     designer.name
    //   }, I'm seeking a designer with experience in ${Chalk.green(
    //     skill.name
    //   )}, are you available to help? Kind regards, ${this.name}`
    // )
  }

  inquireSkill(skill) {
    if (skill.name) {
      this.inquiry.push([skill, skill.designers])
      console.log(
        `The following designers have experience in ${Chalk.green(skill.name)}:`
      )
      console.log(skill.designers)
    }
  }
}
