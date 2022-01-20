const VendingMachine = require("../src/VendingMachine.js");
const Inventory = require("../src/Inventory.js")


describe("VendingMachine", () => {
  let vendingMachine;

  beforeEach(() => {
    vendingMachine = new VendingMachine()
  })

  it("Lookup inventory", () => {
    // set up
    const expected = console.log(Inventory.vendingMachineInventory)

    //execute

    const result = vendingMachine.lookupInventory()

    //verify
    expect(result).toEqual(expected);


  })
})
