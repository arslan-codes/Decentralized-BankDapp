import React, { useContext } from "react";
import Layout from "../components/Layout";
import icon from "../assets/metamask.svg";
import About from "./About";
import DbankContext from "../components/DbankContext";

const Feature = ({ icon, title, description }) => (
  <div className="flex flex-col items-center p-4">
    <div className="text-pink-500 mb-2">{icon}</div>
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-sm text-gray-300 text-center">{description}</p>
  </div>
);

const Hero = () => {
  const { ConnectWallet, Account } = useContext(DbankContext);

  return (
    <Layout>
      <div className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mt-10 text-white md:text-6xl mb-6">
            Welcome to <span className="text-pink-200">Decentralized Bank</span>
          </h1>
          <p className="text-lg sm:text-xl mt-4 leading-8 text-gray-300 max-w-3xl mx-auto">
            The future of finance is here. Manage your cryptocurrencies and
            traditional assets in one secure, decentralized platform.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              className="w-full sm:w-auto text-gray-100 hover:bg-pink-900 bg-pink-900 font-semibold hover:text-white rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center transition duration-300 ease-in-out"
              onClick={ConnectWallet}
            >
              <img src={icon} alt="MetaMask" className="w-6 h-5 mr-2" />
              {Account ? "Connected" : "Connect with MetaMask"}
            </button>
            <a
              href="#learn-more"
              className="w-full sm:w-auto bg-transparent hover:bg-pink-700 text-pink-500 font-semibold hover:text-white py-2.5 px-5 border border-pink-500 hover:border-transparent rounded-lg text-sm transition duration-300 ease-in-out"
            >
              Learn More
            </a>
          </div>

          {Account && (
            <div className="mt-6 bg-gray-800 bg-opacity-50 rounded-lg p-4 max-w-lg mx-auto">
              <h2 className="text-sm sm:text-base text-gray-300 mb-2">
                Connected Account:
              </h2>
              <p className="text-xs sm:text-sm font-mono text-pink-300 break-all">
                {Account}
              </p>
            </div>
          )}
        </div>

        <div className="mt-20 mb-0  ">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Feature
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              title="Deposit"
              description="Easily deposit your crypto assets into our secure smart contracts."
            />
            <Feature
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
                </svg>
              }
              title="Transfer"
              description="Send funds to other users instantly with low transaction fees."
            />
            <Feature
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              title="Withdraw"
              description="Withdraw your funds anytime, anywhere, with full control over your assets."
            />
          </div>
        </div>
      </div>
      <About />
    </Layout>
  );
};

export default Hero;
