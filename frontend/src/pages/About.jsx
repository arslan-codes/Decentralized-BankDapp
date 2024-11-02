import React from "react";
import payment from "../assets/cut-online-payment-security.png";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="flex justify-center">
        <hr className="w-1/2 mb-12 mt-10" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center text-balance space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 lg:w-1/3 text-justify">
          <h1 className="text-5xl font-bold my-4 tracking-tight text-white">
            Our Mission
          </h1>
          <p>
            Discover the advantages of banking with KavaSaki, from our
            cutting-edge technology to our dedicated customer support.
            Integrity, innovation, and customer-first thinking guide everything
            we do at KavaSaki. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Similique excepturi libero quo rerum laboriosam
            laudantium non iusto reiciendi.
          </p>
        </div>

        <div className="w-ful flex justify-center md:w-1/2 lg:w-1/3">
          <img
            className="w-3/4 h-auto"
            src={payment}
            alt="Online Payment Security"
          />
        </div>
      </div>

      <div className="text-center text-balance my-12">
        <h1 className="text-5xl font-bold m-4 tracking-tight text-white">
          Meet Our Team
        </h1>
        <p>
          Get to know the people behind KavaSaki who work tirelessly to bring
          you the best banking experience.
        </p>
      </div>
    </Layout>
  );
};

export default About;
