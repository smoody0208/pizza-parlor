// Business Logic -----

function Pizza(pizzaTopping, pizzaSize) {
  this.pizzaTopping = pizzaTopping;
  this.pizzaSize = pizzaSize;
}

Pizza.prototype.pizzaPrice = function() {
  this.price = 10;
  if (this.pizzaTopping === "premium"){
    this.price += 1.50;
  } else if )this.pizzaTopping === "standard"){
    this.price += .5
  }
}