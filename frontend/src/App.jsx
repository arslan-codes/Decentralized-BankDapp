import { useState } from "react";
import "./App.css";
import Hero from "./pages/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Transfer from "./pages/Transfer";
import About from "./pages/About";
import { Dbankprovider } from "./components/DbankContext"; // Import correctly
import Header from "./components/Header";

function App() {
  return (
    <Dbankprovider>
      {/* Wrap the Routes with Dbankprovider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/transfer" element={<Transfer />} />
        </Routes>
      </BrowserRouter>
    </Dbankprovider>
  );
}

export default App;
