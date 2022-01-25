const Coins = require("../src/coins.js");

describe("Coins", () => {
  let coins;

  beforeEach(() => {
    coins = new Coins();
  });

//   it("adding change to vendingMachine", () => {
//     // set up
//     const expected = 92;

//     coins.addTenP(50);

//     coins.addTwentyP(60);

//     coins.addFiftyP(30);

//     coins.addOnePound(30);

//     coins.addTwoPound(15);

//     //execute
//     const result = coins.coinCount();

//     //verify
//     expect(result).toEqual(expected);
//   });


//   it("coinCointer check - not enough change", () => {
//     // set up
//     const expected = 4;
//     const expectedTwo = false;

//     coins.addTenP(0);

//     coins.addTwentyP(0);

//     coins.addFiftyP(0);

//     coins.addOnePound(2);

//     coins.addTwoPound(1);

//     //execute
//     const result = coins.coinCount();
//     const resultTwo = coins.coinCounterChecker()

//     //verify
//     expect(result).toEqual(expected);
//     expect(resultTwo).toEqual(expectedTwo);
//   });
});
