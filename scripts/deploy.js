const hre = require("hardhat"); // Correct way to import hardhat runtime

async function main() {
  const Dbank = await hre.ethers.getContractFactory("Dbank");
  const dbank = await Dbank.deploy();
  await dbank.deployed(); // This function is valid if the deployment succeeds.
  console.log("Dbank deployed to:", dbank.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

/*
const Contract =await her.ehter.getContractFactory("Dbank");
const dbank= await Dbank.deploy();
await dbank.deployed();

 */
