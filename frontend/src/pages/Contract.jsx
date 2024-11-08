import React from "react";
import { createContext, useContext, useState } from "react";
import abi from "../contracts/DbankAbi.json"; // Save your ABI as a JSON file and import it
import { ethers } from "hardhat";
const Contract = () => {
  const ContextProvider = createContext();
  // ContractAddress = 0x5FbDB2315678afecb367f032d93F642f64180aa3;
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
