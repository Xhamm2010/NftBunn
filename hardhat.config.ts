import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
   
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/MQcJjfHveqk7jSk110vyaLYe6c7tTc4G',
      //@ts-ignore
      accounts:[process.env.PRIVATE_KEY]},
  },
  etherscan: {
    apiKey: {
      sepolia: 'QCMP9FHC7X6E2CXUPRV5XV6CVSIQI8NEVK'
    }
  }

};

export default config;