import React from "react";
// import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const Hero = () => {
  // const navigate = useNavigate();

  return (
    <Layout>
      {" "}
      <div className="bg-black text-white min-h-screen ">
        <div className="relative isolate px-6 ">
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
        </div>
      </div>
    </Layout>
  );
};

export default Hero;
