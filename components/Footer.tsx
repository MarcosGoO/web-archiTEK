
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="pt-40 pb-16 px-6 bg-bg-card/20 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-24 mb-40">
          <div className="max-w-3xl">
            <h2 className="font-serif text-7xl md:text-9xl italic leading-[0.9] mb-16 text-white hover:text-primary transition-colors duration-700 cursor-default">
              Start a<br />Project
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
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">London</h4>
              <p className="text-white/40 text-sm leading-relaxed font-mono">
                51.5074° N<br />
                0.1278° W<br />
                Unit 4, Brutalist Mews<br />
                London, E1 6PX
              </p>
              <div className="pt-4 flex flex-col gap-2">
                <a href="mailto:info@archi-tek.com" className="text-xs text-white/60 hover:text-white border-b border-transparent hover:border-white w-fit transition-all">info@archi-tek.com</a>
                <a href="tel:+442071234567" className="text-xs text-white/60 hover:text-white border-b border-transparent hover:border-white w-fit transition-all">+44 (20) 7123 4567</a>
              </div>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Links</h4>
              <ul className="text-white/40 text-sm space-y-4 font-bold uppercase tracking-widest">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Behance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-16 gap-8 text-white/30">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 bg-primary/20 flex items-center justify-center">
              <span className="text-[8px] font-bold text-primary">A</span>
            </div>
            <span className="text-[10px] font-bold tracking-tighter uppercase">Archi-Tek Studio © 2024</span>
          </div>
          
          <div className="flex gap-12">
            <a href="#" className="text-[9px] uppercase tracking-[0.2em] hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-[9px] uppercase tracking-[0.2em] hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-[9px] uppercase tracking-[0.2em] hover:text-primary transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
