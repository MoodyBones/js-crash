const BaseService = require('./base-service')
const DesignerModel = require('../models/designer')

class DesignerService extends BaseService {
  constructor() {
    super(DesignerModel, `${__dirname}/../designer-database.json`)
  }
}

module.exports = new DesignerService()
