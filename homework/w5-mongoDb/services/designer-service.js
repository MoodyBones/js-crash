const BaseService = require('./base-service')
const DesignerModel = require('../models/designer')

class DesignerService extends BaseService {
  model = DesignerModel
}

module.exports = new DesignerService()
