const hre = require("hardhat");

async function main() {
  const LazyMintNFT = await hre.ethers.getContractFactory("LazyMintNFT");
  const nft = await LazyMintNFT.deploy();

  await nft.waitForDeployment();
  console.log("LazyMintNFT deployed to:", await nft.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
