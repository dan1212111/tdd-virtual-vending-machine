const VendingMachine = require("../src/vendingMachine.js");
const Inventory = require("../src/inventory.js");
const Coins = require("../src/coins.js");
const Item = require("../src/item.js");

describe("VendingMachine", () => {
  let vendingMachine;
  let inventory;
  let coins;

  beforeEach(() => {
    inventory = new Inventory();
    coins = new Coins();
    vendingMachine = new VendingMachine(inventory, coins);
  });

  it("Vending machine status", () => {
    // set up
    const expected = "Select Item";

    //execute
    const result = vendingMachine.vendingMachineStatus();

    //verify
    expect(result).toEqual(expected);
  });

  it("Order an Item using ID", () => {
    // set up
    const expected = new Item(104, "food", "Oreo's", 2.5);

    //execute
    vendingMachine.inventory.addItem(101, "food", "Cantebury", 1.5);
    vendingMachine.inventory.addItem(104, "food", "Oreo's", 2.5);
    const result = vendingMachine.orderItem(104);

    //verify
    expect(result).toEqual(expected);
  });

  it("checking your basket", () => {
    // set up
    const expected = [new Item(104, "food", "Oreo's", 2.5)];

    //execute
    vendingMachine.inventory.addItem(101, "food", "Cantebury", 1.5);
    vendingMachine.inventory.addItem(104, "food", "Oreo's", 2.5);
    vendingMachine.orderItem(104);
    const result = vendingMachine.basketOrder();

    //verify
    expect(result).toEqual(expected);
  });

  it("Order an Item Not Found", () => {
    // set up
    const expectedOne = "ITEM NOT FOUND";

    //execute
    vendingMachine.inventory.addItem(104, "food", "Sweets", 1.5);
    vendingMachine.inventory.addItem(201, "drink", "Pepsi", 2.5);
    const resultOne = vendingMachine.orderItem(498);

    //verify
    expect(resultOne).toEqual(expectedOne);
  });

  it("Ready to pay", () => {
    // set up
    const expected = `Amount due £4.00, please confirm your order`;

    //execute
    vendingMachine.inventory.addItem(104, "food", "Sweets", 1.5);
    vendingMachine.inventory.addItem(201, "drink", "Pepsi", 2.5);
    vendingMachine.inventory.addItem(204, "drink", "Orangina", 1.5);
    vendingMachine.orderItem(201);
    vendingMachine.orderItem(204);
    const result = vendingMachine.totalCost();

    //verify
    expect(result).toEqual(expected);
  });

  it("Order confirmation", () => {
    // set up
    const expected = `Order confirmed, please insert £5.50`;

    //execute
    vendingMachine.inventory.addItem(104, "food", "Sweets", 1.5);
    vendingMachine.inventory.addItem(205, "drink", "Tango", 1.5);
    vendingMachine.inventory.addItem(204, "food", "Biscuits", 2.5);
    vendingMachine.orderItem(104);
    vendingMachine.orderItem(205);
    vendingMachine.orderItem(204);
    vendingMachine.totalCost();
    const result = vendingMachine.orderConfirmation("yes");

    //verify
    expect(result).toEqual(expected);
  });

  it("Order confirmation - cancelled", () => {
    // set up
    const expectedOne = `Order Cancelled`;
    const expectedTwo = [];

    //execute
    vendingMachine.inventory.addItem(104, "food", "Sweets", 1.5);
    vendingMachine.inventory.addItem(205, "drink", "Tango", 1.5);
    vendingMachine.inventory.addItem(204, "food", "Biscuits", 2.5);
    vendingMachine.orderItem(104);
    vendingMachine.orderItem(205);
    vendingMachine.orderItem(204);
    vendingMachine.totalCost();
    const resultOne = vendingMachine.orderConfirmation("no");
    const resultTwo = vendingMachine.basketOrder();

    //verify
    expect(resultOne).toEqual(expectedOne);
    expect(resultTwo).toEqual(expectedTwo);
  });

  it("Order confirmed - open coin slot", () => {
    // set up
    const expectedOne = `Order confirmed, please insert £5.50`;
    const expectedTwo = true;

    //execute
    vendingMachine.inventory.addItem(104, "food", "Sweets", 1.5);
    vendingMachine.inventory.addItem(205, "drink", "Tango", 1.5);
    vendingMachine.inventory.addItem(204, "food", "Biscuits", 2.5);
    vendingMachine.orderItem(104);
    vendingMachine.orderItem(205);
    vendingMachine.orderItem(204);
    vendingMachine.totalCost();
    const resultOne = vendingMachine.orderConfirmation("yes");
    const resultTwo = vendingMachine.coinSlot();

    //verify
    expect(resultOne).toEqual(expectedOne);
    expect(resultTwo).toEqual(expectedTwo);
  });

  it("Order cancelled - closed coin closed", () => {
    // set up
    const expected = false;

    //execute
    vendingMachine.inventory.addItem(104, "food", "Sweets", 1.5);
    vendingMachine.inventory.addItem(205, "drink", "Tango", 1.5);
    vendingMachine.inventory.addItem(204, "food", "Biscuits", 2.5);
    vendingMachine.orderItem(104);
    vendingMachine.orderItem(205);
    vendingMachine.orderItem(204);
    vendingMachine.totalCost();
    vendingMachine.orderConfirmation("no");
    const result = vendingMachine.coinSlot();

    //verify
    expect(result).toEqual(expected);
  });

  it("Money counter - exact amount ", () => {
    // set up
    const expectedOne = `Amount due £3.50`;
    const expectedTwo = `Amount due £2.50`;
    const expectedThree = `Amount due £0.50`;
    const expectedFour = `ThankYou`;

    //execute
    vendingMachine.inventory.addItem(104, "food", "Sweets", 1.5);
    vendingMachine.inventory.addItem(205, "drink", "Tango", 1.5);
    vendingMachine.inventory.addItem(204, "food", "Biscuits", 2.5);
    vendingMachine.orderItem(104);
    vendingMachine.orderItem(205);
    vendingMachine.orderItem(204);
    vendingMachine.totalCost();
    vendingMachine.orderConfirmation("yes");
    const resultOne = vendingMachine.moneyCounter(2.0);
    const resultTwo = vendingMachine.moneyCounter(1.0);
    const resultThree = vendingMachine.moneyCounter(2.0);
    const resultFour = vendingMachine.moneyCounter(0.5);

    //verify
    expect(resultOne).toEqual(expectedOne);
    expect(resultTwo).toEqual(expectedTwo);
    expect(resultThree).toEqual(expectedThree);
    expect(resultFour).toEqual(expectedFour);
  });

  it("Money counter - give back change", () => {
    // set up
    const expectedOne = `Amount due £1.00`;
    const expectedTwo = `ThankYou, Please Wait For Your £1.00 Change`;

    //execute
    vendingMachine.inventory.addItem(104, "food", "Sweets", 1.5);
    vendingMachine.inventory.addItem(205, "drink", "Tango", 1.5);
    vendingMachine.inventory.addItem(204, "food", "Biscuits", 2.5);
    vendingMachine.orderItem(104);
    vendingMachine.orderItem(205);
    vendingMachine.totalCost();
    vendingMachine.orderConfirmation("yes");
    const resultOne = vendingMachine.moneyCounter(2.0);
    const resultTwo = vendingMachine.moneyCounter(2.0);

    //verify
    expect(resultOne).toEqual(expectedOne);
    expect(resultTwo).toEqual(expectedTwo);
  });

  it("Cancelled order - collect change", () => {
    // set up
    const expectedOne = `Amount due £1.00`;
    const expectedTwo = `Ordered Cancelled, Collect Your £2.00 Change`;

    //execute
    vendingMachine.inventory.addItem(104, "food", "Sweets", 1.5);
    vendingMachine.inventory.addItem(205, "drink", "Tango", 1.5);
    vendingMachine.inventory.addItem(204, "food", "Biscuits", 2.5);
    vendingMachine.orderItem(104);
    vendingMachine.orderItem(205);
    vendingMachine.totalCost();
    vendingMachine.orderConfirmation("yes");
    const resultOne = vendingMachine.moneyCounter(2.0);
    const resultTwo = vendingMachine.cancelOrder("cancel");

    //verify
    expect(resultOne).toEqual(expectedOne);
    expect(resultTwo).toEqual(expectedTwo);
  });

  it("coinCointer check for enough change", () => {
    // set up
    const expected = 120;
    const expectedTwo = false;

    vendingMachine.coins.addTenP(20);

    vendingMachine.coins.addTwentyP(40);

    vendingMachine.coins.addFiftyP(20);

    vendingMachine.coins.addOnePound(50);

    vendingMachine.coins.addTwoPound(25);

    //execute
    const result = vendingMachine.coins.coinCount();
    const resultTwo = vendingMachine.coinCounterChecker();

    //verify
    expect(result).toEqual(expected);
    expect(resultTwo).toEqual(expectedTwo);
  });

  it("coinCointer check - not enough change", () => {
    // set up
    const expected = 4.5;
    const expectedTwo = true;

    vendingMachine.coins.addTenP(5);
    vendingMachine.coins.addTwoPound(2);

    //execute
    const result = vendingMachine.coins.coinCount();
    const resultTwo = vendingMachine.coinCounterChecker();

    //verify
    expect(result).toEqual(expected);
    expect(resultTwo).toEqual(expectedTwo);
  });

  it("Money counter - give back change - and adding money to the coinCounter", () => {
    // set up
    const expectedOne = `ThankYou, Please Wait For Your £1.00 Change`;
    const expectedTwo = 123;

    //execute
    vendingMachine.inventory.addItem(104, "food", "Sweets", 1.5);
    vendingMachine.inventory.addItem(205, "drink", "Tango", 1.5);
    vendingMachine.inventory.addItem(204, "food", "Biscuits", 2.5);
    vendingMachine.orderItem(104);
    vendingMachine.orderItem(205);
    vendingMachine.totalCost();
    vendingMachine.orderConfirmation("yes");
    vendingMachine.coins.addTenP(20);
    vendingMachine.coins.addTwentyP(40);
    vendingMachine.coins.addFiftyP(20);
    vendingMachine.coins.addOnePound(50);
    vendingMachine.coins.addTwoPound(25);
    vendingMachine.moneyCounter(2.0);
    const resultOne = vendingMachine.moneyCounter(2.0);
    const resultTwo = vendingMachine.coins.coinCount();

    //verify
    expect(resultOne).toEqual(expectedOne);
    expect(resultTwo).toEqual(expectedTwo);
  });

  it("Vending machine out of order - not enought change", () => {
    // set up
    const expected = 3;
    const expectedOne = true;
    const expectedTwo = "OUT OF ORDER";

    //execute
    vendingMachine.coins.addTenP(20);
    vendingMachine.coins.addOnePound(1);
    const result = vendingMachine.coins.coinCount();
    const resultOne = vendingMachine.coinCounterChecker();
    const resultTwo = vendingMachine.orderItem();

    //verify
    expect(result).toEqual(expected);
    expect(resultOne).toEqual(expectedOne);
    expect(resultTwo).toEqual(expectedTwo);
  });
});
