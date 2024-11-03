const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { hasRestParameter } = require("typescript");

module.exports = buildModule("Decentralized Bank", (m) => {
  const Dbank = m.contract("Dbank");

  return { Dbank };
});
