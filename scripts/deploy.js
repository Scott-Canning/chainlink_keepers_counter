const hre = require("hardhat");
const { ethers } = require('ethers');
require('dotenv').config();

// constructor arg
const interval = 30;

async function deploy() {
  const url = process.env.KOVAN_URL;
  const provider = new ethers.providers.JsonRpcProvider(url);

  let privateKey = process.env.KOVAN_KEY;
  let wallet = new ethers.Wallet(privateKey, provider);

  let artifacts = await hre.artifacts.readArtifact("Counter");
  let factory = new ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);
  let contract = await factory.deploy({updateInterval: interval});

  console.log("Swap address:", contract.address);
  await contract.deployed();
}

deploy()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});
