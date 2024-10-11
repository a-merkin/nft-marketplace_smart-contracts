import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const { PRIVATE_KEY, ALCHEMY_API_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [PRIVATE_KEY as string],
    },
  },
  etherscan: {
    apiKey: "ВАШ_ETHERSCAN_API_KEY"
  }
};

export default config;
