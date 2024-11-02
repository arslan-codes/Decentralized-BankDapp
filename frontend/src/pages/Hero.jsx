import React from "react";
// import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const Hero = () => {
  // const navigate = useNavigate();

  return (
    <Layout>
      <div className="mx-auto max-w-2xl py-28 sm:py-48 lg:py-30">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          {/* <div className="relative rounded-full px-3 py-1 text-sm leading-6  text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing our next round of funding.{" "}
                <a
                  href="#blog"
                  className="font-semibold text-indigo-600"
                  // onClick={handleReadMoreClick}
                >
                  <span className="absolute inset-0" aria-hidden="true"></span>
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div> */}
        </div>
        <div className="text-center">
          <h1 className="text-2xl sm: text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Decentralized Bank
          </h1>
          <p className="text-sm md:text-lg mt-2  md:mt-6 leading-8 text-gray-100 whitespace-pre-wrap sm:whitespace-normal">
            The future of finance is here. Manage your cryptocurrencies and
            traditional assets in one secure platform.
          </p>
          <div className="mt-6 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-pink-600 px-2 sm:px-3.5  py-1.5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-pink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 focus-cursor-mouse"
            >
              Connect Wallet
            </a>
            {/* <a
                  href="#"
                  className="text-xs md:text-xs font-semibold leading-6 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hero;
