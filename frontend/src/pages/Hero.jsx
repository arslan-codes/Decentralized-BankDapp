import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import icon from "../assets/metamask.svg";
import DbankContext from "../components/DbankContext";
// 0x360505815e51672d28Ac19d7Cb1C437c61950ae2
const Hero = () => {
  const { ConnectWallet, Account } = useContext(DbankContext);

  return (
    <Layout>
      <div className="mx-auto max-w-2xl py-28 sm:py-48 lg:py-30">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center">
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white md:text-6xl">
            Decentralized Bank
          </h1>
          <p className="text-sm md:text-lg mt-2 md:mt-6 leading-8 text-gray-100 whitespace-pre-wrap sm:whitespace-normal">
            The future of finance is here. Manage your cryptocurrencies and
            traditional assets in one secure platform.
          </p>
          <div className="mt-6 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6">
            <button
              type="button"
              className="text-gray-900 hover:bg-pink-900 bg-pink-100 font-semibold hover:text-white rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 cursor-pointer"
              onClick={ConnectWallet}
            >
              <img src={icon} alt="icon" className="w-6 h-5 me-2 -ms-1" />
              {Account ? <h1>connected</h1> : <h1>Connect with MetaMask</h1>}
            </button>
          </div>
          <div className="flex place-items-center sm:w-full">
            <div className="w-full overflow-x-clip overflow-ellipsis">
              <h2 className="text-xs sm:text-base">{Account}</h2>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hero;
