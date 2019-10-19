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

////////
class Restaurant {
  constructor(restName) {
    this.restName = restName
    this.menu = []
  }

  addFoodItemToRest(food) {
    this.menu.push(food)
    console.log(`${this.restName} has added ${food.itemName} to their Menu`)
  }
  // receiveOrderFromCustomer()

  // foodReadyForDriver()
}

const purplePizza = new Restaurant('Purple Pizza')
// const trippyTaco = new Restaurant('Trippy Taco')
// const bigBurger = new Restaurant('Big Burger')

//////////
class Food {
  constructor(itemName) {
    this.itemName = itemName
  }
}

const pizzaNapoletana = new Food('Pizza Napoletana')
const pizzaFunghi = new Food('Pizza Funghi')
const pizzaCapricciosa = new Food('Pizza Capricciosa')

////////////
class Customer {
  constructor(name, address) {
    this.name = name
    this.address = address
    this.order = []

  }

  orderFood(food) {
    this.order.push(food)
    console.log(
      `Hi I'm ${this.name} and I would like to order the ${food.itemName}`
    )
  }

  // requestMenu(restName) {
  //   console.log(`At ${restName.name}, we have the following available, `)
  //   this.menu.forEach(printMenu(restName))
  // }

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

// printMenu = restaurant => console.log(restaurant.foodsList)

// martin.requestMenu(purplePizza)

purplePizza.addFoodItemToRest(pizzaNapoletana)
purplePizza.addFoodItemToRest(pizzaFunghi)
purplePizza.addFoodItemToRest(pizzaCapricciosa)

martin.orderFood(pizzaNapoletana)