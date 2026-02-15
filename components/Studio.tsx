
import React from 'react';

const Studio: React.FC = () => {
  const philosophies = [
    {
      id: "01",
      tag: "MATERIALITY",
      title: "Pure Form & Substance",
      description: "We explore the raw essence of materials, letting concrete and steel dictate the rhythm of the space.",
    },
    {
      id: "02",
      tag: "GEOMETRY",
      title: "The Mathematical Void",
      description: "Precision is not an option; it is our foundation. Every angle is a calculated breath of air.",
    },
    {
      id: "03",
      tag: "HUMAN SCALE",
      title: "Intimate Monoliths",
      description: "Designing for the inhabitant, creating structures that feel both infinite and protective.",
    }
  ];

  return (
    <section id="studio" className="py-32 md:py-60 px-6 max-w-[1400px] mx-auto font-sans">
      <div className="flex flex-col lg:flex-row gap-20 items-start">
        <div className="lg:w-1/3 lg:sticky lg:top-40">
          <h2 className="text-6xl md:text-8xl font-black leading-none mb-10 text-white uppercase tracking-tighter">
            The<br />Studio
          </h2>
          <p className="text-white/40 text-lg leading-relaxed max-w-sm">
            Architectural paradigms redefined through the lens of radical minimalism and structural integrity.
          </p>
          <div className="mt-12 flex gap-4">
            <div className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all cursor-pointer group">
              <span className="text-xs group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3 space-y-12">
          {philosophies.map((item, idx) => (
            <div
              key={idx}
              className={`p-10 md:p-20 bg-bg-card/20 border border-white/5 relative overflow-hidden group hover:bg-bg-card transition-all duration-700 ${idx % 2 !== 0 ? 'ml-auto max-w-2xl' : ''}`}
            >
              <span className="text-primary font-bold text-[10px] mb-6 block tracking-[0.4em] font-heading">
                {item.id} / {item.tag}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white uppercase tracking-tight group-hover:translate-x-4 transition-transform duration-700">
                {item.title}
              </h3>
              <p className="text-white/30 text-base md:text-lg leading-relaxed max-w-md">
                {item.description}
              </p>

              {/* Decorative Line */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-white/5 group-hover:border-primary/40 transition-colors duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Studio;
