const BaseService = require('./base-service')
const DesignerModel = require('../models/designer')

class DesignerService extends BaseService {
  model = DesignerModel

  async getSkills(designer, skill) {
    designer.skills.push(skill)
    skill.designers.push(designer)
    await designer.save()
    await skill.save()
  }

  async getLocations(designer, location) {
    designer.location.push(location)
    location.designers.push(designer)
    await designer.save()
    await location.save()
  }
}

module.exports = new DesignerService()
