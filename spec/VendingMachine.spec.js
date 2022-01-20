const VendingMachine = require("../src/VendingMachine.js");
const Inventory = require("../src/Inventory.js");

describe("VendingMachine", () => {
  let vendingMachine;

  beforeEach(() => {
    vendingMachine = new VendingMachine();
  });

  it("Lookup inventory", () => {
    // set up
    const expected = Inventory;

    //execute
    const result = vendingMachine.lookupInventory();

    //verify
    expect(result).toEqual(expected);
  });

  it("Lookup prices of inventory", () => {
    // set up
    const prices = [];
    for (let i = 0; i < Inventory.length; i++) {
      prices.push(Inventory[i].price);
    }

    //execute
    const result = vendingMachine.lookupInventoryPrices();

    //verify
    expect(result).toEqual(prices);
  });

  it("VendingMachine Status", () => {
    // set up
    const status = "Select Item";

    //execute
    const result = vendingMachine.vendingMachineStatus();

    //verify
    expect(result).toEqual(status);
  });

  it("Order an Item using ID", () => {
    // set up
    const expected = [150, 367];

    //execute
    vendingMachine.orderItem(150);
    vendingMachine.orderItem(367);
    const result = vendingMachine.basketOrder();

    //verify
    expect(result).toEqual(expected);
  });

  it("Order an Item Not Found", () => {
    // set up
    const expectedOne = "ITEM NOT FOUND";

    //execute
    const resultOne = vendingMachine.orderItem(498);
    
    //verify
    expect(resultOne).toEqual(expectedOne);

  });

  it("Please pay", () => {
    // set up
    const expected = `Amount due £3.90, please confirm your order`

    //execute
    vendingMachine.orderItem(243);
    vendingMachine.orderItem(465);
    vendingMachine.orderItem(367);
    const result = vendingMachine.totalCost();

    //verify
    expect(result).toEqual(expected);
  });


  // it("Money counter/exact amount ", () => {
  //   // set up
  //   const expectedOne = `£2.20 left to pay`
  //   const expectedTwo = `£1.50 left to pay`
  //   const expectedThree = `£0.50 left to pay`
  //   const expectedFour = `Amount payed`

  //   //execute
  //   vendingMachine.orderItem(150);
  //   vendingMachine.orderItem(465);
  //   vendingMachine.totalCost();
  //   vendingMachine.totalCost2();
  //   vendingMachine.orderConfirmation("yes")
  //   vendingMachine.coinSlot()
  //   const resultOne = vendingMachine.moneyCounter(0.50)
  //   const resultTwo = vendingMachine.moneyCounter(1.00)
  //   const resultThree = vendingMachine.moneyCounter(1.00)
  //   const resultFour = vendingMachine.moneyCounter(0.20)

  //   //verify
  //   expect(resultOne).toEqual(expectedOne);
  //   expect(resultTwo).toEqual(expectedTwo);
  //   expect(resultThree).toEqual(expectedThree);
  //   expect(resultFour).toEqual(expectedFour);
    
  // });
});
