import React, { useEffect, useState, useContext } from "react";
import Layout from "../components/Layout";
import SwapForm from "./SwapFrom";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import DbankContext from "../components/DbankContext";

const Deposit = () => {
  const { contract, Account, Balance, setBalance } = useContext(DbankContext);
  const [deposits, setDeposits] = useState([]);
  const [successfulltransaction, setsuccessfulltransaction] = useState();

  const [name, setName] = useState("");
  const [amount, setAmmount] = useState(0);

  // const contractAddress = "0x4b631E0b2d9b86e45b71e7A0a7C59983A25F502e";

  //getall deposit
  useEffect(() => {
    async function getalldepostis() {
      if (!contract) {
        toast.warning("Connect Your wallet");
        return;
      } else {
        try {
          const alldeposits = await contract.getAllDepositss();
          const parseDeposits = alldeposits.map((deposit) => ({
            amount: ethers.formatEther(deposit.amount),
            name: deposit.name,
            depositTime: new Date(
              Number(deposit.depositTime) * 1000
            ).toLocaleString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: false, // Use 24-hour format; set to true for 12-hour with AM/PM
            }),
          }));
          console.log(parseDeposits);
          setDeposits(parseDeposits);
        } catch (error) {
          console.log(error.message);
        }
      }
    }
    getalldepostis();
  }, [contract, Balance, successfulltransaction]);

  //deposit moneyu
  async function DepostMoney() {
    if (!contract) {
      toast.warning("pleaser connect ur accont first");
    } else {
      try {
        if (name && amount) {
          const tx = await contract.DepositMoney(name, {
            value: ethers.parseEther(amount.toString()),
          });
          const receipt = await tx.wait();
          // event DepositMade(address indexed user, uint256 amount, string name);

          contract.on("DepositMade", (Account, amount, name) => {
            toast.success(`Deposit made of ${amount} from ${Account},`);
          });

          toast.success("Deposit Made successfully");
          const balance = await contract.checkBalance();
          setBalance(ethers.formatEther(balance));
          setsuccessfulltransaction((e) => e + 1);
          // console.log(receipt);
        } else {
          toast.error("please enter both values");
        }
      } catch (error) {
        // toast.error(error.message);
        let message = "An error occurred during the transaction.";
        if (error.reason) {
          message = error.reason; // Get revert reason if available
        } else if (error.message) {
          const matched = error.message.match(
            /reverted with reason string '(.*)'/
          );
          if (matched) {
            message = matched[1]; // Capture the specific revert reason
          } else {
            message = error.message; // Show general error message
          }
        }

        toast.error(
          `Transaction failed: ${message} > deposit must be >0.01 eth`
        );
      }
    }
  }

  return (
    <Layout>
      <div className="mx-auto max-w-2xl py-14 sm:py-28 lg:py-30">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-4 text-center text-2xl/9 font-bold tracking-tight text-white">
            Deposit Your Funds
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
                  Name
                </p>
                <input
                  type="text"
                  placeholder="Name "
                  className="text-base  border-2 border-gray-200    rounded-md 
                  sm:text-xl w-full form-control font-medium text-gray-800  
                  py-2 sm:py-4   ring-black  focus:rounded-md px-2 sm:px-4
                   focus:ring-blue-500 focus:border-blue-500 block "
                  onChange={(e) => setName(e.target.value)}
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
            <div className="flex justify-center">
              <button
                onClick={DepostMoney}
                className="w-3/4 sm:w-full bg-pink-200
               text-pink-600 font-semibold py-3 rounded-lg mt-2 text-sm px-5 text-center
                inline-flex justify-center items-center  hover:bg-pink-500 hover:text-white focus-visible:outline 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
                Deposit
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
            <div className="flex justify-start items-center mb-4 ">
              <div className="w-full">
                <p className="text-gray-900 text-base sm:text-2xl font-semibold my-1 sm:my-2">
                  Previous Deposits
                </p>{" "}
                <div>
                  <div class="w-full h-48 overflow-y-auto border rounded-lg p-2">
                    <ul class="space-y-2 text-black">
                      {deposits.map((deposit, index) => (
                        <li
                          className="border-b  pb-2 text-xs sm:text-sm flex justify-between"
                          key={index}
                        >
                          <span>{deposit.amount} eth </span>
                          <span>{deposit.depositTime}</span>
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

export default Deposit;
