
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="pt-40 pb-16 px-6 bg-black border-t border-white/5 font-sans">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-24 mb-40">
          <div className="max-w-3xl">
            <h2 className="text-6xl md:text-9xl font-black leading-[0.9] mb-16 text-white uppercase tracking-tighter cursor-default group transition-colors duration-700">
              Start a<br />
              <span className="group-hover:text-primary transition-colors">Project</span>
            </h2>
            <button className="relative group overflow-hidden bg-primary text-white px-12 py-6 text-[10px] font-bold uppercase tracking-[0.4em] transition-all">
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <span className="absolute inset-0 z-20 flex items-center justify-center text-black font-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Let's Talk
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary font-heading">London</h4>
              <p className="text-white/30 text-sm leading-relaxed font-mono">
                51.5074° N<br />
                0.1278° W<br />
                Unit 4, Brutalist Mews<br />
                London, E1 6PX
              </p>
              <div className="pt-4 flex flex-col gap-2">
                <a href="mailto:info@archi-tek.com" className="text-xs text-white/50 hover:text-white border-b border-transparent hover:border-white w-fit transition-all duration-300">info@archi-tek.com</a>
                <a href="tel:+442071234567" className="text-xs text-white/50 hover:text-white border-b border-transparent hover:border-white w-fit transition-all duration-300">+44 (20) 7123 4567</a>
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary font-heading">Social</h4>
              <ul className="text-white/30 text-sm space-y-4 font-bold uppercase tracking-[0.3em]">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Behance</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-16 gap-8 text-white/20">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary/40 fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
              </svg>
            </div>
            <span className="text-[9px] font-bold tracking-mega uppercase">Archi-Tek Studio © 2026</span>
          </div>

          <div className="flex gap-12">
            <a href="#" className="text-[9px] uppercase tracking-[0.2em] hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="text-[9px] uppercase tracking-[0.2em] hover:text-primary transition-colors">Terms</a>
            <a href="#" className="text-[9px] uppercase tracking-[0.2em] hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
