const hre = require("hardhat");

async function main() {
  const TokenAttack = await hre.ethers.getContractFactory("TokenAttack");
  const tokenAttack = await TokenAttack.deploy();

  await tokenAttack.deployed();

  console.log("TokenAttack deployed to:", tokenAttack.address);

  await tokenAttack.attack();
  const balance = await tokenAttack.getBalance();
  console.log("tokenAttack completed, balance is : ", balance.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
