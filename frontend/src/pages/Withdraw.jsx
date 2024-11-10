import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import SwapForm from "./SwapFrom";
import DbankContext from "../components/DbankContext";
import { ethers } from "ethers";

// const contractAddress = "0x4b631E0b2d9b86e45b71e7A0a7C59983A25F502e";

const Withdraw = () => {
  const { contract, Account, Balance } = useContext(DbankContext);

  const [allwithdraws, setAllwithdraws] = useState([]);
  const [WithdrawMade, setWithdrawMade] = useState();
  const [amount, setAmmount] = useState(0);

  // getAllWithdraws;
  useEffect(() => {
    async function Getallwithdraws() {
      if (!contract) {
        console.log("connect your wallet");
      } else {
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

            <div className="flex justify-center">
              <button
                className="w-3/4 sm:w-full bg-pink-200
               text-pink-600 font-semibold py-3 rounded-lg mt-2 text-sm px-5 text-center
                inline-flex justify-center items-center  hover:bg-pink-900 hover:text-white focus-visible:outline 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={ReqWithdraw}
              >
                Withdraw
              </button>
            </div>
            <div className="flex justify-center">
              <button
                className="w-3/4 sm:w-full bg-green-800
               text-white font-semibold py-3 rounded-lg mt-2 text-sm px-5 text-center
                inline-flex justify-center items-center  hover:bg-green-600 hover:text-white focus-visible:outline 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={ReqWithdraw}
              >
                Claim Amount Withdrawn
              </button>
            </div>
            {/* Get Started Button */}
          </SwapForm>
          <SwapForm>
            {/* Sell Section */}
            <div className="flex justify-start items-center mb-4">
              <div className="w-full">
                <div className="text-gray-600 text-sm sm:text-2xl font-semibold my-1 sm:my-2">
                  Current Balance
                  <div className="text-gray-900 text-lg md:text-2xl">
                    {Account
                      ? Balance
                        ? `${Balance} - Eth`
                        : "Loading"
                      : "0 - Eth"}
                  </div>
                </div>
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
