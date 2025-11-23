'use client';

import React from "react";
import MenuItem from "../../components/Navbar";
import Footer from "../../components/Footer";
import TeamGrid from "./team";

export default function CompanyProfilePage() {
  return (
    <div className="font-sans min-h-screen grid grid-rows-[auto_1fr_auto] bg-[#f9f9f9]">
      <header className="w-full">
        <MenuItem />
      </header>
      <main>
        {/* <TeamGrid/>  */}
      </main>
      <footer className="w-full flex justify-center">
        <Footer />
      </footer>
    </div>
  );
}