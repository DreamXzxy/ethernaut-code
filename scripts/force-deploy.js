const hre = require("hardhat");

async function main() {
  const ForceAttack = await hre.ethers.getContractFactory("ForceAttack");
  const forceAttack = await ForceAttack.deploy();

  await forceAttack.deployed();

  console.log("ForceAttack deployed to:", forceAttack.address);

  /**
   *  forceAttack balance must not 0
   */
  // const forceAttack = await ethers.getContractAt("ForceAttack", "0x39b8c4b66c3Ee5cfB5FE6Cfee7eFF9149eA384Ea");

  // await forceAttack.attack("0x9deb2993d7898F1a7B3dF5F5d2a6376fc281D4aa");
  // console.log("forceAttack completed.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
