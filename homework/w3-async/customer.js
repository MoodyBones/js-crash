const Chalk = require('chalk')

module.exports = class Customer {
  constructor(name, email, inquiries = [], requests = []) {
    this.name = name
    this.email = email
    this.inquiries = inquiries
    this.requests = requests
  }

  inquireSkill(skill) {
    // return a list of designers with that skill
    // use sort to on list of returned designers
    // const sortDesigners = skill.designers.sort((a, b) => (a > b ? 1 : -1))
    this.inquiries.push(skill.name, [skill.designers])

    // console.log(skill.name, sortDesigners) // testing
    // console.log('inquiry', this.name, this.inquiries)
  }

  requestDesigner(skill, designer) {
    this.requests.push(skill.name, [designer.name, designer.email])
    designer.requests.push(skill.name, [this.name, this.email])
    // console.log('customer', this.requests)
    // console.log('designer', designer.requests)
  }

  static create({ name, email }) {
    return new Customer(name, email)
  }
}
