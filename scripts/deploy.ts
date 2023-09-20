import { ethers } from "hardhat";

async function main() {
  
  const nftContract = await ethers.deployContract("Nft");
  const [owner] = await ethers.getSigners();
  await nftContract.waitForDeployment();

  console.log(
  `Nft contract deployed to ${nftContract.target}`
  );
const IPFS = "QmcZPHtoKQ7Ubv524veZinZNFSBiXmvGJK3So635beo2Jq";

 const MyMint = await nftContract.safeMint(owner.address,IPFS);
     console.log(MyMint)
 }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});