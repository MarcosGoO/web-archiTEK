// Portfolio showcase page
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const allProjects = [
        { title: "Monolith House", location: "Iceland", image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2070&auto=format&fit=crop" },
        { title: "Steel Core HQ", location: "Chicago", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" },
        { title: "L-Pavilion", location: "Kyoto", image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2070&auto=format&fit=crop" },
        { title: "Urban Void", location: "Berlin", image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=2070&auto=format&fit=crop" },
        { title: "The Cube", location: "Dubai", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" },
        { title: "Glass Axis", location: "Singapore", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" },
        { title: "Sky Garden", location: "London", image: "components/041424_skytower_landinophoto_031.jpg" },
        { title: "Concrete Shell", location: "Mexico", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" },
        { title: "Linear Bridge", location: "Oslo", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop" },
        { title: "Void Library", location: "Seoul", image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop" },
    ];

    return (
        <div className="pt-32 pb-60 bg-black min-h-screen font-sans">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex justify-between items-end mb-24 border-b border-white/10 pb-12">
                    <div>
                        <Link to="/" className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-6 block hover:translate-x-2 transition-transform">← Back Home</Link>
                        <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter">Full<br />Portfolio</h1>
                    </div>
                    <div className="hidden md:block text-right">
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 mb-2">Displaying</p>
                        <p className="text-2xl font-black text-white">10 / 24</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allProjects.map((project, idx) => (
                        <div key={idx} className="group relative aspect-[4/5] overflow-hidden bg-white/5 border border-white/5">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.4] group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-[0.7] transition-all duration-1000"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-2 block font-heading">
                                    {project.location}
                                </span>
                                <h4 className="text-3xl font-bold text-white uppercase tracking-tight">
                                    {project.title}
                                </h4>
                                <div className="mt-6 w-12 h-[1px] bg-white/20 group-hover:w-full transition-all duration-700"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;
