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
    this.price += (this.pizzaPremium.length * 1);
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

function Contact(delivery, firstName, lastName, phoneNumber, address){
  this.delivery = delivery;
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.address = address;
}

Contact.prototype.addressForm = function() {
  if (this.delivery === "delivery"){
    $(".new-contact").show();
  }
}

Contact.prototype.fullname = function(){
  return this.firstName + " " + this.lastName;
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
    $("input[name='premium']:checked").each(function() {
      newPizza.pizzaPremium.push($(this).val());
    })

    $("input[name='standard']:checked").each(function() {
      newPizza.pizzaStandard.push($(this).val());
    });
    var pizzaPrice = newPizza.pizzaPrice()
    $("#priceOutput").text(pizzaPrice);

    $("input[name$='order']").click(function(){
      var radio_value = $(this).val();
      if(radio_value=='0') {
        $("#new-contact").hide("slow");
      } 
      else if(radio_value==='1') { 
      ("#new-contact").show("slow");
      }
  })
    $('[name="bn"]:checked').trigger('click');
})
})