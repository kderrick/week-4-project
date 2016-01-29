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

Pizza.prototype.toppingsCost = function (pizzaToppings) {
  var pizzaPrice = 10;
  if (pizzaToppings === "[Cheese]" || pizzaToppings === "[Pepperoni]" || pizzaToppings === "[Onions]" || pizzaToppings === "[Olives]" || pizzaToppings === "[Sausage]") {
    pizzaPrice += 1;
  }
  return pizzaPrice;
}
