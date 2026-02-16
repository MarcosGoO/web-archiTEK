// Client inquiry form
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RequestQuote: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formState, setFormState] = useState('idle');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid e-mail (xxx@domain.com)');
            return;
        }
        setEmailError('');
        setFormState('sending');
        setTimeout(() => setFormState('success'), 1500);
    };

    return (
        <div className="pt-32 pb-60 bg-black min-h-screen font-sans">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/2">
                        <Link to="/" className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8 block hover:translate-x-2 transition-transform w-fit">← Back Home</Link>
                        <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-10 leading-none">
                            Request<br />a Quote
                        </h1>
                        <p className="text-white/40 text-lg leading-relaxed max-w-md mb-12">
                            Tell us about your vision. We specialize in structural precision and radical minimalism for high-impact architecture.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4 font-heading">Direct Contact</h4>
                                <p className="text-white/30 text-sm font-mono leading-loose">
                                    quotes@archi-tek.com<br />
                                    +44 (20) 7123 4567
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        {formState === 'success' ? (
                            <div className="h-full flex flex-col items-center justify-center p-12 bg-white/5 border border-primary/20 animate-fade-in text-center">
                                <div className="w-16 h-16 border border-primary flex items-center justify-center mb-8">
                                    <span className="text-primary text-xl">✓</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-4">Inquiry Sent</h3>
                                <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                                    Our studio will review your project details and contact you within 48 hours.
                                </p>
                                <button
                                    onClick={() => setFormState('idle')}
                                    className="mt-8 text-[10px] font-bold uppercase tracking-widest text-primary hover:text-white transition-colors"
                                >
                                    Send another request
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Client Name</label>
                                        <input required className="w-full bg-white/5 border border-white/10 px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors font-mono text-sm" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                if (emailError) setEmailError('');
                                            }}
                                            className={`w-full bg-white/5 border ${emailError ? 'border-primary' : 'border-white/10'} px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors font-mono text-sm`}
                                            placeholder="john@example.com"
                                        />
                                        {emailError && <p className="text-[9px] text-primary uppercase tracking-widest mt-1">{emailError}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Project Type</label>
                                    <select className="w-full bg-white/5 border border-white/10 px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors appearance-none font-mono text-sm">
                                        <option className="bg-black">Residential Monolith</option>
                                        <option className="bg-black">Commercial HQ</option>
                                        <option className="bg-black">Public Pavilion</option>
                                        <option className="bg-black">Urban Planning</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Message</label>
                                    <textarea required rows={6} className="w-full bg-white/5 border border-white/10 px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors font-mono text-sm resize-none" placeholder="Describe the scale and location of your project..."></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={formState === 'sending'}
                                    className="w-full bg-primary hover:bg-white hover:text-black text-white px-12 py-6 text-[10px] font-bold uppercase tracking-[0.4em] transition-all disabled:opacity-50"
                                >
                                    {formState === 'sending' ? 'Transmitting...' : 'Submit Inquiry'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestQuote;
