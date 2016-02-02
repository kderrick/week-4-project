describe('Pizza', function () {
  it("Creates a new pizza with the given properties", function () {
    var testPizza = new Pizza("Large", ["Cheese"]);
    expect(testPizza.pizzaSize).to.equal("Large");
    expect(testPizza.pizzaToppings).to.eql(["Cheese"]);
  });

  it("adds the sizeCost method to all Pizzas", function() {
    var testPizza = new Pizza("Large", ["Cheese"]);
    expect(testPizza.sizeCost("Large")).to.equal(2);
  });

  it("adds the toppingsCost method to all Pizzas", function () {
    var testPizza = new Pizza("Large",["Cheese"]);
    expect(testPizza.toppingsCost(["Cheese"]).to.equal(11));
  });

  it("adds the totalPizzaCost method to all Pizzas", function () {
    var testPizza = new Pizza("Large" , ["Cheese"]);
    expect(testPizza.totalPizzaCost()).to.equal("The cost of your pizza will be" + " " + 13 + " dollars.");
  });
});
