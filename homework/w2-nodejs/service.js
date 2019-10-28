module.exports = class Service {
  constructor(item) {
    this.item = item
    this.designers = []
  }

  printDesignersByService() {
    console.log(`The following designers have experience in ${this.item}:`)
    this.designers.forEach(printName)
  }
}
