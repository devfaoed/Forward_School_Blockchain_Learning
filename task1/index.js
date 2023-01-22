const Blockchain = require("./blockchain.js");

const Transfer = new Blockchain,

firstTransfer = Transfer.createNewBlock("F9CpWoyeBJfoRB8f2pBe2ZNPbPsEE76mWZWme3StsvHK", "9nSfm7Xpt41VjsaKWQRtd5f9XRTh2SLLKNWtmb1aNtnz", "BTC", "4vbsMN75mMGfLZR2bWkT23N82BLxf5PWa31QmAkveYY", 1)
console.log(firstTransfer)
secondTransfer = Transfer.createNewBlock("7qbRF6YsyGuLUVs6Y1q64bdVrfe4ZcUUz1JRdoVNUJnm", "9nSfm7Xpt41VjsaKWQRtd5f9XRTh2SLLKNWtmb1aNtnz", "BTC", "5iM9ARpBtxaavbZRQJvcDempfsDtWSpqo2vtQuKmZTYX", 5)
console.log(secondTransfer)
thirdTransfer = Transfer.createNewBlock("BKzdrZ6yPtKu8Qui1Jy7W5V6PjL27WYXBL4zFka6rVb8", "9nSfm7Xpt41VjsaKWQRtd5f9XRTh2SLLKNWtmb1aNtnz", "BTC", "MdtJzZLsRK53ZuCkXeVXR61ot36aEiY4hjdNY1oTyT8", 10)
console.log(thirdTransfer)
forthTransfer = Transfer.createNewBlock("DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263", "9nSfm7Xpt41VjsaKWQRtd5f9XRTh2SLLKNWtmb1aNtnz", "BTC", "2PgsdxQ2JRrEwkN15SKzMdY3LiLTDZQS8d9jGVFL6QxW", 3)
console.log(forthTransfer)
fifthTransfer = Transfer.createNewBlock("ErAw2Wv45m8d71zv6avKxG9hXBDwUn8AN886xJ8vdacf", "9nSfm7Xpt41VjsaKWQRtd5f9XRTh2SLLKNWtmb1aNtnz", "BTC", "BKzdrZ6yPtKu8Qui1Jy7W5V6PjL27WYXBL4zFka6rVb8", 7)
console.log(fifthTransfer)
