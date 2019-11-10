module.exports = class Designer {
  constructor(name, email, website, city, country, skills = [], requests = [], id) {
    this.name = name
    this.email = email
    this.website = website
    this.city = city
    this.country = country
    this.skills = skills
    this.requests = requests
    this.id = id
  }

  addSkill(skill) {
    // console.log(this.name, skill.name) //testing
    this.skills.push(skill.name)
    // this.skills.push(skill)
    skill.designers.push(this.name)
    // skill.designers.push(this)
  }

  

  static create({ name, email, website, city, country, skills, requests, id }) {
    return new Designer(name, email, website, city, country, skills, requests, id)
  }
}
