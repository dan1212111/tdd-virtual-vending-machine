const Inventory = require("./inventory.js");
const Coins = require("./coins.js");

class VendingMachine {
  constructor(inventory, coins) {
    this.status = "Select Item";
    this.inventory = inventory;
    this.coins = coins;
    this.basket = [];
    this.totalPrice = 0;
    this.confirmationAnswer = "no";
    this.coinSLot = "no";
    this.amountDue = 0;
    this.insertedMoney = 0;
    this.releaseItems = "no";
  }

  vendingMachineStatus() {
    return this.status;
  }

  basketOrder() {
    return this.basket;
  }

  orderItem(id) {
    if (this.status === "Select Item") {
      for (let i = 0; i < this.inventory.inventory.length; i++) {
        const inventory = this.inventory.inventory[i];
        if (inventory.id === id) {
          const item = inventory;
          this.inventory.inventory.splice(i, 1);
          this.basket.push(item);
          return item;
        }
      }
      return "ITEM NOT FOUND";
    }
    return "OUT OF ORDER";
  }

  totalCost() {
    let totalCost = 0;
    for (let i = 0; i < this.basket.length; i++) {
      totalCost = totalCost + this.basket[i].price;
    }
    this.totalPrice = totalCost;
    return `Amount due £${totalCost.toFixed(2)}, please confirm your order`;
  }

  orderConfirmation(answer) {
    if (answer === "yes") {
      this.confirmationAnswer = "yes";
      return `Order confirmed, please insert £` + this.totalPrice.toFixed(2);
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

  moneyCounter(insertedMoney) {
    this.insertedMoney = insertedMoney + this.insertedMoney;
    this.amountDue = this.totalPrice - this.insertedMoney;
    if (this.amountDue > 0) {
      return `Amount due £${this.amountDue.toFixed(2)}`;
    }
    if (this.amountDue === 0) {
      this.coins.coinCounter = this.coins.coinCounter + this.insertedMoney;
      this.releaseItems = "yes";
      return `ThankYou`;
    }
    if (this.amountDue < 0) {
      this.coins.coinCounter =
        this.coins.coinCounter + this.insertedMoney + this.amountDue;
      this.releaseItems = "yes";
      return `ThankYou, Please Wait For Your £${Math.abs(
        this.amountDue
      ).toFixed(2)} Change`;
    }
  }

  cancelOrder(orderStatus) {
    if (orderStatus === "cancel") {
      return `Ordered Cancelled, Collect Your £${this.insertedMoney.toFixed(
        2
      )} Change`;
    }
  }

  coinCounterChecker() {
    if (this.coins.coinCounter > 10) {
      return (this.coins.coinCounterStatus = false);
    }
    this.status = "NO MORE CHANGE";
    return (this.coins.coinCounterStatus = true);
  }
}

module.exports = VendingMachine;
