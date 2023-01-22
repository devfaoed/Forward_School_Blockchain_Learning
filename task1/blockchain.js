function Blockchain(){
    this.chain = [],
    this.newTransaction = []
}

Blockchain.prototype.createNewBlock = function(signature, from, token, to, amount){
    const newBlock = {
        index: this.chain.length + 1,
        time: Date.now(),
        transaction: this.newTransaction,
        signature: signature,
        from: from,
        token: token,
        to: to,
        amount: amount
    }

    this.newTransaction = [],
    this.chain.push(newBlock)

    return newBlock
}


module.exports = Blockchain