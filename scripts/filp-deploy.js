const hre = require("hardhat");

async function main() {
  const FilpAttack = await hre.ethers.getContractFactory("FilpAttack");
  const filpAttack = await FilpAttack.deploy();

  await filpAttack.deployed();

  console.log("FilpAttack deployed to:", filpAttack.address);

  // attack
  // for (let i = 0; i <= 10; i++) {
  //   await filpAttack.attack({
  //     gasLimit: "300000",
  //   });
  // }
  // const FilpAttack = await ethers.getContractAt(
  //   "FilpAttack",
  //   "0x759F2Db5bAE954B95c40FA56E50AB58384Dd6CD3" //rinkeby
  // );
  // for (let i = 0; i < 10; i++) {
  //   await FilpAttack.attack({gasPrice: 5000000000}); // 5gwei
  // }
  // console.log("filpAttack completed.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
