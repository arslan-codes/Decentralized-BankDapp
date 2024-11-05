import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import icon from "../assets/metamask.svg";
import { ethers, BrowserProvider } from "ethers";

const Hero = () => {
  const [account, setAccount] = useState();

  async function ConnectWallett() {
    if (!window.ethereum) {
      alert("Meta Mask is not installed ");
      return;
    }
    try {
      const provider = new BrowserProvider(window.ethereum);
      await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      console.log(address);
      setAccount(address);
    } catch (e) {
      console.log("errro s" + e.message);
    }
  }
  // const navigate = useNavigate();

  return (
    <Layout>
      <div className="mx-auto max-w-2xl py-28 sm:py-48 lg:py-30">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center">
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white md:text-6xl">
            Decentralized Bank
          </h1>
          {/* <div className="flex flex-end">
            <img
              src="https://img.freepik.com/premium-vector/blockchain-engineer-isolated-cartoon-vector-illustrations_107173-30333.jpg"
              alt=""
            />
          </div> */}
          <p className="text-sm md:text-lg mt-2  md:mt-6 leading-8 text-gray-100 whitespace-pre-wrap sm:whitespace-normal">
            The future of finance is here. Manage your cryptocurrencies and
            traditional assets in one secure platform.
          </p>
          <div className="mt-6 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6">
            <button
              type="button"
              className="text-gray-900  hover:bg-pink-900 bg-pink-100  
               font-semibold hover:text-white rounded-lg text-sm px-5 
               py-2.5 text-center inline-flex items-center me-2 mb-2"
              onClick={ConnectWallett}
            >
              <img src={icon} alt="icon" className="w-6 h-5 me-2 -ms-1" />
              Connect with MetaMask
            </button>
            <h1>Connected account is : {account}</h1>
            {}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hero;
