import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import SwapForm from "./SwapFrom";
import { ethers } from "ethers";
import DbankContext from "../components/DbankContext";
import { toast } from "react-toastify";

const Transfer = () => {
  // const contractAddress = "0x4b631E0b2d9b86e45b71e7A0a7C59983A25F502e";
  const { contract, Account, Balance, setBalance } = useContext(DbankContext);
  // const [Balance, setBalance] = useState(0);
  const [Amount, setAmmount] = useState(0);
  const [Alltransfers, setAlltransfers] = useState([]);
  const [transactionMade, settransactionMade] = useState();
  const [receiver, setReceiver] = useState();

  useEffect(() => {
    async function getAlltransfers() {
      if (!contract) {
        toast.warning("connect your wallet");
        return;
      } else {
        const Alltransfers = await contract.getAlltransfers();
        const parseTransfers = Alltransfers.map((transfer) => ({
          amount: ethers.formatEther(transfer.amount),
          receiver: transfer.receiver,
          transferTime: new Date(
            Number(transfer.depositTime) * 1000
          ).toLocaleString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false, // Use 24-hour format; set to true for 12-hour with AM/PM
          }),
        }));
        console.log(parseTransfers);
        setAlltransfers(parseTransfers);
      }
    }

    getAlltransfers();
  }, [contract, transactionMade]);

  async function TransferAmount() {
    if (!contract) {
      toast.warning("Connect your wallet");
    } else {
      try {
        const tx = await contract.TransferMoney(
          ethers.parseEther(Amount),
          receiver
        );
        const receipt = await tx.wait();
        settransactionMade((e) => e + 1);
        console.log(receipt);
        toast.success("Amount Transfered");
        const balance = await contract.checkBalance();
        setBalance(ethers.formatEther(balance));
      } catch (error) {
        let message = "An error occurred during the transaction.";

        // Check for MetaMask revert reason
        if (error.reason) {
          message = error.reason; // Get revert reason if available
        } else if (error.message) {
          // Extract revert reason from the message if it's embedded
          const matched = error.message.match(
            /reverted with reason string '(.*)'/
          );
          if (matched) {
            message = matched[1]; // Capture the specific revert reason
          } else {
            message = error.message; // Show general error message
          }
        }

        toast.error(`Transaction failed: ${message}`);
      }
    }
  }

  return (
    <Layout>
      <div className="mx-auto max-w-2xl py-14 sm:py-28 lg:py-30">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-4 text-center text-2xl/9 font-bold tracking-tight text-white">
            Transfer Your Funds
            <h1 className="text-base md:text-lg text-center font-semibold text-gray-100 mb-6">
              anytime, anywhere.
            </h1>
          </h2>
        </div>
        {/* <SwapForm></SwapForm> */}
        <div className="flex flex-col md:flex-row  md:space-x-6  m-6 justify-center ">
          <SwapForm>
            {/* Sell Section */}
            <div className="flex justify-start items-center mb-4">
              <div className="w-full">
                <p className="text-gray-900 text-base sm:text-2xl font-semibold my-1 sm:my-2">
                  Transfer to
                </p>
                <input
                  type="text"
                  placeholder="0x3n...."
                  className="text-base  border-2 border-gray-200    rounded-md 
                  sm:text-xl w-full form-control font-medium text-gray-800  
                  py-2 sm:py-4   ring-black  focus:rounded-md px-2 sm:px-4
                   focus:ring-blue-500 focus:border-blue-500 block "
                  onChange={(e) => setReceiver(e.target.value)}
                />
              </div>
            </div>

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
            {/* <button
              className="w-3/4 sm:w-full bg-pink-200
               text-pink-600 font-semibold py-3 rounded-lg mt-2 text-sm px-5 text-center
                inline-flex justify-center items-center  hover:bg-pink-500 hover:text-white focus-visible:outline 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={ConnectWallet}
            >
              Connnect wallet
            </button> */}
            <div className="flex justify-center">
              <button
                className="w-3/4 sm:w-full bg-pink-200
               text-pink-600 font-semibold py-3 rounded-lg mt-2 text-sm px-5 text-center
                inline-flex justify-center items-center  hover:bg-pink-500 hover:text-white focus-visible:outline 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={TransferAmount}
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
                Transfer
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
            <div className="flex justify-start items-center mb-4">
              <div className="w-full">
                <p className="text-gray-900 text-base sm:text-2xl font-semibold my-1 sm:my-2">
                  Previous Transfers
                </p>{" "}
                <div>
                  <div class="w-full h-48 overflow-y-auto border rounded-lg p-2">
                    <ul class="space-y-2 text-black">
                      {Alltransfers.map((transfer, index) => (
                        <li
                          className="border-b  pb-2 text-xs sm:text-sm flex justify-between flex-col overflow-x-auto"
                          key={index}
                        >
                          <div className="flex justify-between">
                            <span>{transfer.amount}</span>{" "}
                            <span>{transfer.transferTime}</span>
                          </div>

                          <div
                            className="text justify-between flex"
                            title={transfer.receiver} // Full address shown on hover
                          >
                            <span className="font-semibold">To</span>
                            {transfer.receiver.slice(
                              0,
                              transfer.receiver.length / 2
                            )}
                            ...
                          </div>
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

export default Transfer;
