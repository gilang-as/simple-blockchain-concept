const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const {Blockchain, Transaction} = require("./blockchain");

const myKey = ec.keyFromPrivate("4d819036db221fc076fc8884e92b430c4550244710f91b661b67ca307bac91c6");
const myWalletAddress = myKey.getPublic("hex");

let coin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, "public key goes here", 10);
tx1.signTransaction(myKey);
coin.addTransaction(tx1);

console.log("\n Starting the miner...");
coin.minePendingTransactions(myWalletAddress)

console.log("Balance Miner : ", coin.getBalanceOfAddress(myWalletAddress));