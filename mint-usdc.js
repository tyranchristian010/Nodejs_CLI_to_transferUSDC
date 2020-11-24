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
    const tx = await usdc.gimmeSome({ gasPrice: 20e9 });         //we call the gimmeSome() function of the USDC smart contract (20e9 = 20 gwei)
    console.log(`Transaction hash: ${tx.hash}`);        // we look at the tx hash after we receive the mock USDC
    const receipt = await tx.wait();                    //we need to wait for the transaction to finish.
    console.log(`Gas used: ${receipt.gasUsed.toString()}`); //we use the receipt to check the gasUsed and convert it from a BN to a string
    console.log(`Transaction confirmed in block #: ${receipt.blockNumber}`);  
}
main();

//run node mint-usdc.js
//now you can transfer the mock USDC tokens you minted to a different address. create transfer.js file