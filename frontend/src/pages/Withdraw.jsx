import React, { useState } from "react";
import Layout from "../components/Layout";
import SwapForm from "./SwapFrom";
const Withdraw = () => {
  const [Balance, setBalance] = useState(0);
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
                  className="text-base  border-2 border-gray-200    rounded-2xl 
                  sm:text-2xl w-full form-control font-semibold text-gray-800  
                  py-3 sm:py-6   ring-black  focus:rounded-2xl px-2 sm:px-4
                   focus:ring-blue-500 focus:border-blue-500 block "
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button className="w-3/4  sm:w-full bg-pink-200 text-pink-600 font-semibold py-3 rounded-lg mt-4">
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
            <div className="flex justify-start items-center mb-4">
              <div className="w-full">
                <p className="text-gray-900 text-base sm:text-2xl font-semibold my-1 sm:my-2">
                  Previous Withdraws
                </p>{" "}
                <div>
                  {" "}
                  <p className="text-black">All Withdraws</p>
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
