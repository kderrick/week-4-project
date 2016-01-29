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

Pizza.prototype.toppingsCost = function (pizzaToppings) {
  var pizzaPrice = 10;
  if (pizzaToppings.indexOf("Cheese") > 0 ) {
    pizzaPrice += 1;
  }
  if (pizzaToppings.indexOf("Onions") > 0) {
    pizzaPrice += 1;
  }
  if (pizzaToppings.indexOf("Pepperoni") > 0) {
    pizzaPrice += 1;
  }
  if (pizzaToppings.indexOf("Sausage") > 0) {
    pizzaPrice += 1;
  }
  if (pizzaToppings.indexOf("Olives") > 0) {
    pizzaPrice += 1;
  }
  return pizzaPrice;
}

Pizza.prototype.totalPizzaCost = function (testPizza) {
  return "The cost of your pizza will be" + " " + (this.sizeCost() + this.toppingsCost(this.pizzaToppings)) + " dollars.";
}
