
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    {
      value: "150+",
      label: "Global Projects",
      description: "Delivering architectural excellence across four continents."
    },
    {
      value: "12",
      label: "Studios",
      description: "Operating in major hubs to ensure localized precision."
    },
    {
      value: "24/7",
      label: "Monitoring",
      description: "Real-time structural data for every construction phase."
    }
  ];

  return (
    <section className="bg-black border-y border-white/5 py-32 md:py-48 px-6 font-sans">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-6 border-l border-primary/30 pl-10 group hover:border-primary transition-colors duration-700">
              <span className="text-6xl md:text-8xl font-black tracking-tighter text-white group-hover:text-primary transition-colors duration-500">
                {stat.value}
              </span>
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 block font-heading">
                  {stat.label}
                </span>
                <p className="text-sm text-white/30 leading-relaxed max-w-[280px]">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
