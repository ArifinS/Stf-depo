import React from "react";
import MenuItem from "../../components/Navbar";
import Footer from "../../components/Footer";
import SolarIntegrationHero from "./hero";

export default function SolarIntegrationPage() {
  return (
    <div className="font-sans min-h-screen grid grid-rows-[auto_1fr_auto] bg-[#f9f9f9]">
      <header className="w-full">
        <MenuItem />
      </header>
      <main className="flex flex-col items-center px-4 sm:px-0">
        <SolarIntegrationHero />
        {/* Add more solar integration solution details/components here */}
      </main>
      <footer className="w-full flex justify-center">
        <Footer />
      </footer>
    </div>
 );
}