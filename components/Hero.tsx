
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-bg-dark">
      {/* Immersive Background Video/Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Drone video playing behind the text with heavy filtering */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover grayscale opacity-20 scale-110"
          style={{ filter: 'contrast(1.2) brightness(0.5)' }}
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-drone-view-of-a-modern-city-at-night-23304-large.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/80 via-transparent to-bg-dark"></div>
      </div>

      <div className="relative z-10 text-center px-4 w-full flex flex-col items-center">
        <p className="text-primary font-bold tracking-[0.8em] text-[10px] md:text-xs uppercase mb-16 opacity-90 animate-pulse">
          STRUCTURAL PRECISION — LONDON / NYC / TOKYO
        </p>
        
        {/* Simplified White Typography with Dynamic Shimmer Effect */}
        <div className="relative group">
          <h1 className="text-[14vw] md:text-[16vw] font-black uppercase leading-[0.8] tracking-tighter select-none text-white mix-blend-difference relative">
            ARCHI-TEK
            
            {/* Shimmer / Scanline effect overlay */}
            <span className="absolute inset-0 overflow-hidden pointer-events-none">
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] animate-[shimmer_4s_infinite_linear]"></span>
            </span>
          </h1>
          
          {/* Subtle Ghosting / Depth Effect */}
          <div className="absolute -inset-1 opacity-10 blur-xl bg-white group-hover:opacity-20 transition-opacity duration-1000 -z-10"></div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-xl md:text-3xl font-light text-white/60 tracking-tight leading-relaxed max-w-2xl mx-auto">
            Defining the future through <span className="text-white font-medium border-b border-primary/40">radical minimalism</span> and structural integrity.
          </h2>
        </div>
      </div>

      {/* Decorative Metadata */}
      <div className="absolute bottom-12 left-12 hidden lg:block">
        <div className="flex flex-col gap-1.5 font-mono text-[9px] text-white/40 uppercase tracking-tighter">
          <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span> SYSTEM: ONLINE</p>
          <p>LAT: 51.5074° N</p>
          <p>LONG: 0.1278° W</p>
          <p className="text-primary/70 mt-2 font-bold tracking-widest">REF: AT-2024-CORE</p>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 hidden lg:block">
        <div className="flex items-center gap-4">
          <div className="w-16 h-[1px] bg-white/20"></div>
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/50">Explore Vision</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6">
        <div className="w-[1px] h-24 bg-gradient-to-b from-primary via-primary/20 to-transparent animate-[scrollLine_2s_infinite]"></div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { transform: translateX(-200%) skewX(-12deg); }
          100% { transform: translateX(300%) skewX(-12deg); }
        }
        @keyframes scrollLine {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}} />
    </section>
  );
};

export default Hero;
