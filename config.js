//copy and paste this info from the eat the blocks github
//the address is the USDC address from ropsten so its a mock
//the abi is an array of strings of function signatures from the ERC20 standard AND ONE IS A FAUCET FOR MOCK USDC
const config = {
    address: '0x68ec573C119826db2eaEA1Efbfc2970cDaC869c4',
    abi:  [
      'function gimmeSome() external',
      'function balanceOf(address _owner) public view returns (uint256 balance)',
      'function transfer(address _to, uint256 _value) public returns (bool success)'
    ]
  };
  
  module.exports = config;
  