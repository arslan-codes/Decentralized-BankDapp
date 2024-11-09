import React from "react";
import { createContext, useContext, useState } from "react";
import abi from "../contracts/DbankAbi.json"; // Save your ABI as a JSON file and import it
import { ethers } from "hardhat";
const Contract = () => {
  const ContextProvider = createContext();
  // ContractAddress = 0x4b631E0b2d9b86e45b71e7A0a7C59983A25F502e;
  const contractAddress = process.env.ContractAddress;
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);

  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default Contract;
