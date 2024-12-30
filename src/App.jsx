import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import MyLand from "./pages/MyLand.jsx";
import MyNFT from "./pages/MyNFT.jsx";
import PreSaleMint from "./pages/PreSaleMint.jsx";
import VipMint from "./pages/VipMint.jsx";
import Whitepaper from "./pages/Whitepaper.jsx";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-nft" element={<MyNFT />} />
        <Route path="/my-land" element={<MyLand />} />
        <Route path="/vip-mint" element={<VipMint />} />
        <Route path="/presale-mint" element={<PreSaleMint />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
      </Routes>
    </div>
  );
}

export default App;
