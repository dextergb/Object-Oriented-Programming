class Pizza {
  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }
  setSize(size) {
    this.size = size;
  }
  getSize() {
    return this.size;
  }
}

let pizza1 = new Pizza("large", "thin");
console.log(pizza1.toppings); // prints: ["cheese"]
pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
console.log(pizza1.toppings); // prints: ["cheese", "mushrooms", "peppers"]

let pizza2 = new Pizza();
console.log(pizza2.toppings); // ["cheese"]
pizza2.addTopping("more cheese");
console.log(pizza2.toppings); // ["cheese", "more cheese"];

// DRIVER CODE
const pizza = new Pizza();
pizza.setSize("m");
pizza.getSize(); // m
