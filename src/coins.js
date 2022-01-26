class Coins {
  constructor () {
    this.coinCounter = 0
    this.coinCounterStatus = false
  }

  addTenP (tenP) {
    const totalCoin = tenP * 0.1
    this.coinCounter = this.coinCounter + totalCoin
    return totalCoin
  }

  addTwentyP (twentyP) {
    const totalCoin = twentyP * 0.2
    this.coinCounter = this.coinCounter + totalCoin
    return totalCoin
  }

  addFiftyP (fiftyP) {
    const totalCoin = fiftyP * 0.5
    this.coinCounter = this.coinCounter + totalCoin
    return totalCoin
  }

  addOnePound (onePound) {
    const totalCoin = onePound * 1.0
    this.coinCounter = this.coinCounter + totalCoin
    return totalCoin
  }

  addTwoPound (twoPound) {
    const totalCoin = twoPound * 2.0
    this.coinCounter = this.coinCounter + totalCoin
    return totalCoin
  }

  coinCount () {
    return this.coinCounter
  }
}

module.exports = Coins
