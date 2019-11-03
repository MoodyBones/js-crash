module.exports = class Designer {
  constructor(name, email, skills = []) {
    this.name = name
    this.email = email
    this.skills = skills
  }

  addSkill(skill) {
    // console.log(this.name, skill.name) //testing
    this.skills.push(skill.name)
    skill.designers.push(this.name)
  }

  static create({ name, email, skills }) {
    return new Designer(name, email, skills)
  }
}
