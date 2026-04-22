import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/5 backdrop-blur-lg border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-saturate-[1.8] supports-[backdrop-filter]:bg-white/5">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-screen-2xl mx-auto">
        <div className="text-2xl font-heading font-bold text-[#ebe1d6] tracking-tighter">
          SIDDHARTH G.
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="#work" className="text-[#C47C3A] font-semibold border-b border-[#C47C3A] pb-1 font-sans text-sm uppercase tracking-widest">
            Work
          </Link>
          <Link href="#journey" className="text-[#ddc2a0] hover:text-[#ebe1d6] transition-colors duration-300 font-sans text-sm uppercase tracking-widest">
            Journey
          </Link>
          <Link href="#about" className="text-[#ddc2a0] hover:text-[#ebe1d6] transition-colors duration-300 font-sans text-sm uppercase tracking-widest">
            About
          </Link>
          <Link href="#contact" className="text-[#ddc2a0] hover:text-[#ebe1d6] transition-colors duration-300 font-sans text-sm uppercase tracking-widest">
            Contact
          </Link>
          <a 
            href="https://drive.google.com/file/d/1oGPXqQwOgd9gxkfD4NpQNEDt0BNT8lWj/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ddc2a0] hover:text-[#ebe1d6] transition-colors duration-300 font-sans text-sm uppercase tracking-widest"
          >
            Resume
          </a>
          <a 
            href="#contact"
            className="ml-4 px-6 py-2 bg-[#C47C3A] text-[#17130d] font-semibold rounded-lg hover:bg-[#ffb77b] transition-all duration-500 ease-in-out"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}
