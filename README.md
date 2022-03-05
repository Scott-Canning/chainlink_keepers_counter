# Hardhat Chainlink Keepers Demo Project 

Demonstration of Chainlink Keepers on Kovan testnet. Added ability for owner to toggle counter on/off.

## Deploy new contract:
```shell
npx hardhat run scripts/deploy.js --network kovan   
```
## Event listener script:
```shell
npx hardhat run scripts/listener.js --network kovan   
```
## Verify contract:
```shell
npx hardhat verify --network kovan <contract_address> <constructor args> 
```
## .env:
```shell
KOVAN_URL=
KOVAN_KEY=
ETHERSCAN_KEY=
CONTRACT_ADDRESS=
```

## Events emitted on automated counter increments
<img width="1355" alt="image" src="https://user-images.githubusercontent.com/34758484/156899157-eac4ee01-1392-43d3-aab6-0aed3f7d18e3.png">
