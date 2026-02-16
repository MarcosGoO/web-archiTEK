
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black font-sans">
      {/* Background Image Layer with High Contrast Architectural Grid */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Architectural Grid"
          className="w-full h-full object-cover grayscale brightness-[0.3]"
        />
        {/* Subtle overlay to enhance contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      </div>

      <div className="relative z-10 text-center px-4 w-full flex flex-col items-center">
        {/* Established Subtitle */}
        <p className="text-primary font-bold tracking-ultra text-[10px] md:text-xs uppercase mb-12 font-heading">
          ESTABLISHED 1998 — LONDON / NYC / TOKYO
        </p>

        {/* Massive ARCHI-TEK Title with Video Mask */}
        <div className="relative w-full max-w-[90vw] h-[15vw] md:h-[12vw] flex items-center justify-center mb-12">
          {/* SVG Mask Definition */}
          <svg className="absolute w-0 h-0">
            <defs>
              <clipPath id="textMask" clipPathUnits="objectBoundingBox">
                {/* Approximate path for "ARCHI-TEK" - using an image or text is better, 
                    but for complexity we can use a foreignObject or simply CSS background-clip if supported.
                    Since we want deep impact, we'll use CSS background-clip: text with a video background.
                */}
              </clipPath>
            </defs>
          </svg>

          <div className="relative w-full h-full flex items-center justify-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-0"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-drone-view-of-a-modern-city-at-night-23304-large.mp4" type="video/mp4" />
            </video>

            <h1 className="text-[12vw] md:text-[14vw] font-black uppercase leading-none tracking-tighter text-transparent bg-clip-text bg-no-repeat bg-cover bg-center animate-fade-in select-none"
              style={{
                backgroundImage: 'url("https://assets.mixkit.co/videos/preview/mixkit-drone-view-of-a-modern-city-at-night-23304-large.mp4")',
                WebkitBackgroundClip: 'text',
                backgroundColor: 'white', // Fallback
              }}
            >
              ARCHI-TEK
            </h1>

            {/* Real Video Layer for the mask effect */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h1 className="text-[12vw] md:text-[14vw] font-black uppercase leading-none tracking-tighter text-transparent bg-clip-text select-none z-20"
                style={{ WebkitBackgroundClip: 'text' }}>
                ARCHI-TEK
              </h1>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-10"
                style={{ clipPath: 'url(#textMask)' }} // We will use a simpler approach below for better compatibility
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-drone-view-of-a-modern-city-at-night-23304-large.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* Refined approach for video mask using mix-blend-mode */}
        <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden pointer-events-none mb-12">
          <div className="relative w-full h-full flex items-center justify-center bg-black">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute w-full h-full object-cover opacity-60"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-architectural-drone-shot-of-a-modern-building-42358-large.mp4" type="video/mp4" />
            </video>
            <h1 className="text-[12vw] md:text-[14vw] font-black uppercase leading-none tracking-tighter text-black bg-white w-full h-full flex items-center justify-center mix-blend-multiply select-none font-sans">
              ARCHI-TEK
            </h1>
          </div>
        </div>

        {/* Description Subtitle */}
        <div className="max-w-3xl mx-auto mt-[12vw] relative z-20">
          <h2 className="text-lg md:text-2xl font-light text-white/50 tracking-tight leading-relaxed max-w-2xl mx-auto">
            Defining the future through <span className="text-white font-medium">structural precision</span> and radical minimalism.
          </h2>
        </div>
      </div>

      {/* Decorative Metadata (Left) */}
      <div className="absolute bottom-12 left-12 hidden lg:block font-mono text-[9px] text-white/30 uppercase tracking-widest">
        <div className="flex flex-col gap-1.5">
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
