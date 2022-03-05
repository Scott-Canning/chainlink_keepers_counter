const ethers = require("ethers");
const abi = require("../utils/ABI.json");
require('dotenv').config();

const url = process.env.KOVAN_URL;

async function main() {    
    const contractAddress = process.env.CONTRACT_ADDRESS;
    console.log('Listening to ' + contractAddress + '...')
    const provider = new ethers.providers.JsonRpcProvider(url);
    const contractInstance = new ethers.Contract(contractAddress, abi, provider);    

    contractInstance.on("IncrementedCounter", (_counter) =>  {
        console.log("IncrementedCounter - counter: ", _counter.toString());
    })
};

main();