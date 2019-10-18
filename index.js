// Food Delivery Service

// Classes (2)
// Restaurant
// Driver
// Customer
// Food

// Interactions (3)
// a Restaurant has a lot of Food that the Customer can order
// TICK a Customer can order Food
// the Driver picks up the Food’s from the Restaurant and delivers it to the Customer

class Restaurant {
  constructor(name, item) {
    this.name = name
    this.foodsList = []
  }

  addFoodItem(item) {
    this.foodsList.push(item)
    item.menu.push(this)
  }
  // receiveOrderFromCustomer()

  // foodReadyForDriver()
}

const purplePizza = new Restaurant('Purple Pizza')
// const trippyTaco = new Restaurant('Trippy Taco')
// const bigBurger = new Restaurant('Big Burger')

class Customer {
  constructor(name, address) {
    this.name = name
    this.address = address
    this.menu = []
  }

  orderFood(food) {
    console.log(
      `Hi I'm ${this.name} and I would like to order the ${food.item}`
    )
  }

  requestMenu(restName) {
    console.log(`At ${restName.name}, we have the following available, `)
    // return this.menu.forEach(printMenu(restName))
  }

  // receiveFood()
}

const martin = new Customer('Martin', '5 FeedMe Ave')
const sam = new Customer('Sam', '3 Lazy St')
const sarah = new Customer('Sarah', '2 Fast Rd')

class Driver {
  constructor(name) {
    this.name = name
  }

  // pickUpOrder()

  // dropOffOrder()
}

const arne = new Driver('Arne')

class Food {
  constructor(item) {
    this.item = item
  }
}

printMenu = restaurant => console.log(restaurant.foodsList)

pizzaNapoletana = new Food('Pizza Napoletana')
pizzaFunghi = new Food('Pizza Funghi')
pizzaCapricciosa = new Food('Pizza Capricciosa')

martin.requestMenu(purplePizza)
martin.orderFood(pizzaNapoletana)

purplePizza.addFoodItem(pizzaNapoletana)
purplePizza.addFoodItem(pizzaFunghi)
purplePizza.addFoodItem(pizzaCapricciosa)
