const Inventory = require("./Inventory");
const MachineOperations = require("./MachineOperations");

class VendingMachine {
  constructor() {
    this.basket = [];
  }

  lookupInventory() {
    return Inventory;
  }

  lookupInventoryPrices() {
    const prices = [];
    for (let i = 0; i < Inventory.length; i++) {
      prices.push(Inventory[i].price);
    }
    return prices;
  }

  vendingMachineStatus() {
    return "Select Item";
  }

  orderItem(id) {
    for (let i = 0; i < Inventory.length; i++) {
      const inventoryItems = Inventory[i];
      if (inventoryItems.id === id) {
        this.basket.push(inventoryItems.id);
        return inventoryItems.id;
      }
    }
    return "ITEM NOT FOUND";
  }

  basketOrder() {
    return this.basket;
  }

  totalCost() {
    let prices = 0;
    for (let i = 0; i < Inventory.length; i++) {
      const inventoryItems = Inventory[i];
      for (let i = 0; i < this.basket.length; i++) {
        if (inventoryItems.id === this.basket[i]) {
          prices = prices + inventoryItems.price;
        }
      }
    }
    return "Amount due £" + prices.toFixed(2) + ", please confirm your order";
  }


  

//   moneyCounter(insertedMoney) {
//       const moneyLeft = 0
//       const amountDue = this.totalCost2()
//       if(insertedMoney < amountDue) {
//           const moneyLeft = amountDue - insertedMoney
//           if (moneyLeft < amountDue) {
//               const moneyLeft = moneyLeft - insertedMoney
//           }
//       }
//   }


}

module.exports = VendingMachine;
