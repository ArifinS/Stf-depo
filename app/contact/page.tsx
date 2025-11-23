import MenuItem from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "./contact_form";

export default function ContactPage() {
  return (
    <div className="font-sans min-h-screen grid grid-rows-[auto_1fr_auto] bg-[#f9f9f9]">
      <header className="w-full">
        <MenuItem />
      </header>
      <main className="flex flex-col items-center px-4 sm:px-0">
        <ContactForm />
      </main>
      <footer className="w-full flex justify-center">
        <Footer />
      </footer>
    </div>
  );
}