const VendingMachine = require("../src/VendingMachine.js");
const MachineOperations = require("../src/MachineOperations.js");
const Inventory = require("../src/Inventory.js");

  it("Confirm the order", () => {
    // set up
    const expected = `Order confirmed, please insert £4.90`

    //execute
    VendingMachine.orderItem(150);
    VendingMachine.orderItem(465);
    VendingMachine.orderItem(367);
    VendingMachine.totalCost();
    machineOperations.totalCost2();
    const result = machineOperations.orderConfirmation("yes")

    //verify
    expect(result).toEqual(expected);
  });

//   it("Confirm your order", () => {
//     // set up
//     const expectedOne = `Order Cancelled`
//     const expectedTwo = []

//     //execute
//     vendingMachine.orderItem(150);
//     vendingMachine.orderItem(465);
//     vendingMachine.orderItem(367);
//     vendingMachine.totalCost();
//     vendingMachine.totalCost2();
//     const resultOne = machineOperations.orderConfirmation("no")
//     const resultTwo = machineOperations.basketOrder()

//     //verify
//     expect(resultOne).toEqual(expectedOne);
//     expect(resultTwo).toEqual(expectedTwo);
//   });

//   it("Only accept coins if order is confirmed", () => {
//     // set up
//     const expectedOne = `Order confirmed, please insert £5.20`
//     const expectedTwo = true

//     //execute
//     vendingMachine.orderItem(150);
//     vendingMachine.orderItem(243);
//     vendingMachine.orderItem(367);
//     vendingMachine.totalCost();
//     vendingMachine.totalCost2();
//     const resultOne = machineOperations.orderConfirmation("yes")
//     const resultTwo = machineOperations.coinSlot()

//     //verify
//     expect(resultOne).toEqual(expectedOne);
//     expect(resultTwo).toEqual(expectedTwo);
    
//   });

//   it("Only accept coins if order is confirmed", () => {
//     // set up
//     const expected = false 

//     //execute
//     vendingMachine.orderItem(150);
//     vendingMachine.orderItem(243);
//     vendingMachine.orderItem(367);
//     vendingMachine.totalCost();
//     vendingMachine.totalCost2();
//     machineOperations.orderConfirmation("no")
//     const resultTwo = machineOperations.coinSlot()

//     //verify
//     expect(resultTwo).toEqual(expected);
//   });

