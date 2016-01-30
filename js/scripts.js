function Pizza(pizzaSize,pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
}

Pizza.prototype.sizeCost = function () {
  var pizzaSizePrice = 0;
  if(this.pizzaSize === "Large" ) {
     return pizzaSizePrice += 2;
  } else {
    return pizzaSizePrice += 0;
  }
}
// pizzaToppings
Pizza.prototype.toppingsCost = function () {
//   var pizzaPrice = 10;
//   var pizzaToppings = this.pizzaToppings
//   for (var i = 0; i < pizzaToppings.length; ++i ) {
//     if (this.pizzaToppings.indexOf(i) > 0) {
//       pizzaPrice +=1 ;
//     }
//   }
//   return pizzaPrice;
// };

var pizzaPrice = 10;
if (this.pizzaToppings.indexOf("Cheese") > 0 ) {
  pizzaPrice += 1;
}
if (this.pizzaToppings.indexOf("Onions") > 0) {
  pizzaPrice += 1;
}
if (this.pizzaToppings.indexOf("Pepperoni") > 0) {
  pizzaPrice += 1;
}
if (this.pizzaToppings.indexOf("Sausage") > 0) {
  pizzaPrice += 1;
}
if (this.pizzaToppings.indexOf("Olives") > 0) {
  pizzaPrice += 1;
}
return pizzaPrice;
}

Pizza.prototype.totalPizzaCost = function (testPizza) {
  return "The cost of your pizza will be" + " " + (this.sizeCost() + this.toppingsCost(this.pizzaToppings)) + " dollars.";
}

// END BUSINESS AND START USER


$(document).ready(function() {
  $('form#new-pizza').submit(function(event) {
    event.preventDefault();

  var inputtedSize = $('#pizzaSize input:radio:checked').val();
  var checkedToppings = $('input[name=toppings]:checked');
  var inputtedToppings = [];
  $(checkedToppings).each(function() {
    inputtedToppings.push(checkedToppings.val());
    });
    var newPizza = new Pizza(inputtedSize, inputtedToppings);


    $("#order").text(newPizza.totalPizzaCost());

  });

});



// $('input:checkbox[name=toppings]:checked').each(function(){
//   return ($(this).val());
// });
