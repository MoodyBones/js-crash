const BaseService = require('./base-service')
const SkillModel = require('../models/skill')

class SkillService extends BaseService {
  constructor() {
    super(SkillModel, `${__dirname}/../skill-database.json`)
  }
}

module.exports = new SkillService