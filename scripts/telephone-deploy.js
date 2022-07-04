const hre = require("hardhat");

async function main() {
  const TelephoneAttack = await hre.ethers.getContractFactory("TelephoneAttack");
  const telephoneAttack = await TelephoneAttack.deploy();

  await telephoneAttack.deployed();

  console.log("TelephoneAttack deployed to:", telephoneAttack.address);

  await telephoneAttack.attack();
  console.log("telephoneAttack completed.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
