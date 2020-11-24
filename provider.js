const ethers = require('ethers'); 
const provider = ethers.getDefaultProvider('ropsten', {
    infura:'https://ropsten.infura.io/v3/75c2e9362c744a10bea1c9daafad71ac'
});
module.exports = provider;

//this gives us a provider which is our link to the blockchain.