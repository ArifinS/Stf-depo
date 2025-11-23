'use client';

import React from "react";
import MenuItem from "../../components/Navbar";
import Footer from "../../components/Footer";
import WorkshopHistory from "./workshop-history";

export default function CompanyProfilePage() {
  return (
    <div className="font-sans min-h-screen grid grid-rows-[auto_1fr_auto] bg-[#f9f9f9]">
      <header className="w-full">
        <MenuItem />
      </header>
      <main>
        <WorkshopHistory/>
      </main>
        <Footer />
    </div>
  );
}