
import React, { useEffect, useState } from 'react';
import { MemoryFrame } from './components/MemoryFrame';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-rose-200 selection:text-rose-900 bg-[#09090b] text-zinc-100 selection:bg-white/10">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 px-8 py-6 flex justify-between items-center ${scrolled ? 'bg-black/80 backdrop-blur-2xl border-b border-white/5 py-4' : 'bg-transparent'}`}>
        <h1 className="text-[11px] tracking-[0.6em] uppercase font-light text-white/50 hover:text-white transition-all duration-500 cursor-default">
          White Nights
        </h1>
        <div className="flex items-center gap-6">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <span className="text-[10px] tracking-widest text-white/20 uppercase">Archive</span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="h-[70vh] flex flex-col items-center justify-center text-center px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="space-y-6 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-6xl md:text-8xl font-serif italic font-extralight tracking-tighter text-white/80 leading-tight">
            The Memory
          </h2>
          <div className="flex justify-center items-center gap-6">
            <div className="w-12 h-px bg-rose-500/30"></div>
            <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-medium">Visual Journal</p>
            <div className="w-12 h-px bg-rose-500/30"></div>
          </div>
        </div>
      </header>

      {/* Memory Content */}
      <main className="max-w-6xl mx-auto px-6 pb-64">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 lg:gap-40 items-center">
          
          {/* First Sequence */}
          <div className="space-y-16 group">
            <MemoryFrame 
              image="https://images.unsplash.com/photo-1516589174184-c6858b16ecb0?q=80&w=2574&auto=format&fit=crop" 
              caption="Sequence I"
              delay="0.6s"
              className="hover:shadow-[0_0_50px_rgba(255,255,255,0.02)] transition-shadow duration-1000"
            />
            <div className="animate-fade-in opacity-0 pl-8 border-l border-rose-500/10 group-hover:border-rose-500/30 transition-colors duration-1000" style={{ animationDelay: '0.9s' }}>
              <p className="text-2xl md:text-3xl font-serif italic text-zinc-400 leading-relaxed font-light">
                "All I need is a calm closeness,"
              </p>
            </div>
          </div>

          {/* Second Sequence */}
          <div className="space-y-16 md:mt-64 group">
            <div className="animate-fade-in opacity-0 pr-8 border-r border-rose-500/10 text-right group-hover:border-rose-500/30 transition-colors duration-1000" style={{ animationDelay: '1.4s' }}>
              <p className="text-2xl md:text-3xl font-serif italic text-zinc-400 leading-relaxed font-light">
                "something that feels safe and real."
              </p>
            </div>
            <MemoryFrame 
              image="https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2670&auto=format&fit=crop" 
              caption="Sequence II"
              delay="1.2s"
              className="hover:shadow-[0_0_50px_rgba(255,255,255,0.02)] transition-shadow duration-1000"
            />
          </div>

        </div>
        
        {/* Subtle Middle Text */}
        <div className="mt-64 text-center animate-fade-in opacity-0" style={{ animationDelay: '1.8s' }}>
           <div className="inline-block px-12 py-16 border border-white/[0.03] rounded-full bg-white/[0.01] backdrop-blur-3xl">
             <p className="text-zinc-600 text-[9px] tracking-[0.7em] uppercase mb-8">Epilogue</p>
             <h3 className="text-4xl font-serif italic text-zinc-300 font-extralight">In silence, we find everything.</h3>
           </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-24 border-t border-white/5 text-center px-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-white/[0.02] to-transparent pointer-events-none"></div>
        <div className="max-w-xs mx-auto space-y-8 relative z-10">
          <div className="w-[1px] h-16 bg-gradient-to-b from-rose-500/30 to-transparent mx-auto"></div>
          <p className="text-[9px] tracking-[0.8em] text-zinc-600 uppercase font-light">
            White Nights Memory &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
