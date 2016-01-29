describe('Pizza', function () {
  it("Creates a new pizza with the given properties", function () {
    var testPizza = new Pizza("Large", "[Cheese]");
    expect(testPizza.pizzaSize).to.be.equal("Large");
    expect(testPizza.pizzaToppings).to.be.eql("[Cheese]");
  });

  it("adds the sizeCost method to all Pizzas", function() {
    var testPizza = new Pizza("Large", "[Cheese]");
    expect(testPizza.sizeCost("Large")).to.be.equal(2);
  });

  it("adds the toppingsCost method to all Pizzas", function () {
    var testPizza = new Pizza("Large","[Cheese]");
    expect(testPizza.toppingsCost("[Cheese]")).to.be.equal(11);
    expect(testPizza.toppingsCost("[Cheese, Onions]")).to.be.equal(12);
    expect(testPizza.toppingsCost("[Cheese, Onions, Pepperoni]")).to.be.equal(13);
    expect(testPizza.toppingsCost("[Cheese, Onions, Pepperoni, Sausage]")).to.be.equal(14);
    expect(testPizza.toppingsCost("[Cheese, Onions, Pepperoni, Sausage, Olives]")).to.be.equal(15);
  });

  it("adds the totalPizzaCost method to all Pizzas", function () {
    var testPizza = new Pizza("Large" , "[Cheese]");
    expect(testPizza.totalPizzaCost()).to.be.equal("The cost of your pizza will be" + " " + 13 + " dollars.");
  });
});
