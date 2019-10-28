module.exports = class Customer {
  constructor(name, email) {
    this.name = name
    this.email = email
    this.request = []
  }

  requestService(service, designer) {
    this.request.push(service)
    designer.requests.push(this)
    console.log(
      `Hey ${designer.desName}, I'm seeking a designer with experience in ${service.item}, are you available to help? Kind regards, ${this.name}`
    )
  }
}
