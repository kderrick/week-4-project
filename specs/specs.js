describe('Pizza', function () {
  it("Creates a new pizza with the given properties", function () {
    var testPizza = new Pizza("Large", "[cheese]");
    expect(testPizza.pizzaSize).to.be.equal("Large");
    expect(testPizza.pizzaToppings).to.be.eql("[cheese]");
  });

  it("adds the sizeCost method to all Pizzas", function() {
    var testPizza = new Pizza("Large");
    expect(testPizza.sizeCost("Large")).to.be.equal(12);
  });
});
