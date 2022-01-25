const Inventory = require("../src/inventory.js")
const Item = require("../src/item.js")

describe("Inventory", () => {
  let inventory;

  beforeEach(() => {
    inventory = new Inventory();
  });

  it("add item to inventory", () => {
    // set up
    const expected = new Item (101, "food", "Cantebury", 1.50)

    //execute
    const result = inventory.addItem(101, "food", "Cantebury", 1.50)

    //verify
    expect(result).toEqual(expected);
  }); 

  it("lookUp inventory", () => {
    // set up
    const expected = new Item (103, "drink", "Coca-Cole", 1.00)

    //execute
    inventory.addItem(101, "food", "Cantebury", 1.50)
    inventory.addItem(103, "drink", "Coca-Cole", 1.00)
    inventory.addItem(101, "food", "Tyrells", 2.50)
    const result = inventory.lookUpInventory(103)

    //verify
    expect(result).toEqual(expected);
  });

  it("Lookup prices of inventory", () => {
    // set up
    const prices = [1.50, 1.00];

    //execute
    inventory.addItem(101, "food", "Cantebury", 1.50)
    inventory.addItem(103, "drink", "Coca-Cole", 1.00)
    const result = inventory.lookUpInventoryPrices();

    //verify
    expect(result).toEqual(prices);
  });
});