class Coins {

    constructor() {
        this.coinCounter = 0
    }

    addTenP (tenP) {
        const totalCoin = tenP * 0.10 
        this.coinCounter = this.coinCounter + totalCoin
        return totalCoin
    }
    addTwentyP (twentyP) {
        const totalCoin =  twentyP * 0.20 
        this.coinCounter = this.coinCounter + totalCoin
        return totalCoin
    }
    addFiftyP (fiftyP) {
        const totalCoin =  fiftyP * 0.50 
        this.coinCounter = this.coinCounter + totalCoin
        return totalCoin
    }
    addOnePound (onePound) {
        const totalCoin =  onePound * 1.00 
        this.coinCounter = this.coinCounter + totalCoin
        return totalCoin
    }
    addTwoPound (twoPound) {
        const totalCoin =  twoPound * 2.00 
        this.coinCounter = this.coinCounter + totalCoin
        return totalCoin
    }
    coinCount () {
        return this.coinCounter
    }
}


module.exports = Coins