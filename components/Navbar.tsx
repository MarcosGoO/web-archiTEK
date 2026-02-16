import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-md h-16' : 'h-24'}`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              <path d="M12 12l3-3" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase font-heading text-white">Archi-Tek</span>
        </Link>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#studio" className="hover:text-primary transition-colors">Studio</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-8 text-white">
          <button className="hidden md:block text-[10px] font-bold uppercase tracking-widest border-b border-primary pb-0.5 hover:text-primary transition-all">
            Request Quote
          </button>
          <Link to="/portfolio" className="bg-primary hover:bg-white hover:text-black text-white px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300">
            View Portfolio
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
