const BaseService = require('./base-service')
const CustomerModel = require('../models/customer')

class CustomerService extends BaseService {
  constructor() {
    super(CustomerModel, `${__dirname}/../customer-database.json`)
  }
}

module.exports = new CustomerService()
