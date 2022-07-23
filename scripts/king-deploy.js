const hre = require("hardhat");
const { calculateContractAddress } = require("../test/utils");

async function main() {
  const [owner] = await ethers.getSigners();
  const kingAddress = await calculateContractAddress();
  console.log(kingAddress, 'kingAddress');

  // const ForceAttack = await hre.ethers.getContractFactory("ForceAttack");
  // const forceAttack = await ForceAttack.deploy();
  // await forceAttack.deployed();
  // console.log("ForceAttack deployed to:", forceAttack.address);

  await owner.sendTransaction({
    to: kingAddress,
    value: ethers.utils.parseEther("0.15"), // Sends exactly 1.0 ether
  });

  // await forceAttack.attack(kingAddress);
  // console.log("forceAttack completed.");

  const KingAttack = await hre.ethers.getContractFactory("KingAttack");
  const kingAttack = await KingAttack.deploy();

  await kingAttack.deployed();
  console.log("KingAttack deployed to:", kingAttack.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
