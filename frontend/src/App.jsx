import { useState } from "react";
import "./App.css";
import Hero from "./pages/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Transfer from "./pages/Transfer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import About from "./pages/About";
import { Dbankprovider } from "./components/DbankContext"; // Import correctly
function App() {
  return (
    <Dbankprovider>
      {/* Wrap the Routes with Dbankprovider */}
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          className="w-full sm:w-96 md:w-80 lg:w-96 xl:w-1/4 font-sans"
        />
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/transfer" element={<Transfer />} />
        </Routes>
      </BrowserRouter>
    </Dbankprovider>
  );
}

export default App;
