module.exports = class Customer {
  constructor(name, email, inquiries = [], requests = [], id) {
    this.name = name
    this.email = email
    this.inquiries = inquiries
    this.requests = requests
    this.id = id
  }

  inquireSkill(skill) {
    // return a list of designers with that skill

    this.inquiries.push(skill.name, skill.designers)
    // console.log('inquiry', this.name, this.inquiries)
  }

  requestDesigner(skill, designer) {
    // return the designer and email

    this.requests.push(skill.name, [designer.name, designer.email])
    designer.requests.push(skill.name, [this.name, this.email])
    // console.log('customer', this.requests) // testing
    // console.log('designer', designer.requests) // testing
  }

  static create({ name, email, inquiries, requests, id }) {
    return new Customer(name, email, inquiries, requests, id)
  }
}
