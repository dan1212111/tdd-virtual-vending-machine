const Coins = require("../src/coins.js");

describe("Coins", () => {
  let coins;

  beforeEach(() => {
    coins = new Coins();
  });

  it("adding change to vendingMachine", () => {
    // set up
    const expected = 92;

    coins.addTenP(50);

    coins.addTwentyP(60);

    coins.addFiftyP(30);

    coins.addOnePound(30);

    coins.addTwoPound(15);

    //execute
    const result = coins.coinCount();

    //verify
    expect(result).toEqual(expected);
  });
});
