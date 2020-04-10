// Business Logic -----

function Pizza(pizzaSize) {
  this.pizzaPremium = [];
  this.pizzaStandard = [];
  this.pizzaSize = pizzaSize;
}

Pizza.prototype.pizzaPrice = function() {
  this.price = 10;
  if (this.pizzaPremium.length === 0){
    this.price;
  } else {
    this.price += (this.pizzaPremium.length * .25);
  }

  if (this.pizzaStandard.length === 0){
    this.price;
  } else {
    this.price += (this.pizzaStandard.length * .50);
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
    var newPizza = new Pizza(pizzaSize);

    
    
    
    
    
    
    /*$(".option").click(function(event) {
        var total = 0;
        $(".option:checked").each(function() {
            total += parseInt($(this).val());
        });
        
        if (total == 0) {
            $('#amount').val('');
        } else {                
            $('#amount').val(total);
        }
    })*/