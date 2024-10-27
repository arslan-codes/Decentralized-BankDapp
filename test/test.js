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
    const depositAmount = ethers.utils.parseEther("1");
    
    await dbank.connect(addr1).DepositMoney("Test Deposit", {
      value: depositAmount
    });

    const balance = await dbank.connect(addr1).checkBalance();
    expect(balance.toString()).to.equal(depositAmount.toString());
  });

  it("should withdraw money", async function () {
    const depositAmount = ethers.utils.parseEther("1");
    const withdrawAmount = ethers.utils.parseEther("0.5");
    
    await dbank.connect(addr1).DepositMoney("Test Deposit", {
      value: depositAmount
    });

    await dbank.connect(addr1).withdraw(withdrawAmount);
    
    const balance = await dbank.connect(addr1).checkBalance();
    expect(balance.toString()).to.equal(depositAmount.sub(withdrawAmount).toString());
  });

  it("should transfer and optimize gas", async function () {
    const depositAmount = ethers.utils.parseEther("1");
    const transferAmount = ethers.utils.parseEther("0.5");
    
    // Deposit money for addr1
    await dbank.connect(addr1).DepositMoney("Test Deposit", {
      value: depositAmount
    });

    // Get initial balances
    const initialSenderBalance = await dbank.connect(addr1).checkBalance();
    const initialReceiverBalance = await dbank.connect(addr2).checkBalance();

    // Transfer
    const tx = await dbank.connect(addr1).Transfer(transferAmount, addr2.address);
    const receipt = await tx.wait();

    // Check gas usage
    expect(receipt.gasUsed.toNumber()).to.be.below(100000);

    // Check final balances
    const finalSenderBalance = await dbank.connect(addr1).checkBalance();
    const finalReceiverBalance = await dbank.connect(addr2).checkBalance();

    expect(finalSenderBalance.toString()).to.equal(
      initialSenderBalance.sub(transferAmount).toString()
    );
    expect(finalReceiverBalance.toString()).to.equal(
      initialReceiverBalance.add(transferAmount).toString()
    );
  });
});