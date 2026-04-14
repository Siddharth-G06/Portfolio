import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#17130d]/80 backdrop-blur-xl border-b border-white/5">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-screen-2xl mx-auto">
        <div className="text-2xl font-heading font-bold text-[#ebe1d6] tracking-tighter">
          SIDDHARTH.
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="#work" className="text-[#C47C3A] font-semibold border-b border-[#C47C3A] pb-1 font-sans text-sm uppercase tracking-widest">
            Work
          </Link>
          <Link href="#process" className="text-[#ddc2a0] hover:text-[#ebe1d6] transition-colors duration-300 font-sans text-sm uppercase tracking-widest">
            Process
          </Link>
          <Link href="#about" className="text-[#ddc2a0] hover:text-[#ebe1d6] transition-colors duration-300 font-sans text-sm uppercase tracking-widest">
            About
          </Link>
          <Link href="#contact" className="text-[#ddc2a0] hover:text-[#ebe1d6] transition-colors duration-300 font-sans text-sm uppercase tracking-widest">
            Contact
          </Link>
          <button className="ml-4 px-6 py-2 bg-[#C47C3A] text-[#17130d] font-semibold rounded-lg hover:bg-[#ffb77b] transition-all duration-500 ease-in-out">
            Hire Me
          </button>
        </nav>
      </div>
    </header>
  );
}
