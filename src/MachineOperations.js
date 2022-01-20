class MachineOperations {

    constructor() {
        this.confirmationAnswer = "no";
        this.coinSLot = "no";
    }

    totalCost2() {
      let prices = 0;
      for (let i = 0; i < Inventory.length; i++) {
        const inventoryItems = Inventory[i];
        for (let i = 0; i < this.basket.length; i++) {
          if (inventoryItems.id === this.basket[i]) {
            prices = prices + inventoryItems.price;
          }
        }
      }
      return prices.toFixed(2);
    }

    orderConfirmation(answer) {
        if (answer === "yes") {
          this.confirmationAnswer = "yes";
          return `Order confirmed, please insert £` + this.totalCost2();
        }
        this.basket.splice(0, this.basket.length);
        return `Order Cancelled`;
      }
    
      coinSlot() {
        if (this.confirmationAnswer === "yes") {
          this.coinSLot = "yes";
          return true;
        }
        return false;
      }
}


module.exports = MachineOperations