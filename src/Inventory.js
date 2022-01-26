const Item = require('./item.js')

class Inventory {
  constructor () {
    this.inventory = []
  }

  addItem (id, type, brand, price) {
    const item = new Item(id, type, brand, price)
    this.inventory.push(item)
    return item
  }

  lookUpInventory (id) {
    for (let i = 0; i < this.inventory.length; i++) {
      if (this.inventory[i].id === id) {
        const item = this.inventory[i]
        return item
      }
    }
  }

  lookUpInventoryPrices () {
    const prices = []
    for (let i = 0; i < this.inventory.length; i++) {
      prices.push(this.inventory[i].price)
    }
    return prices
  }
}

module.exports = Inventory
