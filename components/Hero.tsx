import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black font-sans">
      {/* Layer 1: High Contrast B&W Architectural Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Architectural Structure"
          className="w-full h-full object-cover grayscale brightness-[0.2] contrast-[1.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
      </div>

      <div className="relative z-10 text-center px-4 w-full flex flex-col items-center">
        {/* Subtitle */}
        <p className="text-primary font-bold tracking-ultra text-[10px] md:text-xs uppercase mb-16 font-heading animate-fade-in">
          ESTABLISHED 1998 — LONDON / NYC / TOKYO
        </p>

        {/* Massive ARCHI-TEK Title with Video Mask Effect */}
        <div className="relative w-full max-w-[95vw] h-[20vw] md:h-[15vw] flex items-center justify-center mb-16 overflow-hidden">
          {/* Video in the background of the mask layer */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-architectural-drone-shot-of-a-modern-building-42358-large.mp4" type="video/mp4" />
          </video>

          {/* The Mask Overlay: Black background with White text + mix-blend-multiply */}
          {/* This reveals the video only where the text is white */}
          <div className="absolute inset-0 flex items-center justify-center bg-black mix-blend-multiply">
            <h1 className="text-[14vw] md:text-[16vw] font-black uppercase leading-none tracking-tighter text-white font-sans select-none text-center">
              ARCHI-TEK
            </h1>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto relative z-20">
          <h2 className="text-lg md:text-2xl font-light text-white/50 tracking-tight leading-relaxed max-w-2xl mx-auto italic">
            Defining the future through <span className="text-white font-medium not-italic">structural precision</span> and radical minimalism.
          </h2>
        </div>
      </div>

      {/* Decorative Metadata */}
      <div className="absolute bottom-12 left-12 hidden lg:block font-mono text-[9px] text-white/20 uppercase tracking-[0.3em]">
        <div className="flex flex-col gap-1.5 border-l border-primary/40 pl-4">
          <p>LAT: 51.5074° N</p>
          <p>LONG: 0.1278° W</p>
          <p>PRECISION: 99.998%</p>
          <p className="text-primary/60 mt-3 font-bold border-t border-white/10 pt-1">REF: AT-2024-CORE</p>
        </div>
      </div>

      {/* Scroll Indicator (Center) */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-[1px] h-32 bg-gradient-to-b from-primary/80 to-transparent"></div>
      </div>

      {/* Explore Metadata (Right) */}
      <div className="absolute bottom-12 right-12 hidden lg:block">
        <div className="flex items-center gap-4">
          <div className="w-12 h-[1px] bg-white/20"></div>
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/40 font-bold">Scroll to explore</p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.5s ease-out forwards;
        }
      `}} />
    </section>
  );
};
export default Hero;
