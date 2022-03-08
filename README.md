# Hardhat Chainlink Keepers Demo Project 

Demonstration of Chainlink Keepers on Kovan testnet. Owner has ability to toggle counter on/off.

## .env:
```shell
KOVAN_URL= <node provider API key>
KOVAN_KEY= <private key>
ETHERSCAN_KEY= <Etherscan API key>
POLYGONSCAN_KEY <Polygonscan API key>
CONTRACT_ADDRESS= <deployed address>
```
## Deploy new contract:
```shell
npx hardhat run scripts/deploy.js --network kovan
```
## Kovan ETH/LINK faucet:
```shell
https://faucets.chain.link/kovan
```
## Register Upkeep:
```shell
https://docs.chain.link/docs/chainlink-keepers/register-upkeep/#how-funding-works
```
## Verify contract:
```shell
npx hardhat verify --network kovan <contract_address> <constructor args> 
```
## Event listener script:
```shell
npx hardhat run scripts/listener.js --network kovan   
```

## Events emitted on automated counter increments
<img width="1355" alt="image" src="https://user-images.githubusercontent.com/34758484/156899157-eac4ee01-1392-43d3-aab6-0aed3f7d18e3.png">
