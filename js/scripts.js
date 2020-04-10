// Business Logic -----

function Pizza(pizzaTopping, pizzaSize) {
  this.pizzaTopping = pizzaTopping;
  this.pizzaSize = pizzaSize;
}

Pizza.prototype.pizzaPrice = function() {
  this.price = 10;
  if (this.pizzaTopping === "premium"){
    this.price += 1.50;
  } else if (this.pizzaTopping === "standard") {
    this.price += .5;
  }
  if (this.pizzaSize === "small") {
    return this.price 
  } else if (this.pizzaSize === "medium") {
    this.price += 2;
  } else if (this.pizzaSize === "large") {
    this.price += 4;
  }
  return this.price
  
}
var pizza = new Pizza ("standard", "large")
var price = pizza.pizzaPrice();
console.log ("pizza", pizza);
console.log ("price", price);

// User Interface ------
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var pizzaSize = $("input:radio[name=size]:checked").val();
    var pizzaTopping = $("input[name='toppings']:checked").val();
    
    var pizza = new Pizza(pizzaTopping, pizzaSize);
    pizza.pizzaPrice();

    $("#priceOutput").html(pizza.price);
    })
  })