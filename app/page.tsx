
import MenuItem from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSections from "@/app/dashboard/Hero_sections"
import LatestSlider from "./dashboard/LatestSlider";
import WorkshopNews from "./dashboard/News";
// import WorkshopNews from "@/app/dashboard/News";
export default function Home() {
  return (
    <div className="font-sans min-h-screen grid-rows-[auto_1fr_auto] gap-16">
      <header className="w-full">
      <MenuItem />
     
       <HeroSections/>
        </header>
      <main className="flex justify-center px-8 sm:px-20">
        {/* ...rest of your content... */}
      
      </main>
      <LatestSlider/>
      <WorkshopNews/>
      <footer className="w-full flex justify-center">
        <Footer />
      </footer>
    </div>
  );
}