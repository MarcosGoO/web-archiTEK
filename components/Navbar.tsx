
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass h-16' : 'h-24'}`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-full flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-sm group-hover:rotate-45 transition-transform duration-500">
            <span className="text-white text-xs font-black">A</span>
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase hidden sm:block">Archi-Tek</span>
        </div>

        <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#studio" className="hover:text-primary transition-colors">Studio</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-8">
          <button className="hidden md:block text-[10px] font-bold uppercase tracking-widest border-b border-white/20 pb-1 hover:border-primary transition-all">
            Request Quote
          </button>
          <button className="bg-primary hover:bg-white hover:text-black text-white px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300">
            View Portfolio
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
