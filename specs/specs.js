describe('Pizza', function () {
  it("Creates a new pizza with the given properties", function () {
    var testPizza = new Pizza("Large", "[Cheese]");
    expect(testPizza.pizzaSize).to.be.equal("Large");
    expect(testPizza.pizzaToppings).to.be.eql("[Cheese]");
  });

  it("adds the sizeCost method to all Pizzas", function() {
    var testPizza = new Pizza("Large");
    expect(testPizza.sizeCost("Large")).to.be.equal(12);
  });

  it("adds the toppingsCost method to all Pizzas", function () {
    var testPizza = new Pizza("[Cheese]");
    expect(testPizza.toppingsCost("[Cheese]")).to.be.equal(11);
  });
});
