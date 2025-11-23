import MenuItem from "../components/Navbar";
import Footer from "../components/Footer";


export default function ContactPage() {
  return (
    <div className="font-sans min-h-screen grid grid-rows-[auto_1fr_auto] bg-[#f9f9f9]">
      <header className="w-full">
        <MenuItem />
      </header>
      <main className="flex flex-col items-center px-4 sm:px-0">
        <div className="max-w-2xl w-full text-center mb-8 mt-8">
          <h1 className="text-3xl font-bold text-[#034897] mb-2">Get in Touch</h1>
          <p className="text-gray-600 mb-4">
            love to hear from you! Fill out the form below or reach us at <a href="mailto:info@batteryapp.com" className="text-[#0070f3] underline">info@batteryapp.com</a>
          </p>
          <p className="text-gray-500">Battery App, 123 Main Street, Your City, Country</p>
          <p className="text-gray-500">Phone: +1 234 567 8900</p>
        </div>
       
      </main>
      <footer className="w-full flex justify-center">
        <Footer />
      </footer>
    </div>
  );
}