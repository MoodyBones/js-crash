const BaseService = require('./base-service')
const DesignerModel = require('../models/designer')

class DesignerService extends BaseService {
  model = DesignerModel

  async addSkill(designer, skill) {
    designer.skills.push(skill)
    skill.designers.push(designer)
    await designer.save()
    await skill.save()
  }
}

module.exports = new DesignerService()
