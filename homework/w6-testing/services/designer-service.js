/* eslint-disable class-methods-use-this */
const BaseService = require('./base-service')
const DesignerModel = require('../models/designer')

class DesignerService extends BaseService {
  model = DesignerModel

  async addSkills(designer, skill) {
    designer.skills.push(skill)
    skill.designers.push(designer)
    await designer.save()
    await skill.save()
  }

  async setLocations(designer, location) {
    designer.location.push(location)
    location.designers.push(designer)
    await designer.save()
    await location.save()
  }
}

module.exports = new DesignerService()
