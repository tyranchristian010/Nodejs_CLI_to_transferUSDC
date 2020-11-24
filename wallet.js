const ethers = require('ethers');
const mnemonic = 'empower symptom welcome cash grow bind stick boil food alley east glimpse';
const wallet = ethers.Wallet.fromMnemonic(mnemonic);

console.log(`Mnemonic ${wallet.mnemonic.phrase}`);   //we console.log the mnemonic so we can see it 
console.log(`Address ${wallet.address}`);            //we also want to see the wallet address then run the node create-wallet.js

module.exports = wallet;