const BaseService = require("./base-service")
const CustomerModel = require("../models/customer")

class CustomerService extends BaseService {
  model = CustomerModel
}

module.exports = new CustomerService()
