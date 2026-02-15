
import React from 'react';

const Studio: React.FC = () => {
  const philosophies = [
    {
      id: "01",
      tag: "MATERIALITY",
      title: "Pure Form & Substance",
      description: "We explore the raw essence of materials, letting concrete and steel dictate the rhythm of the space.",
      icon: "texture"
    },
    {
      id: "02",
      tag: "GEOMETRY",
      title: "The Mathematical Void",
      description: "Precision is not an option; it is our foundation. Every angle is a calculated breath of air.",
      icon: "architecture"
    },
    {
      id: "03",
      tag: "HUMAN SCALE",
      title: "Intimate Monoliths",
      description: "Designing for the inhabitant, creating structures that feel both infinite and protective.",
      icon: "square_foot"
    }
  ];

  return (
    <section id="studio" className="py-32 md:py-60 px-6 max-w-[1400px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-20 items-start">
        <div className="lg:w-1/3 lg:sticky lg:top-40">
          <h2 className="font-serif text-6xl md:text-8xl leading-none italic mb-10 text-white">
            The<br />Studio
          </h2>
          <p className="text-white/50 text-lg leading-relaxed max-w-sm">
            Architectural paradigms redefined through the lens of radical minimalism and structural integrity.
          </p>
          <div className="mt-12 flex gap-4">
            <div className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all cursor-pointer">
              <span className="text-xs">→</span>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3 space-y-16">
          {philosophies.map((item, idx) => (
            <div 
              key={idx} 
              className={`p-10 md:p-16 bg-bg-card/30 border border-white/5 rounded-sm relative overflow-hidden group hover:bg-bg-card transition-all duration-700 ${idx % 2 !== 0 ? 'ml-auto max-w-2xl' : ''}`}
            >
              <span className="text-primary font-mono text-xs mb-6 block font-bold tracking-[0.2em]">
                {item.id} / {item.tag}
              </span>
              <h3 className="font-serif text-4xl md:text-5xl mb-8 italic group-hover:translate-x-4 transition-transform duration-700">
                {item.title}
              </h3>
              <p className="text-white/40 text-base md:text-lg leading-relaxed max-w-md">
                {item.description}
              </p>
              
              {/* Decorative Background Element */}
              <div className="absolute -right-12 -bottom-12 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-1000 rotate-12 group-hover:rotate-0">
                <div className="w-64 h-64 border-[10px] border-white"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Studio;
