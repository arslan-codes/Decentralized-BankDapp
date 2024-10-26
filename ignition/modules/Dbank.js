  const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

  module.exports = buildModule("Decentralized Bank", (m) => {
    const Dbank = m.contract("Dbank");

    return { Dbank };
  });
