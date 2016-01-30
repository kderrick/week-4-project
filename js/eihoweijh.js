Pizza.prototype.toppingsCost = function () {
  var pizzaPrice = 10;
  var pizzaToppings = this.pizzaToppings
  for (var i = 0; i < pizzaToppings.length; ++i ) {
    if (this.pizzaToppings.indexOf(i) > 0) {
      pizzaPrice +=1 ;
    }
  }
  return pizzaPrice;
}



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
