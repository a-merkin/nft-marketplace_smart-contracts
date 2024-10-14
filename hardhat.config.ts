import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();

const { PRIVATE_KEY, ALCHEMY_API_KEY } = process.env;

console.log(PRIVATE_KEY, ALCHEMY_API_KEY)

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      // accounts: [PRIVATE_KEY as string],
    },
  },
  etherscan: {
    apiKey: "CDJYYWKCESESJ1EYSSPY8U9RFJ686YUHHR"
  }
};

export default config;
