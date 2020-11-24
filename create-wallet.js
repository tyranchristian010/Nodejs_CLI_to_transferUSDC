const ethers = require('ethers');                   //import ethers instead of web3 this time
const wallet = ethers.Wallet.createRandom();         // create wallet with ethers instead of web3. it creates both the privatekey and the address.
console.log(`Mnemonic ${wallet.mnemonic.phrase}`);   //we console.log the mnemonic so we can see it 
console.log(`Address ${wallet.address}`);            //we also want to see the wallet address then run the node create-wallet.js