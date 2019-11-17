const BaseService = require('./base-service')
const DesignerModel = require('../models/designer')

class DesignerService extends BaseService {
  model = DesignerModel

  async addSkill(skill) {
    this.skills.push(skill)
    skill.designers.push(this)
    await this.save()
    await skill.save()
  }
}

module.exports = new DesignerService()
