import { useState } from "react";
import "./App.css";
import Hero from "./pages/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Transfer from "./pages/Transfer";
// import About from "./pages/About"; // Ensure you import your About component
// import Contact from "./pages/Contact"; // Ensure you import your Contact component
// import Home from "./pages/Home"; // Ensure you import your Home component

function App() {
  return (
    <BrowserRouter>
      {/* Include the Header component here */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/transfer" element={<Transfer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
