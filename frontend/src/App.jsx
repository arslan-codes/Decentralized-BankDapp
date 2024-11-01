import { useState } from "react";
import "./App.css";
import Hero from "./pages/Hero";
import { createPublicClient, http } from "viem";
import { BrowserRouter, Routes } from "react-router-dom";
import { mainnet } from "viem/chains";
const client = createPublicClient({
  chain: mainnet,
  transport: http(),
});
function App() {
  const [Balance, setbalance] = useState("");
  async function getbalance() {
    const res = await client.getBalance({
      address: "0x244a901b522818899bf702223f8841510B75713f",
    });
    setbalance(res.toString());
    console.log(res);
  }

  return (
    <BrowserRouter>
      <Hero />
    </BrowserRouter>
  );
}

export default App;
