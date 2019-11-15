const BaseService = require("./base-service")
const SkillModel = require("../models/skill")

class SkillService extends BaseService {
  model = SkillModel
}

module.exports = new SkillService()
