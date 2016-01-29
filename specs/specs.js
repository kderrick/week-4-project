describe('Pizza', function () {
  it("Creates a new pizza with the given properties", function () {
    var testPizza = new Pizza("Large", "[cheese]");
    expect(testPizza.pizzaSize).to.be.equal("Large");
    expect(testPizza.pizzaToppings).to.be.eql("[cheese]");
  });
});
