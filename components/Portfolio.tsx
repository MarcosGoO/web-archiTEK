
import React from 'react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "Monolith House",
      location: "Iceland",
      image: "https://images.unsplash.com/photo-1518005020251-58296d8f8bca?q=80&w=2070&auto=format&fit=crop",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      title: "Steel Core HQ",
      location: "Chicago",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      span: "md:col-span-2 md:row-span-1"
    },
    {
      title: "L-Pavilion",
      location: "Kyoto",
      image: "https://images.unsplash.com/photo-1511149755252-b5cda5828865?q=80&w=2070&auto=format&fit=crop",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      title: "Urban Void",
      location: "Berlin",
      image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=2070&auto=format&fit=crop",
      span: "md:col-span-1 md:row-span-1"
    }
  ];

  return (
    <section id="projects" className="py-32 md:py-60 px-6">
      <div className="max-w-[1400px] mx-auto mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        <div>
          <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-6">Portfolio</h2>
          <h3 className="font-serif text-5xl md:text-7xl italic text-white">Selected Works</h3>
        </div>
        <button className="text-[10px] font-bold uppercase tracking-widest border-b border-primary pb-3 hover:text-primary transition-all">
          View All Projects
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[1200px] max-w-[1400px] mx-auto">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className={`relative group overflow-hidden bg-bg-card ${project.span} min-h-[400px]`}
          >
            <img 
              className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
              src={project.image} 
              alt={project.title}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            
            <div className="absolute inset-0 flex flex-col justify-end p-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                {project.location}
              </span>
              <h4 className="font-serif text-3xl italic text-white">
                {project.title}
              </h4>
              <div className="mt-6 w-12 h-[1px] bg-white/30 group-hover:w-full transition-all duration-700"></div>
            </div>
            
            <div className="absolute top-8 right-8 w-12 h-12 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 rotate-45 group-hover:rotate-0">
              <span className="text-white text-xs">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
