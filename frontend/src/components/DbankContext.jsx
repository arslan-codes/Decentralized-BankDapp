import React, { createContext, useState } from "react";
import { ethers } from "ethers";
import abi from "../contracts/DbankAbi.json";

const DbankContext = createContext();

export const Dbankprovider = ({ children }) => {
  const [Balance, setBalance] = useState(0);
  const [transactions, settransactions] = useState([]);
  const [contract, setContract] = useState();
  const [Account, setAccount] = useState();

  async function ConnectWallet() {
    if (!window.ethereum) {
      console.log("MetaMask not installed");
    } else {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const Address = await signer.getAddress();
        setAccount(Address);
        const contract = new ethers.Contract(
          "0x4b631E0b2d9b86e45b71e7A0a7C59983A25F502e",
          abi,
          signer
        );
        const balance = await contract.checkBalance();
        console.log(balance);
        setBalance(ethers.formatEther(balance));
        setContract(contract);
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  const value = {
    contract,
    ConnectWallet,
    Balance,
    setBalance,
    Account,
  };

  return (
    <DbankContext.Provider value={value}>{children}</DbankContext.Provider>
  );
};

export default DbankContext;
