import React from "react";
import MenuItem from "../../components/Navbar";
import Footer from "../../components/Footer";
import MaritimeSlider from "./marineBanner";

export default function BatteryStoragePage() {
  return (
    <div className="font-sans min-h-screen grid grid-rows-[auto_1fr_auto] bg-[#f9f9f9]">
      <header className="w-full">
        <MenuItem />
      </header>
        <MaritimeSlider/>
      <footer className="w-full flex justify-center">
        <Footer />
      </footer>
    </div>
  );
}   