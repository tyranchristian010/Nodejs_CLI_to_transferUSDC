const ethers = require('ethers');                               
const wallet = require('./wallet');                     //import wallet
const provider=require('./provider');                  //import provider
const { address, abi } = require('./config');          //import abi and address from config.js


async function main() {                                      //create async function to read the logic of the smart contract.
const account= wallet.connect(provider);            //connects you to the ethereum BC once you pass it the provider. the account object gives you access to another object that represents your connection to the USDC smart contract.
const usdc = new ethers.Contract(                   //you need the USDC abi and address so create a new file called config.js AND IMPORT IT, then create your usdc contract instance but pass it the account also
        address,
        abi,
        account
    );
const usdcBalance = await usdc.balanceOf(account.address);    //get the balanceOf usdc by passing the account.adddress
console.log(`USDC balance: ${ethers.utils.formatUnits(usdcBalance,6)}`); //use ethers to format the units of usdcBalance and USDC only has 6 decimal places not 18 like traditional ERC20s
}
main();

//now run node get-usdc-balance.js and it should be 0 because we dont have any tokens yet.
//send ether to your address from ropsten faucet. you must mint some mock USDC tokens. 
//create a file mint-usdc.js