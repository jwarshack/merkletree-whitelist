
const hre = require("hardhat");

async function main() {
  
  const [_, minter1, minter2] = await hre.ethers.getSigners()
  console.log("minter1 address", minter1.address)
  const Merkle = await hre.ethers.getContractFactory("MerkleNFT");
  const merkle = await Merkle.deploy();

  await merkle.deployed();

  console.log("Merkle deployed to:", merkle.address);


  // Attempt to mint
  await merkle.connect(minter1).whitelistMint([
    '0x1fbe8e17437522d0e4001144d23463c4a96cb7e2a036ea69f41e3ef27e3ece3e'
  ])
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
