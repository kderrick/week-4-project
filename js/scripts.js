function Pizza(pizzaSize,pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
}

Pizza.prototype.sizeCost = function () {
  var pizzaPrice = 10;
  if(this.pizzaSize === "Large" ) {
     return pizzaPrice += 2;
  } else {
    return pizzaPrice += 0;
  }
}
