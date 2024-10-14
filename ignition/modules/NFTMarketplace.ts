const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const NFTMarketplaceModule = buildModule("NFTMarketplaceModule", (m) => {
  const token = m.contract("NFTMarketplace");

  return { token };
});

module.exports = NFTMarketplaceModule;