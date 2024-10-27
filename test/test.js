const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Dbank", function () {
  let Dbank, dbank, owner, addr1, addr2;

  beforeEach(async function () {
    Dbank = await ethers.getContractFactory("Dbank");
    dbank = await Dbank.deploy();
    await dbank.deployed();
    [owner, addr1, addr2] = await ethers.getSigners();
  });

  it("should deposit money", async function () {
    // addr1 deposits 1 ether
    await dbank.connect(addr1).DepositMoney("Test Deposit", {
      value: ethers.utils.parseEther("1"),
    });
    const balance = await dbank.balances(addr1.address);
    expect(balance).to.equal(ethers.utils.parseEther("1"));
  });

  it("should withdraw money", async function () {
    // Deposit money first
    await dbank.connect(addr1).DepositMoney("Test Deposit", {
      value: ethers.utils.parseEther("1"),
    });

    // Withdraw 0.5 ether
    await dbank.connect(addr1).withdraw(ethers.utils.parseEther("0.5"));
    const balance = await dbank.balances(addr1.address);
    expect(balance).to.equal(ethers.utils.parseEther("0.5"));
  });

  it("should transfer and optimize gas", async function () {
    // Deposit money for addr1 so it has balance to transfer
    await dbank.connect(addr1).DepositMoney("Test Deposit", {
      value: ethers.utils.parseEther("1"),
    });

    // Transfer 0.5 ether from addr1 to addr2
    const tx = await dbank.connect(addr1).Transfer(
      ethers.utils.parseEther("0.5"),
      addr2.address
    );
    const receipt = await tx.wait();

    // Check gas usage (adjust threshold as needed)
    expect(receipt.gasUsed.toNumber()).to.be.below(100000);

    // Check balances after transfer
    const senderBalance = await dbank.balances(addr1.address);
    const receiverBalance = await dbank.balances(addr2.address);

    expect(senderBalance).to.equal(ethers.utils.parseEther("0.5"));
    expect(receiverBalance).to.equal(ethers.utils.parseEther("0.5"));
  });
});
