const SELECT_ITEM = 'Select Item'
const ITEM_NOT_FOUND = 'ITEM NOT FOUND'
const OUT_OF_ORDER = 'OUT OF ORDER'
const YES = 'yes'
const NO = 'no'
const ORDER_CANCELLED = 'Order Cancelled'
const THANKYOU = 'ThankYou'
const CANCEL = 'cancel'
const NO_CHANGE = 'NO MORE CHANGE'

class VendingMachine {
  constructor (inventory, coins) {
    this.status = SELECT_ITEM
    this.inventory = inventory
    this.coins = coins
    this.basket = []
    this.totalPrice = 0
    this.confirmationAnswer = NO
    this.coinSLot = NO
    this.amountDue = 0
    this.insertedMoney = 0
    this.releaseItems = NO
  }

  vendingMachineStatus () {
    return this.status
  }

  basketOrder () {
    return this.basket
  }

  orderItem (id) {
    if (this.status === SELECT_ITEM) {
      for (let i = 0; i < this.inventory.inventory.length; i++) {
        const inventory = this.inventory.inventory[i]
        if (inventory.id === id) {
          const item = inventory
          this.inventory.inventory.splice(i, 1)
          this.basket.push(item)
          return item
        }
      }
      return ITEM_NOT_FOUND
    }
    return OUT_OF_ORDER
  }

  totalCost () {
    let totalCost = 0
    for (let i = 0; i < this.basket.length; i++) {
      totalCost = totalCost + this.basket[i].price
    }
    this.totalPrice = totalCost
    return `Amount due £${totalCost.toFixed(2)}, please confirm your order`
  }

  orderConfirmation (answer) {
    if (answer === YES) {
      this.confirmationAnswer = YES
      return 'Order confirmed, please insert £' + this.totalPrice.toFixed(2)
    }
    this.basket.splice(0, this.basket.length)
    return ORDER_CANCELLED
  }

  coinSlot () {
    if (this.confirmationAnswer === YES) {
      this.coinSLot = YES
      return true
    }
    return false
  }

  moneyCounter (insertedMoney) {
    this.insertedMoney = insertedMoney + this.insertedMoney
    this.amountDue = this.totalPrice - this.insertedMoney
    if (this.amountDue > 0) {
      return `Amount due £${this.amountDue.toFixed(2)}`
    }
    if (this.amountDue === 0) {
      this.coins.coinCounter = this.coins.coinCounter + this.insertedMoney
      this.releaseItems = YES
      return THANKYOU
    }
    if (this.amountDue < 0) {
      this.coins.coinCounter =
        this.coins.coinCounter + this.insertedMoney + this.amountDue
      this.releaseItems = YES
      return `ThankYou, Please Wait For Your £${Math.abs(
        this.amountDue
      ).toFixed(2)} Change`
    }
  }

  cancelOrder (orderStatus) {
    if (orderStatus === CANCEL) {
      return `Ordered Cancelled, Collect Your £${this.insertedMoney.toFixed(
        2
      )} Change`
    }
  }

  coinCounterChecker () {
    if (this.coins.coinCounter > 10) {
      return (this.coins.coinCounterStatus = false)
    }
    this.status = NO_CHANGE
    return (this.coins.coinCounterStatus = true)
  }
}

module.exports = VendingMachine
