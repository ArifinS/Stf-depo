import React from "react";
import MenuItem from "../components/Navbar";
import Footer from "../components/Footer";
import BatteryStorageHero from "./battery_storage/five-advantages";
import SolarIntegrationHero from "./solar_integration/hero";

export default function SolutionsPage() {
  return (
    <div className="font-sans min-h-screen grid grid-rows-[auto_1fr_auto] bg-[#f9f9f9]">
      <header className="w-full">
        <MenuItem />
      </header>
      <main className="flex flex-col items-center px-4 sm:px-0">
        <BatteryStorageHero />
        
        {/* You can add more solution sections/components here */}
      </main>
      <footer className="w-full flex justify-center">
        <Footer />
      </footer>
    </div>
  );
}