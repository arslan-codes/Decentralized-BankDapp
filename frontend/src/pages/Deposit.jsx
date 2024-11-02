import React, { useState } from "react";
import Layout from "../components/Layout";
import SwapForm from "./SwapFrom";
const Deposit = () => {
  const [Balance, setBalance] = useState(0);
  return (
    <Layout>
      <div className="bg-black text-white min-h-screen ">
        <div className="relative isolate px-2 ">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>

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
                      placeholder="Arslan"
                      className="text-base sm:text-2xl w-full form-control font-semibold text-gray-800 bg-transparent py-3 sm:py-6  outline-offset-2 ring-offset-neutral  focus:rounded-2xl px-2 sm:px-4 focus:ring-blue-500 focus:border-blue-500 block "
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
                      className="text-base sm:text-2xl w-full form-control font-semibold text-gray-800 bg-transparent py-3 sm:py-6  outline-offset-2 ring-offset-neutral  focus:rounded-2xl px-2 sm:px-4 focus:ring-blue-500 focus:border-blue-500 block "
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="w-3/4  sm:w-full bg-pink-200 text-pink-600 font-semibold py-3 rounded-lg mt-4">
                    Deposit
                  </button>
                </div>
                {/* Get Started Button */}
              </SwapForm>
              <SwapForm>
                {/* Sell Section */}
                <div className="flex justify-start items-center mb-4">
                  <div className="w-full">
                    <p className="text-gray-600 text-sm sm:text-2xl font-semibold my-1 sm:my-2">
                      Current Balance{" "}
                      <p className="text-gray-900">{Balance}-Eth</p>
                    </p>
                  </div>
                </div>

                {/* Buy Section */}
                <div className="flex justify-start items-center mb-4">
                  <div className="w-full">
                    <p className="text-gray-900 text-base sm:text-2xl font-semibold my-1 sm:my-2">
                      Previous Deposits
                    </p>{" "}
                    <div>
                      {" "}
                      <p className="text-black">All Deposits</p>
                    </div>
                  </div>
                </div>

                {/* Get Started Button */}
              </SwapForm>
            </div>

            {/* <div className="flex min-h-full flex-1 rounded-2xl  bg-slate-700  flex-col justify-center px-2 py-12 lg:px-8"> */}
            {/* <div className="mt-3 text-center  sm:mx-auto sm:w-full ">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block weig text-base font-medium text-gray-100"
                  >
                    Name
                  </label>
                  <div className="mt-2 flex justify-center">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-center">
                    <label
                      htmlFor="password"
                      className="block text-sm/6 font-medium text-gray-100"
                    >
                      Amount in Eth
                    </label>
                  </div>
                  <div className="mt-2 flex justify-center">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      className="block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm/6 text-gray-500">
                Not a member?{" "}
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Start a 14 day free trial
                </a>
              </p>
            </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Deposit;
