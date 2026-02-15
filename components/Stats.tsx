
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    {
      value: "150+",
      label: "Global Projects Delivered",
      description: "From commercial skyscrapers to private luxury residences across four continents."
    },
    {
      value: "12",
      label: "Design Studios",
      description: "Operating in major architectural hubs to ensure localized precision and global standards."
    },
    {
      value: "24/7",
      label: "Project Monitoring",
      description: "Real-time structural integrity data for every phase of the construction lifecycle."
    }
  ];

  return (
    <section className="bg-bg-dark border-y border-white/5 py-32 md:py-48 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-6 border-l border-primary/20 pl-10 group hover:border-primary transition-colors duration-500">
              <span className="text-6xl md:text-7xl font-black tracking-tighter group-hover:text-primary transition-colors duration-300">
                {stat.value}
              </span>
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 block">
                  {stat.label}
                </span>
                <p className="text-sm text-white/40 leading-relaxed max-w-[280px]">
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
