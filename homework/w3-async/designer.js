module.exports = class Designer {
  constructor(name, email, skills = [], requests = []) {
    this.name = name
    this.email = email
    this.skills = skills
    this.requests = requests
  }

  addSkill(skill) {
    // console.log(this.name, skill.name) //testing
    this.skills.push(skill.name)
    skill.designers.push(this.name)
  }

  static create({ name, email }) {
    return new Designer(name, email)
  }
}
