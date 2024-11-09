import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SwapForm from "./SwapFrom";
import { use } from "chai";
import { ethers } from "ethers";
import abi from "../contracts/DbankAbi.json";
import Deposit from "./Deposit";
// const contractAddress = "0x4b631E0b2d9b86e45b71e7A0a7C59983A25F502e";

const Withdraw = () => {
  const [Balance, setBalance] = useState(0);
  const [contract, setContract] = useState();
  const [allwithdraws, setAllwithdraws] = useState([]);
  const [WithdrawMade, setWithdrawMade] = useState();
  const [amount, setAmmount] = useState(0);

  async function ConnectWallet() {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        console.log(address);
        const contract = new ethers.Contract(
          "0x4b631E0b2d9b86e45b71e7A0a7C59983A25F502e",
          abi,
          signer
        );
        setContract(contract);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      console.log("metamask not installed");
    }
  }
  // getAllWithdraws;
  useEffect(() => {
    async function Getallwithdraws() {
      if (!contract) {
        console.log("connect your wallet");
      } else {
        const Balance = await contract.checkBalance();
        console.log(Balance);
        setBalance(ethers.formatEther(Balance));
        const Allwithdraws = await contract.getAllWithdraws();
        const parsewithdraws = Allwithdraws.map((Withdraw) => ({
          amount: ethers.formatEther(Withdraw.amount),
          WithdrawTime: new Date(
            Number(Withdraw.wthdrawTime) * 1000
          ).toLocaleString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
          }),
        }));

        console.log(parsewithdraws);
        setAllwithdraws(parsewithdraws);
      }
    }
    Getallwithdraws();
  }, [contract, WithdrawMade]);

  async function ReqWithdraw() {
    if (!contract) {
      console.log("please connect your wallet first");
      return;
    } else {
      try {
        const tx = await contract.Reqwithdraw(
          ethers.parseEther(amount.toString())
        );
        const receipt = await tx.wait();
        console.log(receipt);
        console.log("request received for withdrawl");
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  async function claimWithdraw() {
    if (!contract) {
      console.log("please connect your wallet first");
    } else {
      try {
        const tx = await contract.claimWithdraw();
        const receipt = await tx.wait();
        console.log(receipt);
        setWithdrawMade((e) => e + 1);
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  return (
    <Layout>
      <div className="mx-auto max-w-2xl py-14 sm:py-28 lg:py-30">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-4 text-center text-2xl/9 font-bold tracking-tight text-white">
            Withdraw Your Funds
            <h1 className="text-base md:text-lg text-center font-semibold text-gray-100 mb-6">
              anytime, anywhere.
            </h1>
          </h2>
        </div>
        {/* <SwapForm></SwapForm> */}
        <div className="flex flex-col md:flex-row  md:space-x-6  m-6 justify-center ">
          <SwapForm>
            {/* Sell Section */}

            {/* Buy Section */}
            <div className="flex justify-start items-center mb-4">
              <div className="w-full">
                <p className="text-gray-900 text-base sm:text-2xl font-semibold my-1 sm:my-2">
                  Amount
                </p>
                <input
                  type="text"
                  placeholder="0 Eth"
                  className="text-base  border-2 border-gray-200    rounded-md 
                  sm:text-xl w-full form-control font-medium text-gray-800  
                  py-2 sm:py-4   ring-black  focus:rounded-md px-2 sm:px-4
                   focus:ring-blue-500 focus:border-blue-500 block "
                  onChange={(e) => setAmmount(e.target.value)}
                />
              </div>
            </div>
            <button
              className="w-full sm:w-full bg-amber-800
               text-pink-100 font-semibold py-3 rounded-lg mt-2 text-sm px-5 text-center
                inline-flex justify-center items-center  hover:bg-pink-500 hover:text-white focus-visible:outline 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={ConnectWallet}
            >
              Connect Wallet
            </button>
            <div className="flex justify-center">
              <button
                className="w-3/4 sm:w-full bg-yellow-500
               text-pink-100 font-semibold py-3 rounded-lg mt-2 text-sm px-5 text-center
                inline-flex justify-center items-center  hover:bg-pink-500 hover:text-white focus-visible:outline 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={claimWithdraw}
              >
                claimWithdraw
              </button>
              <button
                className="w-3/4 sm:w-full bg-pink-200
               text-pink-600 font-semibold py-3 rounded-lg mt-2 text-sm px-5 text-center
                inline-flex justify-center items-center  hover:bg-pink-500 hover:text-white focus-visible:outline 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={ReqWithdraw}
              >
                <svg
                  className="w-4 h-4 me-2 -ms-1 text-[#626890]"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="ethereum"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
                  ></path>
                </svg>{" "}
                Withdraw
              </button>
            </div>
            {/* Get Started Button */}
          </SwapForm>
          <SwapForm>
            {/* Sell Section */}
            <div className="flex justify-start items-center mb-4">
              <div className="w-full">
                <p className="text-gray-600 text-sm sm:text-2xl font-semibold my-1 sm:my-2">
                  Current Balance <p className="text-gray-900">{Balance}-Eth</p>
                </p>
              </div>
            </div>

            {/* Buy Section */}
            <div className="flex justify-start items-center mb-1">
              <div className="w-full">
                <p className="text-gray-900 text-base sm:text-xl font-semibold my-1 sm:my-2">
                  Previous Withdraws
                </p>{" "}
                <div>
                  <div class="w-full h-48 overflow-y-auto border rounded-lg p-2">
                    <ul class="space-y-2 text-black">
                      {allwithdraws.map((Withdraw, index) => (
                        <li
                          className="border-b  pb-2 text-xs sm:text-sm flex justify-between"
                          key={index}
                        >
                          <span>{Withdraw.amount}</span>
                          <span>{Withdraw.WithdrawTime}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Get Started Button */}
          </SwapForm>
        </div>
      </div>
    </Layout>
  );
};

export default Withdraw;
