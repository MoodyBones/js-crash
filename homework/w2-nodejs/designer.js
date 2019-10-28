module.exports = class Designer {
  constructor(desName, desEmail) {
    this.desName = desName
    this.desEmail = desEmail
    this.services = []
    this.requests = []
  }

  addService(service) {
    this.services.push(service)
    service.designers.push(this)
    console.log(
      `${this.desName} has added ${service.item} as an available service`
    )
  }
}
