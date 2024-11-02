import React, { useState } from "react";
import Layout from "../components/Layout";
import SwapForm from "./SwapFrom";
const Transfer = () => {
  const [Balance, setBalance] = useState(0);
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
                  placeholder="0xjd3bdsk3b......"
                  className="text-base  border-2 border-gray-200    rounded-2xl 
                  sm:text-2xl w-full form-control font-semibold text-gray-800  
                  py-3 sm:py-6   ring-black  focus:rounded-2xl px-2 sm:px-4
                   focus:ring-blue-500 focus:border-blue-500 block "
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
                  className="text-base  border-2 border-gray-200    rounded-2xl 
                  sm:text-2xl w-full form-control font-semibold text-gray-800  
                  py-3 sm:py-6   ring-black  focus:rounded-2xl px-2 sm:px-4
                   focus:ring-blue-500 focus:border-blue-500 block "
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button className="w-3/4 sm:w-full bg-pink-200 text-pink-600 font-semibold py-3 rounded-lg mt-2 text-sm px-5 text-center inline-flex justify-center items-center focus:outline-none focus:ring-1 focus:ring-pink-600 f focus:ring-offset-2">
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
                <p className="text-gray-600 text-sm sm:text-2xl font-semibold my-1 sm:my-2">
                  Current Balance <p className="text-gray-900">{Balance}-Eth</p>
                </p>
              </div>
            </div>

            {/* Buy Section */}
            <div className="flex justify-start items-center mb-4">
              <div className="w-full">
                <p className="text-gray-900 text-base sm:text-2xl font-semibold my-1 sm:my-2">
                  Previous Transfers
                </p>{" "}
                <div>
                  {" "}
                  <p className="text-black">All Transfers</p>
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
