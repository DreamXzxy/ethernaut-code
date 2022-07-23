const { ethers } = require("hardhat");
const rlp = require('rlp');
const keccak = require('keccak');

async function calculateContractAddress() {
  const [owner] = await ethers.getSigners();
  let nonce = await hre.web3.eth.getTransactionCount(owner.address);
  const nonceAddOne = nonce+1
  let nonceHex = hre.web3.utils.toHex(nonceAddOne); //The nonce must be a hex literal!  
  const input_arr = [owner.address, nonceHex];
  const rlp_encoded = rlp.encode(input_arr);
  
  const contract_address_long = keccak('keccak256').update(rlp_encoded).digest('hex');
  
  const contract_address = contract_address_long.substring(24); //Trim the first 24 characters.
  return contract_address;
}
exports.calculateContractAddress = calculateContractAddress;
