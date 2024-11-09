import payment from "../assets/cut-online-payment-security.png";
import React from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

// Custom Card component
const Card = ({ children }) => (
  <div className="bg-gradient-to-tr from-[#000000] to-pink-900 p-6 backdrop-blur-3xl bg-opacity-10 text-white  rounded-lg shadow-lg overflow-hidden">
    {children}
  </div>
);

const CardContent = ({ children }) => <div className="p-6">{children}</div>;

export default function About() {
  const navigate = useNavigate();
  function todeposit() {
    navigate("/deposit");
  }

  return (
    <Layout>
      <div className="relative isolate px-6  ">
        {/* Background Gradient */}
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

        <div className="mx-auto py-20 sm:py-28 lg:py-30">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              About Dbank
            </h1>
            <div className="mt-4 max-w-3xl mx-auto">
              <p className="text-xl opacity-80">
                A decentralized banking application revolutionizing digital
                asset management on the blockchain.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Glass Card Section */}
            <div className="space-y-8">
              <Card>
                <CardContent>
                  <h2 className="text-2xl font-bold mb-4">What is Dbank?</h2>
                  <p className="opacity-80">
                    <strong>Dbank</strong> is a cutting-edge decentralized
                    banking application developed to manage digital assets
                    directly on the blockchain. Leveraging Ethereum and smart
                    contract functionality, Dbank empowers users to securely
                    deposit, transfer, and withdraw funds without relying on
                    centralized intermediaries.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                  <ul className="space-y-2">
                    {["Deposit", "Transfer", "Withdraw"].map((feature) => (
                      <li key={feature} className="flex items-center">
                        <svg
                          className="h-6 w-6 text-white mr-2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="opacity-80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="relative h-96 md:h-full">
              <img
                src={payment}
                alt="Online Payment Security"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Additional Glass Cards Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent>
                <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
                <p className="opacity-80">
                  Built with Ethereum for its smart contract capabilities, React
                  for a responsive front-end, and ethers.js for seamless
                  Ethereum interactions. Dbank ensures all interactions are
                  transparent and verifiable on the blockchain.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h2 className="text-2xl font-bold mb-4">Our Objective</h2>
                <p className="opacity-80">
                  The primary objective of Dbank is to offer users a
                  decentralized alternative to traditional banking functions,
                  with transparent and trustless operations managed entirely by
                  code.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience the Future of Banking?
            </h2>
            <button
              onClick={todeposit}
              className="bg-pink-900 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-800 transition-colors"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
