export function Footer() {
  return (
    <footer className="bg-[#110e08] border-t border-[#1f1b14] mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 py-12 gap-8 max-w-screen-2xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-lg font-heading text-[#ebe1d6]">SIDDHARTH.</div>
          <p className="font-sans text-[0.75rem] uppercase tracking-[0.1em] text-[#524437]">
            © {new Date().getFullYear()} Siddharth. Built for the permanent web.
          </p>
        </div>
        <div className="flex gap-8">
          <a className="font-sans text-[0.75rem] uppercase tracking-[0.1em] text-[#8A7A6A] hover:text-[#ebe1d6] transition-colors duration-300" href="#">LinkedIn</a>
          <a className="font-sans text-[0.75rem] uppercase tracking-[0.1em] text-[#8A7A6A] hover:text-[#ebe1d6] transition-colors duration-300" href="#">GitHub</a>
          <a className="font-sans text-[0.75rem] uppercase tracking-[0.1em] text-[#8A7A6A] hover:text-[#ebe1d6] transition-colors duration-300" href="#">Read.cv</a>
        </div>
      </div>
    </footer>
  );
}
